# LED 驱动开发

使用HDF框架开发LED驱动

> HDF框架解读[跳转]()

## 驱动文件

### 概述

最主要的是要实现驱动服务接口

结构体的原型为：`struct HdfDriverEntry`

| 参数          | 类型             | 解释                                                  |
| ------------- | ---------------- | ----------------------------------------------------- |
| moduleVersion | int              | 驱动版本                                              |
| moduleName    | string           | 驱动名称                                              |
| Bind          | function pointer | 驱动对外提供的服务能力，将相关的服务接口绑定到HDF框架 |
| Init          | function pointer | 驱动自身业务初始的接口                                |
| Release       | function pointer | 驱动资源释放的接口                                    |

- moduleVersion

  驱动的版本号，没什么好说的，一般学习的时候填1即可

- moduleName

  驱动的名称，一定是全局唯一的！非常重要

- Bind

  对外服务绑定，需要实现一个函数

- Init

  初始化接口，当初始化该驱动时，由HDF调用，需要实现一个函数

- Release

  驱动释放时，由HDF调用，需要实现一个函数

### 代码实现

目录结构

```shell
.
└── device        
    └── st
        └── drivers
            └── led
                │── led.c
                └── BUILD.gn
```

1. 首先，定义一个`HdfDriverEntry`确定驱动的基本框架

    ```c
    // 定义驱动入口的对象，必须为HdfDriverEntry（在hdf_device_desc.h中定义）类型的全局变量
    struct HdfDriverEntry g_ledDriverEntry = {
        .moduleVersion = 1,
        .moduleName = "HDF_LED",
        .Bind = HdfLedDriverBind,
        .Init = HdfLedDriverInit,
        .Release = HdfLedDriverRelease,
    };
    ```

	使用`HDF_INIT`宏定义将定义好的驱动加入到，HDF框架中

    ```c
    // 调用HDF_INIT将驱动入口注册到HDF框架中
    HDF_INIT(g_ledDriverEntry);
    ```

2. 接下来，实现驱动的初始化函数

  根据函数的原型定义：`int32_t (*Bind)(struct HdfDeviceObject *deviceObject);`

  在这个函数中，我们需要做这几件事：

  - 获取GPIO编号值
  - 配置GPIO为输出

   ```c
   // 定义驱动参数
   struct Stm32Mp1ILed {
       uint32_t gpioNum;
   };
  
  /**
   * @brief 读取驱动私有配置
   *
   * @param led
   * @param node
   * @return int32_t
   */
  static int32_t Stm32LedReadDrs(struct Stm32Mp1ILed *led, const struct DeviceResourceNode *node)
  {
      int32_t ret;
      struct DeviceResourceIface *drsOps = NULL;
  
      drsOps = DeviceResourceGetIfaceInstance(HDF_CONFIG_SOURCE);
      if (drsOps == NULL || drsOps->GetUint32 == NULL) {
          HDF_LOGE("%s: invalid drs ops!", __func__);
          return HDF_FAILURE;
      }
      /* 读取led.hcs里面led_gpio_num的值 */
      ret = drsOps->GetUint32(node, "led_gpio_num", &led->gpioNum, 0);
      if (ret != HDF_SUCCESS) {
          HDF_LOGE("%s: read led gpio num fail!", __func__);
          return ret;
      }
      return HDF_SUCCESS;
  }
  
   // 驱动自身业务初始的接口
   int32_t HdfLedDriverInit(struct HdfDeviceObject *device)
   {
       struct Stm32Mp1ILed *led = &g_Stm32Mp1ILed;
       int32_t ret;
  
       if (device == NULL || device->property == NULL) {
           HDF_LOGE("%s: device or property NULL!", __func__);
           return HDF_ERR_INVALID_OBJECT;
       }
       /* 读取hcs私有属性值 */
       ret = Stm32LedReadDrs(led, device->property);
       if (ret != HDF_SUCCESS) {
           HDF_LOGE("%s: get led device resource fail:%d", __func__, ret);
           return ret;
       }
       /* 将GPIO管脚配置为输出 */
       ret = GpioSetDir(led->gpioNum, GPIO_DIR_OUT);
       if (ret != 0)
       {
           HDF_LOGE("GpioSerDir: failed, ret %d\n", ret);
           return ret;
       }
       HDF_LOGD("Led driver Init success");
       return HDF_SUCCESS;
   }
   ```

