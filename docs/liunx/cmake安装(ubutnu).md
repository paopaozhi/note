# ubuntu 安装cmake

# 1.使用安装命令

```sh	
sudo apt-get install cmake
```

# 2.cmake源码安装

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

```sh
./bootstrap         #配置
make        		#编译
sudo make install	#安装
```

验证安装

```sh
cmake --version
```

