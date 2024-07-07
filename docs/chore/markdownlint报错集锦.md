# markdownlint 报错集锦
<!--
## MD001 - 标题逐级递增

`MD001` - [Heading levels should only increment by one level at a time](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md001---heading-levels-should-only-increment-by-one-level-at-a-time)
`MD001` - 标题层级每次只能递增加一

**别名**：`heading-increment`

**标签**：`headings`

**规范**：标题层级应逐级递增，最多六级。

## MD003 - 标题样式

`MD003` - [Heading style](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md003---heading-style)
`MD003` - 标题样式

**别名**：`heading-style`

**标签**：`heandings`

**规范**：标题样式应一致。

**参数**：

- ```
  style
  ```

  （

  ```
  字符串
  ```

   

  ，默认值：

  ```
  consistent
  ```

  ，可选值：

  ```
  atx
  ```

   

  /

   

  ```
  atx_closed
  ```

   

  /

   

  ```
  consistent
  ```

   

  /

   

  ```
  setext
  ```

   

  /

   

  ```
  setext_with_atx
  ```

   

  /

   

  ```
  setext_with_atx_closed
  ```

  ）

  文档中的标题样式。

  - ```
    atx
    ```

    ：ATX 标题，共六级。

    | `1 ` | `# ATX 一级标题` |
    | ---- | ---------------- |
    |      |                  |

  - ```
    atx_closed
    ```

    ：封闭 ATX 标题，共六级。

    | `1 ` | `# 封闭 ATX 一级标题 #` |
    | ---- | ----------------------- |
    |      |                         |

  - ```
    setext
    ```

    ：Setext 标题，只有一、二级两级。

    | `1 2 3 4 5 ` | `Setext 一级标题 ============== Setext 二级标题 --------------` |
    | ------------ | ------------------------------------------------------------ |
    |              |                                                              |

  - `consistent`：上述标题样式均可，但标题样式应一致。

  - `setext_with_atx`：一、二级使用 Setext 标题，其他层级使用 ATX 标题。

  - `setext_with_atx_closed`：一、二级使用 Setext 标题，其他层级使用封闭 ATX 标题。

## MD004 - 无序列表样式

`MD004` - [Unordered list style](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md004---unordered-list-style)
`MD004` - 无序列表样式

**别名**：`ul-style`

**标签**：`bullet`、`ul`

**规范**：无序列表项的前缀符号应一致。

**修正**：违规格式可通过命令行工具修正。

**参数**：

- ```
  style
  ```

  （

  ```
  字符串
  ```

  ，默认值：

  ```
  consistent
  ```

  ，可选值：

  ```
  asterisk
  ```

   

  /

   

  ```
  consistent
  ```

   

  /

   

  ```
  dash
  ```

   

  /

   

  ```
  plus
  ```

   

  /

   

  ```
  sublist
  ```

  ）

  文档中无序列表项前缀符号的样式。

  - `asterisk`：星号前缀 `*`。

  - `dash`：减号前缀 `-`。

  - `plus`：加号前缀 `+`。

  - `consistent`：上述三种前缀符号均可，但样式应一致。

  - ```
    sublist
    ```

    ：允许不同层级的无序列表项使用不同的前缀符号，但同一层级的样式应一致。

    | `1 2 3 4 5 6 ` | `* 列表项 1  + 列表项 2    - 列表项 3  + 列表项 4 * 列表项 5  + 列表项 6` |
    | -------------- | ------------------------------------------------------------ |
    |                |                                                              |

## MD005 - 列表层级缩进

`MD005` - [Inconsistent indentation for list items at the same levle](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md005---inconsistent-indentation-for-list-items-at-the-same-level)
`MD005` - 同一层级的列表项缩进不一致

**别名**：`list-indent`

**标签**：`bullet`、`indentation`、`ul`

**规范**：相同层级列表项的缩进应一致。

**修正**：违规格式可通过命令行工具修正。

**例外**：允许右对齐的有序列表前缀编号。

| `1 2 3 4 ` | ` 8. 列表项 8 9. 列表项 9 10. 列表项 10 11. 列表项 11` |
| ---------- | ------------------------------------------------------ |
|            |                                                        |

