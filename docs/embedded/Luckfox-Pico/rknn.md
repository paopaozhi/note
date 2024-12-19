# RKNN 安装报错

## 无法导入`rknn`

### 详细描述

```shell
In [1]: from rknn.api import RKNN
---------------------------------------------------------------------------
ImportError                               Traceback (most recent call last)
Cell In[1], line 1
----> 1 from rknn.api import RKNN

File ~/miniconda3/envs/RKNN-Toolkit2/lib/python3.8/site-packages/rknn/api/__init__.py:1
----> 1 from rknn.api.rknn import RKNN

File ~/miniconda3/envs/RKNN-Toolkit2/lib/python3.8/site-packages/rknn/api/rknn.py:7
      5 from .rknn_log import set_log_level_and_file_path
      6 from .rknn_platform import get_host_os_platform, get_librknn_api_require_dll_dir
----> 7 from .rknn_base import RKNNBase
      8 from argparse import Namespace
     10 already_imported = False

File rknn/api/rknn_base.py:25, in init rknn.api.rknn_base()

File rknn/api/cpp_gen.py:4, in init rknn.api.cpp_gen()

File ~/miniconda3/envs/RKNN-Toolkit2/lib/python3.8/site-packages/cv2/__init__.py:181
    176             if DEBUG: print("Extra Python code for", submodule, "is loaded")
    178     if DEBUG: print('OpenCV loader: DONE')
--> 181 bootstrap()

File ~/miniconda3/envs/RKNN-Toolkit2/lib/python3.8/site-packages/cv2/__init__.py:153, in bootstrap()
    149 if DEBUG: print("Relink everything from native cv2 module to cv2 package")
    151 py_module = sys.modules.pop("cv2")
--> 153 native_module = importlib.import_module("cv2")
    155 sys.modules["cv2"] = py_module
    156 setattr(py_module, "_native", native_module)

File ~/miniconda3/envs/RKNN-Toolkit2/lib/python3.8/importlib/__init__.py:127, in import_module(name, package)
    125             break
    126         level += 1
--> 127 return _bootstrap._gcd_import(name[level:], package, level)

ImportError: libGL.so.1: cannot open shared object file: No such file or directory
```

### 解决方法

安装`opencv-python-headless`

```shell
pip install opencv-python-headless
```