3. 接下来，编写驱动释放时的钩子函数

	由于LED并没有使用动态的资源，所以，只是打印了日志

    ```c
    // 驱动资源释放的接口
    void HdfLedDriverRelease(struct HdfDeviceObject *deviceObject)
    {
        if (deviceObject == NULL)
        {
            HDF_LOGE("Led driver release failed!");
            return;
        }
        HDF_LOGD("Led driver release success");
        return;
    }
    ```

4. 接下来，编写服务绑定钩子函数

   用于绑定驱动的服务，对于LED驱动来说，提供接口使上层应用
   
   ```c
   /**
    * @brief Dispatch是用来处理用户态发下来的消息
    * 
    * @param client 
    * @param cmdCode 
    * @param data 
    * @param reply 
    * @return int32_t 
    */
   int32_t LedDriverDispatch(struct HdfDeviceIoClient *client, int cmdCode, struct HdfSBuf *data, struct HdfSBuf *reply)
   {
       uint8_t contrl;
       HDF_LOGI("Led driver dispatch");
       if (client == NULL || client->device == NULL)
       {
           HDF_LOGE("Led driver device is NULL");
           return HDF_ERR_INVALID_OBJECT;
       }
   
       switch (cmdCode)
       {
       /* 接收到用户态发来的LED_WRITE_READ命令 */
       case LED_WRITE_READ:
           /* 读取data里的数据，赋值给contrl */
           HdfSbufReadUint8(data,&contrl);                  
           switch (contrl)
           {
           /* 开灯 */
           case LED_ON:                                            
               GpioWrite(g_Stm32Mp1ILed.gpioNum, GPIO_VAL_LOW);
               status = 1;
               break;
           /* 关灯 */
           case LED_OFF:                                           
               GpioWrite(g_Stm32Mp1ILed.gpioNum, GPIO_VAL_HIGH);
               status = 0;
               break;
           /* 状态翻转 */
           case LED_TOGGLE:
               if(status == 0)
               {
                   GpioWrite(g_Stm32Mp1ILed.gpioNum, GPIO_VAL_LOW);
                   status = 1;
               }
               else
               {
                   GpioWrite(g_Stm32Mp1ILed.gpioNum, GPIO_VAL_HIGH);
                   status = 0;
               }                                        
               break;
           default:
               break;
           }
           /* 把LED的状态值写入reply, 可被带至用户程序 */
           if (!HdfSbufWriteInt32(reply, status))                
           {
               HDF_LOGE("replay is fail");
               return HDF_FAILURE;
           }
           break;
       default:
           break;
       }
       return HDF_SUCCESS;
   }
   
   //驱动对外提供的服务能力，将相关的服务接口绑定到HDF框架
   int32_t HdfLedDriverBind(struct HdfDeviceObject *deviceObject)
   {
       if (deviceObject == NULL)
       {
           HDF_LOGE("Led driver bind failed!");
           return HDF_ERR_INVALID_OBJECT;
       }
       static struct IDeviceIoService ledDriver = {
           // 绑定的处理函数
           .Dispatch = LedDriverDispatch,
       };
       deviceObject->service = (struct IDeviceIoService *)(&ledDriver);
       HDF_LOGD("Led driver bind success");
       return HDF_SUCCESS;
   }
   ```
   
   到这里，我们就已经完成了LED驱动代码的编写
   
   接下来，我们将我们写代码加入编译
   
   ```
   # led/BUILD.gn
   import("//drivers/adapter/khdf/liteos/hdf.gni")
   
   hdf_driver("hdf_led") {
       sources = [
       "led.c",
       ]
   }
   ```
   
   ```gn
   # BUILD.gn
   group("drivers") {
     deps = [
       "adc",
       "pwm",
       "uart",
       "iwdg",
       "i2c",
       "gpio",
       "e53_driver",
       "stm32mp1xx_hal",
       # my driver
       "led",
     ]
   }
   ```

