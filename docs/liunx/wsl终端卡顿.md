# 解决wsl补全卡顿问题

## 1. 修改`/etc/wsl.conf`文件

```toml
[interop]
appendWindowsPath=false
```

## 2. 添加软链接

为了可以使用`code`命令直接打开`vscode`

```bash
# 需要替换为vscode的安装路径
ln -s /mnt/c/Users/paopaozhi/AppData/Local/Programs/Microsoft\ VS\ Code/bin/code /bin/code
```

