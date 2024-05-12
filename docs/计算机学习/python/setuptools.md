# 基于setuptools 打包 pypi 包

## 快速入门

目录结构:

```shell
mypackage
├── pyproject.toml  # and/or setup.cfg/setup.py (depending on the configuration method)
|   # README.rst or README.md (a nice description of your package)
|   # LICENCE (properly chosen license information, e.g. MIT, BSD-3, GPL-3, MPL-2, etc...)
└── mypackage
    ├── __init__.py
    └── ... (other Python files)
```

## 打包pypi包

```shell
python -m build
```

## 开发中安装包到本地

```shell
pip install --editable .
```

## 将包上传到 PyPI

```
twine upload dist/*
```

