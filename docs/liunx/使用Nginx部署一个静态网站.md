# Nginx部署静态网站

## 安装Nginx

```sh
# 更新软件包缓存
sudo apt update
# 下载安装Nginx
sudo apt install nginx
```

常用命令

```sh
#开启nginx服务
service nginx start
 
#或者
sudo systemctl start nginx.service
 
 
#查看nginx状态
service nginx status
 
sudo systemctl status nginx.service
 
 
#停止nginx服务
service nginx stop
sudo systemctl stop nginx.service
 
#重启nginx服务
service nginx restart
 
sudo systemctl restart nginx.service
# 测试nginx配置文件是否正确
nginx -t 
# 重新加载配置项
nginx -s reload
```

