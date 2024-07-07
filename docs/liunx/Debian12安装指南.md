# Debian12安装指南

## 下载Debian12

官方网站：

镜像网站：

直接下载地址：

## 基于Vmware安装Debian12

> 暂时缺省

## 配置SSH密钥登录

### 下载openssh

由于安装的Debian镜像是桌面环境，所以默认是没有安装ssh_server服务的

```bash
sudo apt install openssh-server
```

> ⁉️如出现下列问题：
>
> ```bash
> E: Could not get lock /var/lib/dpkg/lock-frontend - open (11: Resource temporarily unavailable)
> E: Unable to acquire the dpkg frontend lock (/var/lib/dpkg/lock-frontend), is another process using it?
> ```
>
> 💡解决方案：
>
> ```bash
> sudo rm /var/lib/dpkg/lock-frontend
> sudo rm /var/lib/dpkg/lock
> sudo rm /var/cache/apt/archives/lock
> ```

### 上传公钥

```powershell
scp ./id_rsa.pub oslab@192.168.174.129:/home/oslab/.ssh
```

### 配置

```bash
cd .ssh
cat id_rsa.pub >> authorized_keys

chmod 600 authorized_keys
chmod 700 ~/.ssh
```

## 安装基础网络工具

### net-tool

```bash
sudo apt install net-tools
```

## 安装嵌入式ARM开发环境

### 安装ARM交叉编译器

```bash
sudo apt install gcc-arm-linux-gnueabi
sudo apt install g++-arm-linux-gnueabi
```

验证：

```bash
arm-linux-gnueabi-gcc -v
arm-linux-gnueabi-g++ -v
```

### 安装QEMU

自动安装

```bash
apt install qemu-utils qemu-system-x86 qemu-system-gui qemu-system-arm
```

## 配置C编译环境

1. 安装基础环境

```shell
sudo apt install build-essential
```

2. 安装cmake

    1.使用安装命令

    ```shell
    sudo apt-get install cmake
    ```

    2.cmake源码安装

    卸载原来的cmake

    ```sh
    sudo apt-get remove cmake
    ```

    下载源码

    ```sh
    wget https://github.com/Kitware/CMake/releases/download/v3.23.0/cmake-3.23.0.tar.gz
    ```

    解压源码

    ```sh
    tar -zxf cmake-3.23.0.tar.gz
    ```

    下载编译器与必要库

    ```sh
    sudo apt-get intsall g++ libssl-dev
    ```

    编译

    ```shell
    ./bootstrap         #配置
    make                #编译
    sudo make install   #安装
    ```

    验证安装

    ```sh
    cmake --version
    ```
