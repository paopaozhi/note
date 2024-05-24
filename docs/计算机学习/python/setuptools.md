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

## GitHub action 上传

1. 登录到自己的pypi项目中，将Github仓库加入到可信的发布中

2. 以下是上传的示例`yaml`文件

```yaml
name: Deploy release
on:
  push:
    tags:
      - '*'
jobs:
  pypi:
    permissions:
      id-token: write
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.9'
      - name: Install dependencies
        run: pip install -U build
      - name: Build package
        run: python -m build
      - name: Publish to PyPI
        uses: pypa/gh-action-pypi-publish@release/v1
```

