# Debian12 构建换源

在debian12中，不能再使用原来的`sources.list`文件，debina12更换为了其他的源文件，更换后的文件

```dockerfile
# 设置清华源为默认镜像源
RUN sed -i 's/deb.debian.org/mirrors.ustc.edu.cn/g' /etc/apt/sources.list.d/debian.sources
```

