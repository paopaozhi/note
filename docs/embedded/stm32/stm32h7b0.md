# STM32H7B0中文应用手册

> 自主翻译，实力有限，酌情参考！🤖
>
> 翻译来源为：[Reference manual-STM32H7A3/7B3 and STM32H7B0 Value line  advanced Arm®-based 32-bit MCUs-December 2023](https://www.st.com.cn/resource/en/reference_manual/rm0455-stm32h7a37b3-and-stm32h7b0-value-line-advanced-armbased-32bit-mcus-stmicroelectronics.pdf)

**介绍**
本参考手册的目标是应用程序开发人员。它提供了关于的完整信息
如何使用STM32H7A3/7B3和STM32H7B0单片机的内存和外设。

STM32H7A3/7B3和STM32H7B0是不同内存大小的微控制器，
包和外设。

该设备采用ST最先进的专利技术。订购信息、机电设备特性请参考
对应的数据表。

有关带有FPU内核的Arm®Cortex®-M7的信息，请参阅相应的
Arm技术参考手册。

**相关文档**

- Arm®Cortex®-M7技术参考手册，可从www.arm.com获得。
- Cortex®-M7编程手册(PM0253)。
- STM32H7A3xI/G, STM32H7B3xI和STM32H7B0xB数据表
- STM32H7A3/7B3和STM32H750勘误表

## 24. OCTO-SPI 接口

### 24.1 介绍

OCTO-SPI支持许多串行存储器例如：串行PSRAMs，NANDFalsh和NORFalsh存储器，HyperRAM和HyperFalsh，具有以下功能模式：

- 间接模式

  全部运行是

- 自动状态轮询模式

- 内存映射模式

OCTO-SPI支持以下协议相关帧格式：

- 寄存器命令格式，如：命令，地址，更改数据字节，和数据相位

### 24.2 OCTO-SPI 主要功能

- 功能模式：
- 在内存映射模式支持读和写
- 外部内存存储器支持
- 支持单，双，四和八进制通讯
- 双-四配置，在8bit可以通过并行访问两个四进制内存同时发送和接收
- SDR和DTR支持
- 数据闪存支持
- 完全可编程操作码
- 完全可编程帧格式
- 支持在读方向对存储器的封装式访问
- `HyperBus`支持
- 在接收和传输集成`FIFO`
- 异步总线时钟与内核总线时钟支持
- 允许访问8，16和32bit数据
- 间接模式操作的DMA通道
- 在FIFO阈值，超时，操作完成和访问超时产生中断
- 事务接受限制为一个的AXI接口:接口只有在内存端完成前一个传输后才接受AXI总线上的下一个传输。

### 24.3 OCTO-SPI 实现

### 24.4 OCTO-SPI 功能描述

