# Git使用错误

问题描述：

```
gnutls_handshake() failed: The TLS connection was non-properly terminated.
```

解决方案：

```
取消代理
git config --global --unset http.proxy
git config --global --unset https.proxy
使用代理
git config --global http.https://github.com.proxy http://127.0.0.1:7890
git config --global https.https://github.com.proxy https://127.0.0.1:7890
```

