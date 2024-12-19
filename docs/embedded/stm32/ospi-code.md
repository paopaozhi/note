# 使用QSPI外扩Falsh

## 编写bootload程序

由于无法配置H7的默认上电运行位置，所以，我们必须编写一个`bootloader`程序用于单片上电后，跳转到外部Flash运行。

> bootloader程序使用STMcubx生成的`Core`文件夹下的文件制作

### STM32CUBX配置

选择对应的芯片型号，进入配置界面，在进入配置界面之前会询问你是否要使用默认的`Cortex-M7`的配置，需要选择是。

接下来，我们配置一些基本的配置外设

- Cortex-M7

  关闭MPU设置

  关闭`ICache`和`DCache`

  配置好的界面如下参考：

  ![Cortex-m7-config](./figures/image-20240901144111487.png)

- 配置时钟

  ![RCC-config](./figures/image-20240901144715998.png)

  ![clock-config](./figures/image-20240901144635544.png)

- 配置串口（非必要！！）

  > 需要注意的是：H7系列串口1的默认的映射端口不是PA9和PA10需要自己根据原理图修改

  ![uart-config](./figures/image-20240901144853738.png)

选择合适的位置生成工程，工具链选择：CMake或者STM32CubeIDE。

### 编写bootloader程序

在生成的文件中，新建一个文件夹用于专门存放bootloader程序，创建好的文件目录。

```shell
├─bootloader
│  ├─inc
│  └─src
```

为bootloader编写CMake文件。

```cmake
project(bootloader)

set(SOC_ST_PATH "${CMAKE_SOURCE_DIR}")
set(SOC_DRIVERS_CMSIS_PATH ${SOC_ST_PATH}/Drivers/CMSIS)
set(SOC_DRIVERS_STMH7_PATH ${SOC_ST_PATH}/Drivers/STM32H7xx_HAL_Driver)

add_executable(${PROJECT_NAME})

target_link_options(${PROJECT_NAME}
    PRIVATE 
        -T "${PROJECT_SOURCE_DIR}/STM32H7B0VBTx_FLASH.ld"
        "-Wl,-Map=${PROJECT_NAME}.map"
)

target_compile_definitions(${PROJECT_NAME} PRIVATE 
	USE_HAL_DRIVER 
	STM32H7B0xx
)

target_include_directories(${PROJECT_NAME} PRIVATE
    inc

    ${SOC_DRIVERS_CMSIS_PATH}/Include
    ${SOC_DRIVERS_CMSIS_PATH}/Device/ST/STM32H7xx/Include
    ${SOC_DRIVERS_STMH7_PATH}/Inc
    ${SOC_DRIVERS_STMH7_PATH}/Inc/Legacy
)

file(GLOB_RECURSE SRC_SOURCE "src/*.*")

target_sources(${PROJECT_NAME} PRIVATE
    startup_stm32h7b0xx.s
    ${SRC_SOURCE}
    
    ${SOC_DRIVERS_STMH7_PATH}/Src/stm32h7xx_hal_cortex.c
    ${SOC_DRIVERS_STMH7_PATH}/Src/stm32h7xx_hal_rcc.c
    ${SOC_DRIVERS_STMH7_PATH}/Src/stm32h7xx_hal_rcc_ex.c
    ${SOC_DRIVERS_STMH7_PATH}/Src/stm32h7xx_hal_flash.c
    ${SOC_DRIVERS_STMH7_PATH}/Src/stm32h7xx_hal_flash_ex.c
    ${SOC_DRIVERS_STMH7_PATH}/Src/stm32h7xx_hal_gpio.c
    ${SOC_DRIVERS_STMH7_PATH}/Src/stm32h7xx_hal_hsem.c
    ${SOC_DRIVERS_STMH7_PATH}/Src/stm32h7xx_hal_dma.c
    ${SOC_DRIVERS_STMH7_PATH}/Src/stm32h7xx_hal_dma_ex.c
    ${SOC_DRIVERS_STMH7_PATH}/Src/stm32h7xx_hal_mdma.c
    ${SOC_DRIVERS_STMH7_PATH}/Src/stm32h7xx_hal_pwr.c
    ${SOC_DRIVERS_STMH7_PATH}/Src/stm32h7xx_hal_pwr_ex.c
    ${SOC_DRIVERS_STMH7_PATH}/Src/stm32h7xx_hal.c
    ${SOC_DRIVERS_STMH7_PATH}/Src/stm32h7xx_hal_exti.c
    ${SOC_DRIVERS_STMH7_PATH}/Src/stm32h7xx_hal_tim.c
    ${SOC_DRIVERS_STMH7_PATH}/Src/stm32h7xx_hal_tim_ex.c
    ${SOC_DRIVERS_STMH7_PATH}/Src/stm32h7xx_hal_uart.c
    ${SOC_DRIVERS_STMH7_PATH}/Src/stm32h7xx_hal_uart_ex.c
    ${SOC_DRIVERS_STMH7_PATH}/Src/stm32h7xx_hal_ospi.c
)

add_custom_command(TARGET ${PROJECT_NAME} POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E copy ${CMAKE_BINARY_DIR}/device/board/fk/bootloader/bootloader.elf ${CMAKE_BINARY_DIR}
    COMMENT "Copying bootloader.elf to build directory"
)

```

