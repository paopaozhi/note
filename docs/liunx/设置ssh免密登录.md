# 树莓派设置ssh免密登录

1.ssh-keygen 生成公钥和私钥

2.上传公钥

```powershell
scp C:\Users\paopaozhi\.ssh\id_rsa.pub <用户名>@<IP地址>:~/.ssh/
```

3.修改ssh配置文件

```shell
vim /etc/ssh/sshd_config
```

找到 **PubkeyAuthentication yes**

将注释去掉

4.重启ssh服务

```shell
sudo /etc/init.d/ssh restart
```

5.更改配置文件

```shell
mv ~/.ssh/id_rsa.pub ~/.ssh/authorized_keys
```

6.使用ssh登录树莓派

实现免密登录
