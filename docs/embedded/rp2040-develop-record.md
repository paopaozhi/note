# 树莓派PICO-RP2040

## 调试接口

调试器支持：`dap-link`、`raspberry_pi_debug`

调试器软件：`openocd`

### 使用DAP-link调试树莓派PICO-RP2040

1. 安装openocd

   下载方式有很多这里推荐两个：

   - 下载openocd源码构建

   - 下载使用非官方的二进制文件（虽然不是官方构建但是为官方推荐的三方构建）

     下载链接：[xPack OpenOCD v0.12.0-3](https://github.com/xpack-dev-tools/openocd-xpack/releases/download/v0.12.0-3/xpack-openocd-0.12.0-3-win32-x64.zip)

     下载后将其解压至可知文件夹位置，将其bin文件夹路径加入环境变量。

2. 配置`tasks.json`

   

   ```sh
   openocd -f interface/cmsis-dap.cfg -f target/rp2040.cfg -s tcl -c "adapter speed 5000"
   ```