添加文件

## 配置openocd下载文件

- mww命令解析
- mmw命令解析

  给特定地址设置值和清除值

## 配置vscode task

```json
{
	"version": "2.0.0",
	"tasks": [
		{
			"type": "cmake",
			"label": "build bootloader",
			"command": "build",
			"targets": [
				"all"
			],
			"preset": "${command:cmake.activeBuildPresetName}",
			"group": "build",
			"problemMatcher": [],
			"detail": "build bootloader"
		},
		{
			"label": "flash bootloader",
			"detail": "片内编译 下载",
			"type": "shell",
			"command": "openocd",
			"args": [
				"-f",
				"${workspaceFolder}\\openocd.cfg",
				"-c \"program ./out/Debug/bootloader.elf\"",
				"-c",
				"reset",
				"-c",
				"shutdown"
			],
			"dependsOn": [
				"build bootloader"
			],
			"group": {
				"kind": "build"
			}
		},
		{
			"label": "flash application",
			"detail": "片外编译 下载",
			"group": "build",
			"type": "shell",
			"command": "openocd",
			"args": [
				"-f",
				"${workspaceFolder}\\openocd-external.cfg",
				"-c \"program ./out/Debug/Image.elf\"",
				"-c",
				"reset",
				"-c",
				"shutdown"
			],
			"dependsOn": [
				"build bootloader"
			],
		},
	]
}
```

## 配置调试外部falsh代码

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Debug Image",
            "cwd": "${workspaceFolder}",
            "executable": "${workspaceFolder}/out/Debug/Image.elf",
            "request": "launch",
            "type": "cortex-debug",
            "runToEntryPoint": "main",
            "servertype": "openocd",
            "configFiles": [
                "${workspaceRoot}/openocd-external.cfg"
            ],
        }
    ]
}
```

---


> 参考链接：
>
> - [STM32H7使用QSPI外扩flash（linux下使用openocd操作）_stm32_爱琴海傻猴子-开放原子开发者工作坊 (csdn.net)](https://openatomworkshop.csdn.net/664ff42ab12a9d168eb73269.html?dp_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjMwNTY5MSwiZXhwIjoxNzI1MDg1MDI2LCJpYXQiOjE3MjQ0ODAyMjYsInVzZXJuYW1lIjoiUWJ1aXQ3NjIifQ.sc-yNUpJsIVqHZlhYwvYCaB0D5Kat2-Gzee9gz5cXwU)
> - [【STM32H7教程】第85章 STM32H7的SPI 总线应用之SPI Flash的STM32CubeProg下载算法制作_cubeprog烧写算法-CSDN博客](https://blog.csdn.net/Simon223/article/details/110133013?login=from_csdn)
> - [使用OpenOCD+VSCode一键烧录Boot+App到内置+外置flash | Haobo's Blog (haobogu.github.io)](https://haobogu.github.io/posts/keyboard/openocd-ospi-flash/)
> - [EmbeddedProjectTemplates/BootLoader_Application/在CLion上实现STM32H750VBT6的Bootloader.md at main · WangHunZi/EmbeddedProjectTemplates (github.com)](https://github.com/WangHunZi/EmbeddedProjectTemplates/blob/main/BootLoader_Application/在CLion上实现STM32H750VBT6的Bootloader.md)