## MD007 - 无序列表缩进量

`MD007` - [Unordered list indentation](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md007---unordered-list-indentation)
`MD007` - 无序列表缩进量

**别名**：`ul-indent`

**标签**：`bullet`、`indentation`、`ul`

**规范**：嵌套无序列表项的缩进应一致。

**参数**：

- `indent`（`整数`，默认值：`2`）
  缩进空格数。
- `start_indent`（`整数`，默认值：`2`）
  最外层无序列表项缩进空格数，当 `start_indented` 为 `true` 时生效。
- `start_indented`（`布尔`，默认 `false`）
  最外层无序列表项是否缩进。

**修正**：违规格式可通过命令行工具修正。

**示例**：

| `1 2 ` | `+ 外层无序列表项  + 内层无序列表项，缩进 2 空格` |
| ------ | ------------------------------------------------- |
|        |                                                   |

**说明**：嵌套无序列表项缩进 2 空格，可使内层无序列表项的前缀符号与外层无序列表项的内容对齐。

## MD009 - 行末空格

`MD009` - [Trailing spaces](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md009---trailing-spaces)
`MD009` - 行末空格

**别名**：`no-trailing-spaces`

**标签**：`whitespace`

**规范**：除引入换行外，行末不应有空格。

**参数**：

- `br_spaces`（`整数`，默认值：`2`）
  引入换行所需的空格数。
- `list_item_empty_lines`（`布尔`，默认值：`false`）
  某些解析器要求列表内的空行需按层级缩进。
- `strict`（`布尔`，默认值：`false`）
  严格检查非必要的行末空格式换行。如：当下一行为空行时，不需要再使用行末空格的方式引入换行。

**修正**：违规格式可通过命令行工具修正。

## MD010 - 制表符

`MD010` - [Hard tabs](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md010---hard-tabs)
`MD010` - 制表符 TAB

**别名**：`no-hard-tabs`

**标签**：`hard_tab`、`whitespace`

**规范**：应使用空格代替制表符。

**参数**：

- `code_blocks`（`布尔`，默认值：`true`）
  检查代码块中的制表符。
- `ignore_code_language`（`字符串[]`，默认值：`[]`）
  忽略指定语言代码块中的制表符。
- `spaces_per_tab`（`整数`，默认值：`1`）
  替换制表符的空格数。

**修正**：违规格式可通过命令行工具修正。

**说明**：不同解析器处理制表符的方式不同，因此应避免在文档中直接使用制表符，应使用指定数量的空格代替制表符。

## MD011 - 链接语法

`MD011` - [Reversed link syntax](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md011---reversed-link-syntax)
`MD011` - 链接语法错误

**别名**：`no-reversed-links`

**标签**：`links`

**规范**：应正确使用链接语法。

**修正**：违规格式可通过命令行工具修正。

**示例**：

| `1 2 3 ` | `(错误的链接语法)[https://www.example.com/] [正确的链接语法](https://www.example.com/)` |
| -------- | ------------------------------------------------------------ |
|          |                                                              |

## MD012 - 连续空行

`MD012` - [Multiple consecutive blank lines](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md012---multiple-consecutive-blank-lines)
`MD012` - 多个连续空行

**别名**：`no-multiple-blanks`

**标签**：`blank_lines`、`whitespace`

**规范**：不应使用连续空行。

**参数**：

- `maximum`（`整数`，默认值：`1`）
  允许的最多连续空行数。

**修正**：违规格式可通过命令行工具修正。

**例外**：允许在代码块中使用连续空行。

## MD013 - 单行字符数

`MD013` - [Line length](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md013---line-length)
`MD013` - 单行字符数

**别名**：`line-length`

**标签**：`line_length`

**规范**：单行文本不应过长。

**参数**：

- `code_block_line_length`（`整数`，默认值：`80`）
  代码块中单行最大字符数。
- `code_blocks`（`布尔`，默认值：`true`）
  是否检查代码块。
- `heading_line_length`（`整数`，默认值：`80`）
  标题最大字符数。
- `headings`（`布尔`，默认值：`true`）
  是否检查标题。
- `line_length`（`整数`，默认值：`80`）
  单行最大字符数。
