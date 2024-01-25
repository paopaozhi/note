# clion 配置platformio环境

## 安装

环境：conda环境

1. 创建新的虚拟环境

   ```bash
   conda create -n flushbonad python=3.10
   ```

2. 安装platformio

   ```python
   pip install platformio
   ```

3. 添加环境变量

​	![image-20231126122250466](./嵌入式-clion-platformio.assets/image-20231126122250466-1700972575031-1.png)

4. 安装 `platformio for clion`

​	![image-20231126122350111](./嵌入式-clion-platformio.assets/image-20231126122350111.png)

## 测试

新建项目

![image-20231126122454005](./嵌入式-clion-platformio.assets/image-20231126122454005.png)

> 自行选择对应的开发板，这里选择树莓派 pico

clion会自行构建，等待构建成功

![image-20231126122652452](./嵌入式-clion-platformio.assets/image-20231126122652452.png)