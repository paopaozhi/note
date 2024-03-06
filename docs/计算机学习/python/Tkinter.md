## 控件类型

| 控件类型    | 控件名称         | 控件作用                                                     |
| ----------- | ---------------- | ------------------------------------------------------------ |
| Button      | 按钮             | 点击按钮时触发/执行一些事件（函数）                          |
| Canvas      | 画布             | 提供绘制图，比如直线、矩形、多边形等                         |
| Checkbutton | 复选框           | 多项选择按钮，用于在程序中提供多项选择框                     |
| Entry       | 文本框输入框     | 用于接收单行文本输入                                         |
| Frame       | 框架（容器）控件 | 定义一个窗体（根窗口也是一个窗体），用于承载其他控件，即作为其他控件的容器 |
| Lable       | 标签控件         | 用于显示单行文本或者图片                                     |
| LableFrame  | 容器控件         | 一个简单的容器控件，常用于复杂的窗口布局。                   |
| Listbox     | 列表框控件       | 以列表的形式显示文本                                         |
| Menu        | 菜单控件         | 菜单组件（下拉菜单和弹出菜单）                               |
| Menubutton  | 菜单按钮控件     | 用于显示菜单项                                               |
| Message     | 信息控件         | 用于显示多行不可编辑的文本，与 Label控件类似，增加了自动分行的功能 |
| messageBox  | 消息框控件       | 定义与用户交互的消息对话框                                   |
| OptionMenu  | 选项菜单         | 下拉菜单                                                     |
| PanedWindow | 窗口布局管理组件 | 为组件提供一个框架，允许用户自己划分窗口空间                 |
| Radiobutton | 单选框           | 单项选择按钮，只允许从多个选项中选择一项                     |
| Scale       | 进度条控件       | 定义一个线性“滑块”用来控制范围，可以设定起始值和结束值，并显示当前位置的精确值 |
| Spinbox     | 高级输入框       | Entry 控件的升级版，可以通过该组件的上、下箭头选择不同的值   |
| Scrollbar   | 滚动条           | 默认垂直方向，鼠标拖动改变数值，可以和 Text、Listbox、Canvas等控件配合使用 |
| Text        | 多行文本框       | 接收或输出多行文本内容                                       |
| Toplevel    | 子窗口           | 在创建一个独立于主窗口之外的子窗口，位于主窗口的上一层，可作为其他控件的容器 |

## 控件基本属性

| 属性名称    |                             说明                             |
| ----------- | :----------------------------------------------------------: |
| anchor      |              定义控件或者文字信息在窗口内的位置              |
| bg          | bg 是 background 的缩写，用来定义控件的背景颜色，参数值可以颜色的十六进制数，或者颜色英文单词 |
| bitmap      |                  定义显示在控件内的位图文件                  |
| borderwidth |                定于控件的边框宽度，单位是像素                |
| command     | 该参数用于执行事件函数，比如单击按钮时执行特定的动作，可将执行用户自定义的函数 |
| cursor      | 当鼠标指针移动到控件上时，定义鼠标指针的类型，字符换格式，参数值有 crosshair（十字光标）watch（待加载圆圈）plus（加号）arrow（箭头）等 |
| font        | 若控件支持设置标题文字，就可以使用此属性来定义，它是一个数组格式的参数 (字体,大小，字体样式) |
| fg          | fg 是 foreground 的缩写，用来定义控件的前景色，也就是字体的颜色 |
| height      | 该参数值用来设置控件的高度，文本控件以字符的数目为高度（px），其他控件则以像素为单位 |
| image       |                  定义显示在控件内的图片文件                  |
| justify     |    定义多行文字的排列方式，此属性可以是 LEFT/CENTER/RIGHT    |
| padx/pady   |    定义控件内的文字或者图片与控件边框之间的水平/垂直距离     |
| relief      | 定义控件的边框样式，参数值为FLAT（平的）/RAISED（凸起的）/SUNKEN（凹陷的）/GROOVE（沟槽桩边缘）/RIDGE（脊状边缘） |
| text        |                      定义控件的标题文字                      |
| state       | 控制控件是否处于可用状态，参数值默认为 NORMAL/DISABLED，默认为 NORMAL（正常的） |
| width       |          用于设置控件的宽度，使用方法与 height 相同          |



***

## 主窗口常用方法

window 代表主窗口对象

| 函数                                                   | 说明                                                         |
| ------------------------------------------------------ | ------------------------------------------------------------ |
| window.title("my title")                               | 接受一个字符串参数，为窗口起一个标题                         |
| window.resizable()                                     | 是否允许用户拉伸主窗口大小，默认为可更改，当设置为 resizable(0,0)或者resizable(False,False)时不可更改 |
| window.geometry()                                      | 设定主窗口的大小以及位置，当参数值为 None 时表示获取窗口的大小和位置信息。 |
| window.quit()                                          | 关闭当前窗口                                                 |
| window.update()                                        | 刷新当前窗口                                                 |
| window.mainloop()                                      | 设置窗口主循环，使窗口循环显示（一直显示，直到窗口被关闭）   |
| window.iconbitmap()                                    | 设置窗口左上角的图标（图标是.ico文件类型）                   |
| window.config(background ="red")                       | 设置窗口的背景色为红色，也可以接受 16 进制的颜色值           |
| window.minsize(50,50)                                  | 设置窗口被允许调整的最小范围，即宽和高各50                   |
| window.maxsize(400,400)                                | 设置窗口被允许调整的最大范围，即宽和高各400                  |
| window.attributes("-alpha",0.5)                        | 用来设置窗口的一些属性，比如透明度（-alpha）、是否置顶（-topmost）即将主屏置于其他图标之上、是否全屏（-fullscreen）全屏显示等 |
| window.state("normal")                                 | 用来设置窗口的显示状态，参数值 normal（正常显示），icon（最小化），zoomed（最大化）， |
| window.withdraw()                                      | 用来隐藏主窗口，但不会销毁窗口。                             |
| window.iconify()                                       | 设置窗口最小化                                               |
| window.deiconify()                                     | 将窗口从隐藏状态还原                                         |
| window.winfo_screenwidth() window.winfo_screenheight() | 获取电脑屏幕的分辨率（尺寸）                                 |
| window.winfo_width() window.winfo_height()             | 获取窗口的大小，同样也适用于其他控件，但是使用前需要使用 window.update() 刷新屏幕，否则返回值为1 |
| window.protocol("协议名",回调函数)                     | 启用协议处理机制，常用协议有 WN_DELETE_WINDOW，当用户点击关闭窗口时，窗口不会关闭，而是触发回调函数。 |

##  protocol协议处理机制

最常用的协议为 WM_DELETE_WINDOW

```python
from tkinter import Tk
# 导入 对话框控件
from tkinter import messagebox
# 创建主窗口
root = Tk()
# 定义回调函数，当用户点击窗口x退出时，执行用户自定义的函数
def QueryWindow():
    # 显示一个警告信息，点击确后，销毁窗口
    if messagebox.showwarning("警告","出现了一个错误"):
        # 这里必须使用 destory()关闭窗口
        root.destroy()
# 使用协议机制与窗口交互，并回调用户自定义的函数
root.protocol('WM_DELETE_WINDOW', QueryWindow)
root.mainloop()
```