- `stern`（`布尔`，默认值：`false`）
  严格检查，即使超出字符数限制的部分不包含空格的行也违规。
- `strict`（`布尔`，默认值：`false`）
  更严格检查，即使整行都不包含空格，只要超出字符数限制的行都违规。
- `tables`（`布尔`，默认值：`true`）
  是否检查表格。

**示例**：默认配置下，允许(b)、(c) 两行文本超出字符数限制。

| `1 2 3 4 ` | `ASSUME THIS LINE IS THE MAXIMUM LENGTH (a)This line is a violation because there are whitespace beyond (b)This line is okay because there are-no-spaces-beyond-that-length (c)This-line-is-also-okay-because-there-are-no-spaces` |
| ---------- | ------------------------------------------------------------ |
|            |                                                              |

|      |   `stern`: false    |    `stern`: true    | `stern`: false/true |
| :--: | :-----------------: | :-----------------: | :-----------------: |
|      | **`strict`: false** | **`strict`: false** | **`strict`: true**  |
| (a)  |          ❌          |          ❌          |          ❌          |
| (b)  |          ✅          |          ❌          |          ❌          |
| (c)  |          ✅          |          ✅          |          ❌          |

**例外**：允许定义超链接或图片地址的行超出字数限制，因为 URL 地址无法断行。

## MD014 - 终端指令符号

`MD014` - [Dollar sings used before commands without showing output](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md014---dollar-signs-used-before-commands-without-showing-output)
`MD014` - 在没有输出结果的指令前使用 `$` 符号

**别名**：`commands-show-output`

**标签**：`code`

**规范**：一般无需在终端指令前加 `$` 符号，除非需同时显示该指令的输出结果。

**修正**：违规格式可通过命令行工具修正。

**示例**：

| ` 1 2 3 4 5 6 7 8 9 10 ` | `$ ls foo bar $ cat foo Hello World! $ mkdir test mkdir: created directory 'test' $ ls test` |
| ------------------------ | ------------------------------------------------------------ |
|                          |                                                              |

**说明**：省略 `$` 可方便代码的复制粘贴。

## MD018 - ATX 空格缺失

`MD018` - [No space after hash on atx style heading](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md018---no-space-after-hash-on-atx-style-heading)
`MD018` - ATX 标题 `#` 后缺少空格

**别名**：`no-missing-space-atx`

**标签**：`atx`、`headings`、`spaces`

**规范**：ATX 标题前缀 `#` 后需接一个空格。

**修正**：违规格式可通过命令行工具修正。

## MD019 - ATX 空格过多

`MD019` - [Multiple spaces after hash on atx style heading](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md019---multiple-spaces-after-hash-on-atx-style-heading)
`MD019` - ATX 标题 `#` 后空格过多

**别名**：`no-multiple-space-atx`

**标签**：`atx`、`headings`、`spaces`

**规范**：ATX 标题前缀 `#` 后仅需一个空格。

**修正**：违规格式可通过命令行工具修正。

## MD020 - 封闭 ATX 空格缺失

`MD020` - [No space inside hashes on closed atx style heading](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md020---no-space-inside-hashes-on-closed-atx-style-heading)
`MD020` - 封闭 ATX 标题 `#` 内缺少空格

**别名**：`no-missing-space-closed-atx`

**标签**：`atx_closed`、`headings`、`spaces`

**规范**：封闭 ATX 标题首尾 `#` 与标题内容之间需接一个空格。

**修正**：违规格式可通过命令行工具修正。

## MD021 - 封闭 ATX 空格过多

`MD021` - [Multiple spaces inside hashes on closed atx style heading](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md021---multiple-spaces-inside-hashes-on-closed-atx-style-heading)
`MD021` - 封闭 ATX 标题 `#` 内空格过多

**别名**：`no-multiple-space-closed-atx`

**标签**：`atx_closed`、`headings`、`spaces`

**规范**：封闭 ATX 标题首尾 `#` 与标题内容之间仅需一个空格。

**修正**：违规格式可通过命令行工具修正。

## MD022 - 标题前后空行

`MD022` - [Headings should be surrounded by blank lines](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md022---headings-should-be-surrounded-by-blank-lines)
`MD022` - 标题前后需加空行

