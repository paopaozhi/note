# 环境搭建

## 安装wsl

```shell
wsl install Ubuntu-24.04
```

## 安装依赖库

```shell
sudo apt-get install build-essential gcc g++ make zlib* libffi-dev e2fsprogs pkg-config flex bison perl bc openssl libssl-dev libelf-dev libc6-dev binutils binutils-dev libdwarf-dev u-boot-tools mtd-utils gcc-arm-linux-gnueabi cpio device-tree-compiler net-tools openssh-server git vim openjdk-11-jre-headless
```

## 安装工具

### 安装系统工具

```shell
sudo apt install dosfstools mtools python3-pip python3-setuptools
```

### 安装minicaonda

```shell
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
chmod +x Miniconda3-latest-Linux-x86_64.sh
./Miniconda3-latest-Linux-x86_64.sh
# 一直回车，直到可以输入‘yes’
# 注意：安装完成会询问是否添加到系统环境，请输入'yes'
# 安装完成后，请重启终端
```

### 安装编译工具

```shell
pip install ohos-build==0.4.3
```

### 安装mkimage

1. 建立目录

   ```shell
   mkdir ~/tools 
   ```

2. 下载mkimage.stm32工具，并复制到`/home/bearpi/tools/`目录下

   mkimage.stm32下载地址: [https://pan.baidu.com/s/1y6ev83VV7mk7RMigdBDMmw?pwd=1234](https://gitee.com/link?target=https%3A%2F%2Fpan.baidu.com%2Fs%2F1y6ev83VV7mk7RMigdBDMmw%3Fpwd%3D1234) 提取码：1234

3. 执行以下命令修改mkimage.stm32工具权限

   ```shell
   chmod 777 ~/tools/mkimage.stm32
   ```

4. 设置环境变量

   ```shell
   vim ~/.bashrc
   ```

   将以下命令拷贝到.bashrc文件的最后一行，保存并退出。

   ```shell
   export PATH=~/tools:$PATH
   ```

   执行如下命令更新环境变量。

   ```shell
   source ~/.bashrc
   ```

## 获取源码

使用小熊派small源码

源码地址：[BearPi-HM_Micro_small: 小熊派BearPi-HM Micro开发板基于OpenHarmony设备开发代码及教程 (gitee.com)](https://gitee.com/bearpi/bearpi-hm_micro_small)

```shell
git clone https://gitee.com/bearpi/bearpi-hm_micro_small
```

## 编译代码

1. 进入源码目录

   ```shell
   cd bearpi-hm_micro_small
   ```

2. `hb` 设置路径

   ```
   hb set
   ```

   输入`.`(表示当前目录)

   选择“bearpi-hm_micro”，然后回车

3. 编译源代码

   ```shell
   hb build -t notest --tee -f
   ```

   回车，等待直到屏幕出现：`build success`字样，说明编译成功。

编译好的固件，在路径：`out\bearpi-hm_micro\bearpi-hm_micro`，其中，下列三个文件才是需要的：

- OHOS_Image.stm32：系统镜像文件
- rootfs_vfat.img：根文件系统
- userfs_vfat.img：用户文件系统

将编译好的固件复制到待烧录的目录中：

```shell
cp out/bearpi_hm_micro/bearpi_hm_micro/OHOS_Image.stm32 applications/BearPi/BearPi-HM_Micro/tools/download_img/kernel/
cp out/bearpi_hm_micro/bearpi_hm_micro/rootfs_vfat.img applications/BearPi/BearPi-HM_Micro/tools/download_img/kernel/
cp out/bearpi_hm_micro/bearpi_hm_micro/userfs_vfat.img applications/BearPi/BearPi-HM_Micro/tools/download_img/kernel/
```

为了方便编译使用`python`编写了一个简单的编译脚本，以下是脚本内容：

```python
# python version >= 3.9
# 依赖typer库: pip install typer
import typer
import subprocess
import sys

app = typer.Typer()


@app.command()
def copy_image():
    """
    cp out/bearpi_hm_micro/bearpi_hm_micro/OHOS_Image.stm32 applications/BearPi/BearPi-HM_Micro/tools/download_img/kernel/
    cp out/bearpi_hm_micro/bearpi_hm_micro/rootfs_vfat.img applications/BearPi/BearPi-HM_Micro/tools/download_img/kernel/
    cp out/bearpi_hm_micro/bearpi_hm_micro/userfs_vfat.img applications/BearPi/BearPi-HM_Micro/tools/download_img/kernel/
    """
    out_image = ["OHOS_Image.stm32", "rootfs_vfat.img", "userfs_vfat.img"]
    out_path = "out/bearpi_hm_micro/bearpi_hm_micro/"
    target_path = "applications/BearPi/BearPi-HM_Micro/tools/download_img/kernel/"

    for i in out_image:
        subprocess.run(["cp", out_path + i, target_path])


@app.command()
def build():
    # hb build -t notest --tee -f
    result = subprocess.Popen(
        ["hb", "build", "-t", "notest", "--tee", "-f"],
        stdout=subprocess.PIPE,
    )
    for line in iter(result.stdout.readline, b""):
        sys.stdout.write(line.decode("utf-8"))
        sys.stdout.flush()

    result.wait()

    # print(result.returncode)
    if result.returncode == 0:
        copy_image()


if __name__ == "__main__":
    app()

```

## 烧录固件

需要使用`STM32CubeProgrammer`，软件链接：

1. 将开发板上的拨码开关拨到“000”烧录模式，并按一下开发板的RESET按键

2. 在Windows打开STM32CubeProgrammer工具，选择“USB”烧录方式，再点击刷新按钮，然后点击"Connect"。

3. 点击STM32CubeProgrammer工具的“+”按钮，然后选择烧录配置的tvs文件。

   `tvs`文件路径在：`applications/BearPi/BearPi-HM_Micro/tools/download_img/flashlayout/bearpi-hm_micro.tsv`

4. 点击Browse按钮，然后选择工程源码下的烧录镜像路径

   烧录镜像路径为：`applications/BearPi/BearPi-HM_Micro/tools/download_img`

5. 点击Download按钮启动镜像烧录，并等待烧录完毕。

## 启动开发板

1. 打开MobaXterm，

   1. 点击：`Session`、`Serial`按钮

   2. 设置Seral port为 第一-4 查看到的COM号

   3. 设置Speed为 `115200`

   4. 点击`OK`
2. 将开发板的拨码开关拨至“010”emmc启动模式，并按一下开发板的“RESET”按钮复位开发板。
3. MobaXterm上打印出运行日志，等待启动日志运行结束，按键盘“回车”按键进入开发板shell终端，输入例如"ls"命令，可与开发板交互。
4. 开发板屏幕出现桌面及预安装的"setting"应用，点击"setting"应用可查看系统信息。