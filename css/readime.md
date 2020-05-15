
## 目录说明
- video_css 全面系统讲解CSS 工作应用+面试一步搞定 视频代码
- kevens  自己的css学习笔记
- resource 图片&&总结&&资源



## kevens 目录
### background  背景相关

background	简写属性，作用是将背景属性设置在一个声明中。
background-attachment	背景图像是否固定或者随着页面的其余部分滚动。
background-color	设置元素的背景颜色。
background-image	把图像设置为背景。
background-position	设置背景图像的起始位置。
background-repeat	设置背景图像是否及如何重复。

### text 文本相关
color	设置文本颜色
direction	设置文本方向。
letter-spacing	设置字符间距
line-height	设置行高
text-align	对齐元素中的文本
text-decoration	向文本添加修饰
text-indent	缩进元素中文本的首行
text-shadow	设置文本阴影
text-transform	控制元素中的字母
unicode-bidi	设置或返回文本是否被重写 
vertical-align	设置元素的垂直对齐
white-space	设置元素中空白的处理方式
word-spacing	设置字间距

###border 边框相关

border	简写属性，用于把针对四个边的属性设置在一个声明。
border-style	用于设置元素所有边框的样式，或者单独地为各边设置边框样式。
border-width	简写属性，用于为元素的所有边框设置宽度，或者单独地为各边边框设置宽度。
border-color	简写属性，设置元素的所有边框中可见部分的颜色，或为 4 个边分别设置颜色。
border-bottom	简写属性，用于把下边框的所有属性设置到一个声明中。
border-bottom-color	设置元素的下边框的颜色。
border-bottom-style	设置元素的下边框的样式。
border-bottom-width	设置元素的下边框的宽度。
border-left	简写属性，用于把左边框的所有属性设置到一个声明中。
border-left-color	设置元素的左边框的颜色。
border-left-style	设置元素的左边框的样式。
border-left-width	设置元素的左边框的宽度。
border-right	简写属性，用于把右边框的所有属性设置到一个声明中。
border-right-color	设置元素的右边框的颜色。
border-right-style	设置元素的右边框的样式。
border-right-width	设置元素的右边框的宽度。
border-top	简写属性，用于把上边框的所有属性设置到一个声明中。
border-top-color	设置元素的上边框的颜色。
border-top-style	设置元素的上边框的样式。
border-top-width	设置元素的上边框的宽度。

### outline
1. outline是不占空间的，既不会增加额外的width或者height（这样不会导致浏览器渲染时出现reflow或是repaint）
  
2. outline有可能是非矩形的（火狐浏览器下）

outline	在一个声明中设置所有的轮廓属性	
outline-color	设置轮廓的颜色	
color-name
hex-number
rgb-number
invert

outline-style	设置轮廓的样式	
none
dotted
dashed
solid
double
groove
ridge
inset
outset

outline-width	设置轮廓的宽度	
thin
medium
thick
length

### display_visibility Display(显示) 与 Visibility（可见性）
display 属性值：
none	此元素不会被显示。
block	此元素将显示为块级元素，此元素前后会带有换行符。
inline	默认。此元素会被显示为内联元素，元素前后没有换行符。
inline-block	行内块元素。（CSS2.1 新增的值）
list-item	此元素会作为列表显示。
run-in	此元素会根据上下文作为块级元素或内联元素显示。
compact	CSS 中有值 compact，不过由于缺乏广泛支持，已经从 CSS2.1 中删除。
marker	CSS 中有值 marker，不过由于缺乏广泛支持，已经从 CSS2.1 中删除。
table	此元素会作为块级表格来显示（类似 <table>），表格前后带有换行符。
inline-table	此元素会作为内联表格来显示（类似 <table>），表格前后没有换行符。
table-row-group	此元素会作为一个或多个行的分组来显示（类似 <tbody>）。
table-header-group	此元素会作为一个或多个行的分组来显示（类似 <thead>）。
table-footer-group	此元素会作为一个或多个行的分组来显示（类似 <tfoot>）。
table-row	此元素会作为一个表格行显示（类似 <tr>）。
table-column-group	此元素会作为一个或多个列的分组来显示（类似 <colgroup>）。
table-column	此元素会作为一个单元格列显示（类似 <col>）
table-cell	此元素会作为一个表格单元格显示（类似 <td> 和 <th>）
table-caption	此元素会作为一个表格标题显示（类似 <caption>）
inherit	规定应该从父元素继承 display 属性的值。

###  position 属性指定了元素的定位类型。
position：static  默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。
position：relative  生成相对定位的元素，相对于其正常位置进行定位。 因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。
position：fixed  生成绝对定位的元素，相对于浏览器窗口进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
position：absolute 生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
position：sticky 基于用户的滚动位置来定位。
    
    粘性定位的元素是依赖于用户的滚动，在 position:relative 与 position:fixed 定位之间切换。
    它的行为就像 position:relative; 而当页面滚动超出目标区域时，它的表现就像 position:fixed;，它会固定在目标位置。
    元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位。
    这个特定阈值指的是 top, right, bottom 或 left 之一，换言之，指定 top, right, bottom 或 left 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。

### overflow 属性用于控制内容溢出元素框时显示的方式。

overflow : rvisible	默认值。内容不会被修剪，会呈现在元素框之外。
overflow : hidden	内容会被修剪，并且其余内容是不可见的。
overflow : scroll	内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。
overflow : auto	如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。

### cursor  显示光标移动到指定的类型
url	  需使用的自定义光标的 URL。注释：请在此列表的末端始终定义一种普通的光标，以防没有由 URL 定义的可用光标。
default	默认光标（通常是一个箭头）
auto	默认。浏览器设置的光标。
crosshair	光标呈现为十字线。
pointer	光标呈现为指示链接的指针（一只手）
move	此光标指示某对象可被移动。
e-resize	此光标指示矩形框的边缘可被向右（东）移动。
ne-resize	此光标指示矩形框的边缘可被向上及向右移动（北/东）。
nw-resize	此光标指示矩形框的边缘可被向上及向左移动（北/西）。
n-resize	此光标指示矩形框的边缘可被向上（北）移动。
se-resize	此光标指示矩形框的边缘可被向下及向右移动（南/东）。
sw-resize	此光标指示矩形框的边缘可被向下及向左移动（南/西）。
s-resize	此光标指示矩形框的边缘可被向下移动（北/西）。
w-resize	此光标指示矩形框的边缘可被向左移动（西）。
text	此光标指示文本。
wait	此光标指示程序正忙（通常是一只表或沙漏）。
help	此光标指示可用的帮助（通常是一个问号或一个气球）。

### clip 裁剪

shape	设置元素的形状。唯一合法的形状值是：rect (top, right, bottom, left)
auto	默认值。不应用任何剪裁。
inherit	规定应该从父元素继承 clip 属性的值。
注意：: 如果先有"overflow：visible"，clip属性不起作用。

### float_clear 浮动与清除浮动

clear	指定不允许元素周围有浮动元素。	
clear:left  在左侧不允许浮动元素。
clear:right 在右侧不允许浮动元素。
clear:both 在左右两侧均不允许浮动元素。
clear:none  默认值。允许浮动元素出现在两侧。

float	指定一个盒子（元素）是否可以浮动。	
float:left
float:right
float:none
float:inherit

## 



















## 其他
css 盒子大小计算：内容+内边距+边框+外边距 = 总长度

300px (宽 内容 context)
+ 50px (左 + 右填充 margin)
+ 50px (左 + 右边框 border)
+ 50px (左 + 右边距 padding)
= 450px
内边距： padding
边框：border
外边距 margin

