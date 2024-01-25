Nginx端口映射配置

```sh
server {
  listen    80;
  server_name luckstare.ltd;
 
  # 80转发到8000端口
  location / {
      proxy_pass http://127.0.0.1:8080;
  }
}
```

