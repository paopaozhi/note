# Anconda使用

# 安装Anconda

—-    &#x20;

# Anconda常用命令

### 1. 查看当前环境安装了哪些包

```bash
conda list
```

### 2. 查看当前存在哪些虚拟环境

```bash
conda info -e
```

### 3. Python创建虚拟环境

```bash
conda create -n <环境名称> python=<python版本>
```

> 📌**文件可以在Anaconda安装目录envs文件下找到**

### 4. 激活或者切换虚拟环境

```bash
activate <环境名称>
```

### 5. 删除环境

```bash
conda remove -n <环境名称> --all
```