## 驱动配置文件

### 板级配置

需要将写好的LED驱动文件配置到系统的HDF管理器中

```hcs
platform :: host {
            hostName = "platform_host";
            priority = 50;
            device_led :: device {                         // led设备节点
                device0 :: deviceNode {                    // led驱动的DeviceNode节点
                    policy = 2;                            // policy字段是驱动服务发布的策略，在驱动服务管理章节有详细介绍
                    priority = 10;                         // 驱动启动优先级（0-200），值越大优先级越低，建议默认配100，优先级相同则不保证device的加载顺序
                    preload = 1;                           // 驱动按需加载字段
                    permission = 0777;                     // 驱动创建设备节点权限
                    moduleName = "HDF_LED";                // 驱动名称，该字段的值必须和驱动入口结构的moduleName值一致
                    serviceName = "hdf_led";               // 驱动对外发布服务的名称，必须唯一
                    deviceMatchAttr = "st_stm32mp157_led"; // 驱动私有数据匹配的关键字，必须和驱动私有数据配置表中的match_attr值相等
                }
            }

            device_pwm :: device {
                device0 :: deviceNode {
                    policy = 1;
                    priority = 12;
                    permission = 0644;
                    moduleName = "HDF_PLATFORM_PWM";
                    serviceName = "HDF_PLATFORM_PWM_2";
                    deviceMatchAttr = "st_stm32mp157_pwm_2"; 
                }
                device1 :: deviceNode {
                    policy = 1;
                    priority = 12;
                    permission = 0644;
                    moduleName = "HDF_PLATFORM_PWM";
                    serviceName = "HDF_PLATFORM_PWM_3";
                    deviceMatchAttr = "st_stm32mp157_pwm_3"; 
                }
            }
            ......
```

### LED私有配置

在驱动编写的时候，我们使用了`DeviceResourceGetIfaceInstance`函数获取的驱动配置文件，我们从配置文件中获取了`led_gpio_num`属性，但是，我们并没有定义这个属性，我们需要在`device/st/bearpi_hm_micro/liteos_a/hdf_config/led/led_config.hcs`文件中定义

```hcs
root {
    LedDriverConfig {
        led_gpio_num = 13;
        match_attr = "st_stm32mp157_led";   //该字段的值必须和device_info.hcs中的deviceMatchAttr值一致
    }
}
```

## JS API驱动接口

> [!tip]
>
> 由于作者的水平有限，并没有了解到如何将私有的JS接口抽象出来
>
> 按道理来说，应该是可以作为使用某个初始化宏加入到ace框架中，但是，并没有发现有文档说明

在经历以上步骤后，其实，已经可以使用HDF框架的能力使用LED了，但是，这个只能通过C接口操作LED，但是，为了HAP应用也可以操作LED，我们需要提供JS接口，这样HAP应用可以通过JS接口，操作LED。

这里就给出，小熊派的文档链接：

[applications/BearPi/BearPi-HM_Micro/docs/device-dev/通过JS应用控制LED灯.md · 小熊派开源社区/BearPi-HM_Micro_small - Gitee.com](https://gitee.com/bearpi/bearpi-hm_micro_small/blob/master/applications/BearPi/BearPi-HM_Micro/docs/device-dev/通过JS应用控制LED灯.md)

## 开发测试LED HAP应用

> 在这里只讨论

使用`@system.app`包，发送指令驱动LED



## 参考链接

- [applications/BearPi/BearPi-HM_Micro/docs/device-dev/编写一个点亮LED灯程序.md · 小熊派开源社区/BearPi-HM_Micro_small - Gitee.com](https://gitee.com/bearpi/bearpi-hm_micro_small/blob/master/applications/BearPi/BearPi-HM_Micro/docs/device-dev/编写一个点亮LED灯程序.md#二点亮led灯业务代码)
- [驱动概述 (openharmony.cn)](https://docs.openharmony.cn/pages/v4.0/zh-cn/device-dev/driver/driver-overview-foundation.md)
