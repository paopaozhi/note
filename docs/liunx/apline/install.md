替换阿里软件源
```
sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
```

安转docker

```
apk add --no-cache docker openrc lxc musl-dev
```

启动

```shell
openrc
mkdir -p /run/openrc/
touch /run/openrc/softlevel
service docker start
```

开启远程访问

```shell
vi /etc/init.d/docker
command_args="-H unix:///var/run/docker.sock -H tcp://0.0.0.0:2375 -p \"${pidfile}\" ${DOCKER_OPTS}"
```