**别名**：`blanks-around-headings`

**标签**：`blank_lines`、`headings`

**规范**：应使用空行分隔标题与正文。

**参数**：

- `lines_above`（`整数|整数[]`，默认值：`1`）
  标题前空行数。

- ```
  lines_below
  ```

  （

  ```
  整数|整数[]
  ```

  ，默认值：

  ```
  1
  ```

  ）

  标题后空行数。

  - `-1`：允许任意空行数。
  - `整数[]`：依次对应不同层级标题前后的空行数。
  - 大于 `1`：需同时更改 [MD012 - 连续空行](https://www.newverse.wiki/senses/markdownlint/#MD012) `maximum` 参数。

**修正**：违规格式可通过命令行工具修正。

## MD023 - 标题缩进

`MD023` - [Headings must start at the beginning of the line](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md023---headings-must-start-at-the-beginning-of-the-line)
`MD023` - 标题需紧靠行首

**别名**：`heading-start-left`

**标签**：`headings`、`spaces`

**规范**：标题不应缩进。

**修正**：违规格式可通过命令行工具修正。

## MD024 - 标题重复

`MD024` - [Multiple headings with the same content](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md024---multiple-headings-with-the-same-content)
`MD024` - 多条标题内容重复

**别名**：`no-duplicate-heading`

**标签**：`headings`

**规范**：标题内容不应重复。

**参数**：

- `siblings_only`（`布尔`，默认值：`false`）
  只检查同一父标题下的“兄弟”标题，允许不同章节的子章节标题重复。

**示例**：当 `siblings_only` 为 `true` 时，允许使用以下标题

| ` 1 2 3 4 5 6 7 8 9 10 11 12 13 ` | `# 更新日志 ## 1.0.0 ### 新特性 ### Bug 修复 ## 2.0.0 ### 新特性 ### Bug 修复` |
| --------------------------------- | ------------------------------------------------------------ |
|                                   |                                                              |

## MD025 - 最高级标题唯一

`MD025` - [Multiple top-level headings in the same document](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md025---multiple-top-level-headings-in-the-same-document)
`MD025` - 同一文档内存在多个最高层级标题

**别名**：`single-title`

**标签**：`headings`

**规范**：同一文档内只应存在一个最高层级标题，作为整个文档的标题。

**参数**：

- ```
  front_matter_title
  ```

  （

  ```
  字符串
  ```

  ，默认值：

  ```
  ^\s*title\s*[:=]
  ```

  ）

  从前置参数中匹配标题的正则表达式。

  - 默认将文档前置参数中 `title=` 或 `title:` 之后的文本作为最高级标题。
  - `""`：空字符串禁用该参数。

- `level`（`整数`，默认值：`1`）
  标题的最高层级。

## MD026 - 标题行末标点

`MD026` - [Trailing punctuation in heading](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md026---trailing-punctuation-in-heading)
`MD026` - 标题以标点符号结尾

**别名**：`no-trailing-punctuation`

**标签**：`headings`

**规范**：标题不应以标点符号结尾。

**参数**：

- ```
  punctuation
  ```

  （

  ```
  字符串
  ```

  ，默认值：

  ```
  .,;:!。，；：！
  ```

  ）

  标题行末检查的标点符号。

  - `""`：空字符串禁用该规则，允许标题以任意标点符号结尾。

**修正**：违规格式可通过命令行工具修正。

**说明**：标题并非完整语句，不应以标点符号结尾。

**例外**：允许标题以问号 `?` / `？` 结尾。

## MD027 - 引用空格过多

`MD027` - [Multiple spaces after blockquote symbol](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md027---multiple-spaces-after-blockquote-symbol)
`MD027` - 引用前缀 `>` 后的空格过多

**别名**：`no-multiple-space-blockquote`

**标签**：`blockquote`、`indentation`、`whitespace`

**规范**：引用前缀 `>` 后只需一个空格。

**修正**：违规格式可通过命令行工具修正。

## MD028 - 引用内空行

`MD028` - [Blank line inside blockquote](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md028---blank-line-inside-blockquote)
`MD028` - 引用内的空行

**别名**：`no-blanks-blockquote`

**标签**：`blockquote`、`whitespace`

**规范**：

- 引用多行内容时，应在分段空行前加引用前缀 `>`；
- 不应连续使用多个引用，应在不同引用之间穿插正文。

**示例**：

| `1 2 3 4 5 6 7 ` | `> 这是引用文本的第一行。 >  > 这是同一段引用文本的第二行。 这是正文，不应连续使用多个引用。 > 这是另一个引用，与上一个引用之间有正文分隔。` |
| ---------------- | ------------------------------------------------------------ |
|                  |                                                              |

**说明**：某些解析器会忽略连续引用之间的空行，将其编译为同一个引用。

## MD029 - 有序列表前缀

`MD029` - [Ordered list item prefix](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md029---ordered-list-item-prefix)
`MD029` - 有序列表项前缀

**别名**：`ol-prefix`

**标签**：`ol`

**规范**：有序列表项的前缀序号应遵循一定顺序。

**参数**：

- ```
  style
  ```

  （

  ```
  字符串
  ```

  ，默认值：

  ```
  one_or_ordered
  ```

  ，可选值：

  ```
  one
  ```

   

  /

   

  ```
  one_or_ordered
  ```

   

  /

   

  ```
  ordered
  ```

   

  /

   

  ```
  zero
  ```

  ）

  前缀序号样式。

  - `one`：前缀序号全为 `1`。
  - `ordered`：前缀序号按数字顺序递增，支持 `0` 补位的写法 `09`。
  - `one_or_ordered`：上述两种样式均可。
  - `zero`：前缀序号全为 `0`。

## MD030 - 列表前缀空格

`MD030` - [Spaces after list markers](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md030---spaces-after-list-markers)
`MD030` - 列表项前缀符号之后的空格

**别名**：`list-marker-space`

**标签**：`ol`、`ul`、`whitespace`

**规范**：列表项前缀符号与内容之间的空格数应一致。

**参数**：

- `ol_multi`（`整数`，默认值：`1`）
  多行有序列表项前缀符号与内容之间的空格数。
- `ol_single`（`整数`，默认值：`1`）
  单行有序列表项前缀符号与内容之间的空格数。
- `ul_multi`（`整数`，默认值：`1`）
  多行无序列表项前缀符号与内容之间的空格数。
- `ul_single`（`整数`，默认值：`1`）
  单行无序列表项前缀符号与内容之间的空格数。

**修正**：违规格式可通过命令行工具修正。

**示例**：由于多行列表项需 4 空格缩进，可以考虑设置

- `ul_multi` 为 `3`，使多行无序列表项内容对齐。

  | `1 2 3 4 5 ` | `+   3 空格的第一段多行无序列表项。     4 空格缩进的第二段多行无序列表项。 +   另一项无序列表项。` |
  | ------------ | ------------------------------------------------------------ |
  |              |                                                              |

- `ol_multi` 为 `2`，使多行有序列表项内容对齐。

  | `1 2 3 4 5 ` | `1.  2 空格的第一段多行有序列表项。     4 空格缩进的第二段多行有序列表项。 2.  另一项有序列表项。` |
  | ------------ | ------------------------------------------------------------ |
  |              |                                                              |

## MD031 - 代码块前后空行

`MD031` - [Fenced code blocks should be surrounded by blank lines](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md031---fenced-code-blocks-should-be-surrounded-by-blank-lines)
`MD031` - 代码块前后需加空行

**别名**：`blanks-around-fences`

**标签**：`blank_lines`、`code`

**规范**：应使用空行分隔代码块与正文。

**参数**：

- `list_items`（`布尔`，默认值：`true`）
  是否允许作为多行列表项内容的代码块与其所属的列表项之间无空行，以使文档结构紧凑。

**修正**：违规格式可通过命令行工具修正。

## MD032 - 列表前后空行

`MD032` - [Lists should be surrounded by blank lines](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md032---lists-should-be-surrounded-by-blank-lines)
`MD032` - 列表前后需加空行

**别名**：`blanks-around-lists`

**标签**：`blank_lines`、`bullet`、`ol`、`ul`

**规范**：应使用空行分隔列表与正文。

**修正**：违规格式可通过命令行工具修正。

## MD033 - 内联 HTML

`MD033` - [Inline HTML](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md033---inline-html)
`MD033` - 内联 HTML

**别名**：`no-inline-html`

**标签**：`html`

**规范**：不使用 HTML 语法。

**参数**：

- `allowed_elements`（`字符串[]`，默认值：`[]`）
  允许使用的 HTML 元素。

**说明**：若希望将文档编译成非 HTML 格式的输出，可应用本条规范。

## MD034 - 裸 URL 地址

`MD034` - [Bare URL used](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md034---bare-url-used)
`MD034` - 使用裸 URL 地址

**别名**：`no-bare-urls`

**标签**：`links`、`url`

**规范**：应将裸 URL 或邮箱地址置于一对尖括号 `<>` 中。

**修正**：违规格式可通过命令行工具修正。

## MD035 - 分割线样式

`MD035` - [Horizontal rule style](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md035---horizontal-rule-style)
`MD035` - 水平分割线样式

**别名**：`hr-style`

**标签**：`hr`

**规范**：水平分割线样式应一致。

**参数**：

- ```
  style
  ```

  （

  ```
  字符串
  ```

  ，默认值：

  ```
  consistent
  ```

  ） 水平分割线的样式。

  - `consistent`：分割线样式一致。
  - 可自定义样式，如： `"- - -"`。

## MD036 - 强调代替标题

`MD036` - [Emphasis used instead of a heading](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md036---emphasis-used-instead-of-a-heading)
`MD036` - 强调代替标题

**别名**：`no-emphasis-as-heading`

**标签**：`emphasis`、`headings`

**规范**：不应使用强调代替标题。

**参数**：

- ```
  punctuation
  ```

  （

  ```
  字符串
  ```

  ，默认值：

  ```
  .,;:!?。，；：！？i
  ```

  ）

  不检查以上述标点符号结尾的强调。

  - 可自定义。

**说明**：只检查那些除强调（加粗或斜体）文本外无其他内容的行。

## MD037 - 强调符号接空格

`MD037` - [Spaces inside emphasis markers](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md037---spaces-inside-emphasis-markers)
`MD037` - 强调符号接空格

**别名**：`no-space-in-emphasis`

**标签**：`emphasis`、`whitespace`

**规范**：强调符号 `*` / `_` 与强调文本之间不应有空格。

**修正**：违规格式可通过命令行工具修正。

## MD038 - 行内代码接空格

`MD038` - [Spaces inside code span elements](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md038---spaces-inside-code-span-elements)
`MD038` - 行内代码接空格

**别名**：`no-space-in-code`

**标签**：`code`、`whitespace`

**规范**：行内代码符号 ``` 与代码之间不应有空格。

**修正**：违规格式可通过命令行工具修正。

## MD039 - 链接符号接空格

`MD039` - [Spaces inside link text](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md039---spaces-inside-link-text)
`MD039` - 链接符号接空格

**别名**：`no-space-in-links`

**标签**：`links`、`whitespace`

**规范**：链接符号 `[` / `]` 与链接文本之间不应有空格。

**修正**：违规格式可通过命令行工具修正。

## MD040 - 代码块语言

`MD040` - [Fenced code blocks should have a language specified](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md040---fenced-code-blocks-should-have-a-language-specified)
`MD040` - 代码块应标注使用的编程语言

**别名**：`fenced-code-language`

**标签**：`code`、`language`

**规范**：应标注代码块使用的编程语言。

**参数**：

- ```
  allowed_languages
  ```

  （

  ```
  字符串[]
  ```

  ，默认值：

  ```
  []
  ```

  ）

  允许使用的语言列表。

  - 默认允许使用任何语言。
  - 可自定义允许使用哪些语言，区分大小写。

- `language_only`（`布尔`，默认值：`false`）
  只接受编程语言，不接受其他信息，如：`ruby startline=3`。

## MD041 - 首行标题

`MD041` - [First line in a file should be a top-level heading](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md041---first-line-in-a-file-should-be-a-top-level-heading)
`MD041` - 文档首行应为最高层级标题

**别名**：`first-line-heading`

**标签**：`headings`

**规范**：文档首行应为最高层级标题，作为整个文档的标题。

**参数**：

- ```
  front_matter_title
  ```

  （

  ```
  字符串
  ```

  ，默认值：

  ```
  ^\s*title\s*[:=]
  ```

  ）

  从前置参数中匹配标题的正则表达式。

  - 默认将文档前置参数中 `title=` 或 `title:` 之后的文本作为最高级标题。
  - `""`：空字符串禁用该参数。

- `level`（`整数`，默认值：`1`）
  标题的最高层级。

**说明**：允许首行标题为 HTML 样式。

## MD042 - 空链接

`MD042` - [No empty links](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md042---no-empty-links)
`MD042` - 空链接

**别名**：`no-empty-links`

**标签**：`links`

**规范**：链接地址不应为空。

## MD043 - 结构化标题

`MD043` - [Required heading structure](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md043---required-heading-structure)
`MD043` - 结构化标题

**别名**：`required-headings`

**标签**：`headings`

**规范**：可自定义结构化标题。

**参数**：

- ```
  headings
  ```

  （

  ```
  字符串[]
  ```

  ，默认

   

  ```
  []
  ```

  ）

  结构化的标题列表。

  - 默认无要求。
  - 可自定义标题结构。

- `match_case`（`布尔`，默认 `false`）
  要求大小写匹配。

**示例**：

将 `headings` 设定为：

| `1 2 3 4 5 6 7 ` | `[    "# Head",    "## Item",    "*",    "## Foot",    "+" ]` |
| ---------------- | ------------------------------------------------------------ |
|                  |                                                              |

可匹配如下标题结构：

| `1 2 3 4 ` | `# Head ## Item ## Foot ### Notes` |
| ---------- | ---------------------------------- |
|            |                                    |

其中：

- `"*"`：匹配任意标题，可以没有。
- `"+"`：匹配至少一个任意标题。

## MD044 - 预定义单词

`MD044` - [Proper names should have the correct capitalization](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md044---proper-names-should-have-the-correct-capitalization)
`MD044` - 专有名词需规范大小写

**别名**：`proper-names`

**标签**：`spelling`

**规范**：专有名词应规范大小写。

**参数**：

- `code_blocks`（`布尔`，默认值：`true`）
  是否检查代码块。

- `html_elements`（`布尔`，默认值：`true`） 是否检查 HTML 元素。

- ```
  names
  ```

  （

  ```
  字符串[]
  ```

  ，默认值：

  ```
  []
  ```

  ）

  专有名词列表。

  - 可自定义。

**修正**：违规格式可通过命令行工具修正。

## MD045 - 图片描述文本

`MD045` - [Images should have alternate text (alt text)](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md045---images-should-have-alternate-text-alt-text)
`MD045` - 图片应包含描述

**别名**：`no-alt-text`

**标签**：`accessibility`、`images`

**规范**：图片应包含描述。

**示例**：

| `1 ` | `![图片描述](image.png "图片标题")` |
| ---- | ----------------------------------- |
|      |                                     |

**说明**：描述文本在图片无法加载时提示图片信息。

## MD046 - 代码块样式

`MD046` - [Code block style](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md046---code-block-style)
`MD046` - 代码块样式

**别名**：`code-block-style`

**标签**：`code`

**规范**：代码块样式应一致。

**参数**：

- ```
  style
  ```

  （

  ```
  字符串
  ```

  ，默认值：

  ```
  consistent
  ```

  ，可选值：

  ```
  consistent
  ```

   

  /

   

  ```
  fenced
  ```

   

  /

   

  ```
  indented
  ```

  ）

  代码块样式。

  - `fenced`：围栏式代码块。
  - `indented`：缩进式代码块。
  - `consistent`：上述代码块样式均可，但样式应一致。

## MD047 - 文末空行

`MD047` - [Files should end with a single newline character](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md047---files-should-end-with-a-single-newline-character)
`MD047` - 文档应以空行结束

**别名**：`single-trailing-newline`

**标签**：`blank_lines`

**规范**：文档应以空行结束。

**修正**：违规格式可通过命令行工具修正。

## MD048 - 代码围栏样式

`MD048` - [Code fence style](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md048---code-fence-style)
`MD048` - 代码块围栏样式

**别名**：`code-fence-style`

**标签**：`code`

**规范**：代码块围栏样式应一致。

**参数**：

- ```
  style
  ```

  （

  ```
  字符串
  ```

  ，默认值：

  ```
  consistent
  ```

  ，可选值：

  ```
  backtick
  ```

   

  /

   

  ```
  consistent
  ```

   

  /

   

  ```
  tilde
  ```

  ）

  代码围栏样式。

  - `backtick`：三个连续反引号 `````。
  - `tilde`：三个连续波浪线 `~~~`。
  - `consistent`：上述围栏样式均可，但样式应一致。

## MD049 - 斜体样式

`MD049` - [Emphasis style should be consistent](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md049---emphasis-style-should-be-consistent)
`MD049` - 斜体样式一致

**别名**：`emphasis-style`

**标签**：`emphasis`

**规范**：斜体样式应一致。

**参数**：

- ```
  style
  ```

  （

  ```
  字符串
  ```

  ，默认值：

  ```
  consistent
  ```

  ，可选值：

  ```
  asterisk
  ```

   

  /

   

  ```
  consistent
  ```

   

  /

   

  ```
  underscore
  ```

  ） 斜体样式。

  - `asterisk`：单个星号 `*`。
  - `underscore`：单个下划线 `_`。
  - `consistent`：上述斜体样式均可，但样式应一致。

**修正**：违规格式可通过命令行工具修正。

## MD050 - 粗体样式

`MD050` - [Strong style should be consistent](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md050---strong-style-should-be-consistent)
`MD050` - 粗体样式一致

**别名**：`strong-style`

**标签**：`emphasis`

**规范**：粗体样式应一致。

**参数**：

- ```
  style
  ```

  （

  ```
  字符串
  ```

  ，默认值：

  ```
  consistent
  ```

  ，可选值：

  ```
  asterisk
  ```

   

  /

   

  ```
  consistent
  ```

   

  /

   

  ```
  underscore
  ```

  ） 粗体样式。

  - `asterisk`：连续两个星号 `**`。
  - `underscore`：连续两个下划线 `__`。
  - `consistent`：上述样式均可，但样式应一致。

**修正**：违规格式可通过命令行工具修正。

## MD051 - 跳转地址有效

`MD051` - [Link fragments should be valid](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md051---link-fragments-should-be-valid)
`MD051` - 跳转地址应有效

**别名**：`link-fragments`

**标签**：`links`

**规范**：页内标题跳转地址应有效。

**说明**：页内跳转地址包括：

- 某些解析器自动生成的标题地址：`#heading-name`；
- 手动输入的标题地址： `{#named-anchor}`；
- 通过 THML 标签引入的地址：`<a id="bookmark"></a>`；

## MD052 - 链接标记有效

`MD052` - [Reference links and images should use a label that is defined](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md052---reference-links-and-images-should-use-a-label-that-is-defined)
`MD052` - 参考式链接或图片的标记应有定义

**别名**：`reference-links-images`

**标签**：`images`、`links`

**规范**：参考式链接或图片的标记应有效。

**参数**：

- `shortcut_syntax`（`布尔`，默认值：`false`）
  是否检查省略样式。

**示例**：参考式链接或图片有三种定义方式

```markdown
完整链接：[text][label]
折叠链接：[label][]
省略链接：[label]

完整图片：![text][image]
折叠图片：![image][]
省略图片：![image]

[label]: https://example.com/label
[image]: https://example.com/image
```

## MD053 - 链接定义闲置

`MD053` - [Link and image reference definitions should be needed](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md053---link-and-image-reference-definitions-should-be-needed)
`MD053` - 链接和图片地址的定义应被使用

**别名**：`link-image-reference-definitions`

**标签**：`images`、`links`

**规范**：链接或图片地址的定义不应闲置。

**参数**：

- `ignored_definitions`（`字符串[]`，默认值：`["//"]`）
  允许闲置的地址定义。

**修正**：违规格式可通过命令行工具修正。

**示例**：利用参考式链接定义的注释

```mark
[//]: # (这是一条注释。)
```

---

参考链接

1. [Markdown 语法规范：markdownlint - Newverse & Wiki](https://www.newverse.wiki/senses/markdownlint/#MD042) -->