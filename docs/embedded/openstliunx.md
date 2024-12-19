# 开发STM32MP1

> 环境约束：
>
> Ubuntu 22.04
>
> 开发包版本：en.SDK-x86_64-stm32mp1-openstlinux-6.6-yocto-scarthgap-mpu-v24.11.06.tar.gz
>
> 开发板：小熊派

使用官方推荐的`openStLiunx`开发方式

## 安装必要软件

必要软件包

```bash
sudo apt-get update
sudo apt-get install gawk wget git git-lfs diffstat unzip texinfo gcc-multilib  chrpath socat cpio python3 python3-pip python3-pexpect xz-utils debianutils iputils-ping python3-git python3-jinja2 libegl1-mesa libsdl1.2-dev pylint xterm bsdmainutils
sudo apt-get install libssl-dev libgmp-dev libmpc-dev lz4 zstd
```

可能需要软件包

```bash
sudo apt-get install build-essential libncurses-dev libncurses5 libyaml-dev libssl-dev 
```

安装`repo`工具

```bash
mkdir ~/bin
curl https://gitee.com/oschina/repo/raw/fork_flow/repo-py3 -o ~/bin/repo 
chmod a+x ~/bin/repo
pip3 install -i https://repo.huaweicloud.com/repository/pypi/simple requests

# 将repo添加到环境变量
vim ~/.bashrc               # 编辑环境变量
export PATH=~/bin:$PATH     # 在环境变量的最后添加一行repo路径信息
source ~/.bashrc            # 应用环境变量
```

有用的工具包

```bash
sudo apt-get install coreutils bsdmainutils sed curl bc lrzsz corkscrew cvs subversion mercurial nfs-common nfs-kernel-server libarchive-zip-perl dos2unix texi2html libxml2-utils
```

## 安装SDK包

解压

```bash
tar xvf 
```



安装