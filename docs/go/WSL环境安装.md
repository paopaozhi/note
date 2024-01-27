# 基于WSL环境安装Go

系统环境:ubutnu20.04

系统用户:root 如遇到问题可以在命令前加**sudo**以使用管理员权限

1.下载源码包

[安装包下载地址]([Downloads - The Go Programming Language (google.cn)](https://golang.google.cn/dl/))

复制最新的下载链接

```sh
wget https://golang.google.cn/dl/go1.19.linux-amd64.tar.gz
```

2.安装go

```sh
tar -C /usr/local -xzf go1.19.linux-amd64.tar.gz
```

3.设置环境变量

```sh
vim ~/.bashrc
# 在文件底部追加
export PATH=$PATH:/usr/local/go/bin
```

4.安装结束，测试环境

```sh
vim hello.go

# 编写一个简单的helloword
package main

import "fmt"

func main() {
   fmt.Println("Hello, World!")
}

# 控制台输入
go run hello.go
# 控制台输出
root@paopaozhi:~/go# go run hello.go 
Hello, World!
```

5.如果需要使用vscode开发，请先保证有GNU开发环境(注意)

```sh
# 搭建环境
apt install build-essential
```

