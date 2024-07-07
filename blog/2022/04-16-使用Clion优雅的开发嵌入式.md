---
tags: [em]
---

# 使用Clion优雅的开发嵌入式

需要的环境

- gcc-arm-none-eabi（编译代码生成下载固件）
- OpenOCD（下载固件）
- STM32CubeMX（生成初始代码）

# 配置环境

https://pic2.zhimg.com/80/v2-1f20aa45b28606d1ac2d49e752465b75_1440w.webp

1.下载gcc-arm-none-eabi

官网地址：https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/gnu-rm/downloads

官方下载链接：https://developer.arm.com/-/media/Files/downloads/gnu-rm/10.3-2021.10/gcc-arm-none-eabi-10.3-2021.10-win32.zip

网盘地址：

2.下载OpenOCD

下载站地址：[Download OpenOCD for Windows (gnutoolchains.com)](https://gnutoolchains.com/arm-eabi/openocd/)

下载连接：https://sysprogs.com/getfile/1748/openocd-20211118.7z

网盘地址：

3.下载STM32CubeMX

官网地址：[STM32CubeMX - STM32Cube初始化代码生成器 - STMicroelectronics](https://www.st.com/zh/development-tools/stm32cubemx.html)

网盘地址：

4.将gcc-arm-none-eabi、OpenOCD加入环境变量

# 下载Clion

1.官网下载clion[下载地址](https://www.jetbrains.com/zh-cn/clion/download/download-thanks.html?platform=windows)

![image-20220416161329445](http://picture.luckstare.ltd/202204161613607.png)

2.安装clion

3.启动clion安装中文插件

![image-20220416161557930](http://picture.luckstare.ltd/202204161615000.png)

选择**红色**框框的那个

安装好后，需要重启IDE

# 使用clion点亮一个灯

1.使用stm32cubx初始化代码（这里使用stm32f103c8作为示例）

如何使用stm32cubx就不在这里演示了

只贴出注意事件

![image-20220416162251433](http://picture.luckstare.ltd/202204161622566.png)

2.使用clion打开

![image-20220416162739822](http://picture.luckstare.ltd/202204161627880.png)

打开工程

![image-20220416162837724](http://picture.luckstare.ltd/202204161628785.png)

点击确定

![image-20220416162902543](http://picture.luckstare.ltd/202204161629664.png)

然后就和普通的嵌入式开发差不多了

我们在这里简单的写个闪烁灯的程序

![image-20220416165808011](http://picture.luckstare.ltd/202204161658148.png)

点击那个小锤子的按钮就可以编译了

![image-20220416165821499](http://picture.luckstare.ltd/202204161658629.png)

编译成功，显示目标文件大小

![image-20220416165914704](http://picture.luckstare.ltd/202204161659831.png)

3.下载到开发板上

编辑面板配置文件

在项目目录下创建一个以.cfg为后缀的文件

打开后，写OpenOCD配置文件，在这里给出使用stlink的配置文件

```
source [find interface/stlink-v2.cfg]
transport select hla_swd
source [find target/stm32f1.cfg]
reset_config none
```

编辑运行配置

![image-20220416170052565](http://picture.luckstare.ltd/202204161700693.png)

![image-20220416171544870](http://picture.luckstare.ltd/202204161715940.png)

![image-20220416171514450](http://picture.luckstare.ltd/202204161715541.png)

选择下载的固件

![image-20220416172304345](http://picture.luckstare.ltd/202204161723424.png)

点击右上角的小三角即可下载固件

下载成功会提示下载成功
