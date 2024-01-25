# wsl安装配置指南-基于debin

## 安装Debian



## 基本软件安装

### 安装C环境

```bash
apt install build-essential
```

### 安装docker

参考连接：[docker-ce | 镜像站使用帮助 | 清华大学开源软件镜像站 | Tsinghua Open Source Mirror](https://mirrors.tuna.tsinghua.edu.cn/help/docker-ce/)

## 环境配置

### 配置debian终端命令补全

### 1. 安装bash-completion 包

```bash
apt install bash-completion
```

### 2. 编辑/etc/bash.bashrc

安装bash-completion后还需要在 /etc/bash.bashrc 中编辑enable bash completion in interactive shells这一项配置，将其注释全部去掉

```bash
vim /etc/bash.bashrc
```

![image-20231029154117136](./wsl安装配置指南-基于debin.assets/image-20231029154117136.png)

### 3. 执行新配置文件

```bash
source /etc/bash.bashrc
```
