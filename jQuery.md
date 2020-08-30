## jQuery第一天

### 1查元素

#### 1-1-基本选择器

```html
<html>
    <body>
        <script>
            /* 基本选择器与 (css一致) */
             //id选择器 :  $(#box)
              $('#slg').css('fontSize','40px');
             //类选择器 : $('.one')
              $('.tz').css('fontSize','30px');
             //标签选择器 ： $('li')
              $('li').css('backgroundColor','red');
             //并集选择器 :  $('li,p')
              $('.hf,.wsy').css('backgroundColor','skyblue');
             //交集选择器 :   $('li.one')
              $('li.nj').css('backgroundColor','#222');
        </script>
    </body>
</html>
```

#### 1-2层次选择器

```html
<script>
     /* 
        层次选择器
            子代选择器： $('#box>p')
            后代选择器: $('#box p')
       */
 </script>
```

#### 1-3过滤选择器

```html
<script>
    /* 
        1.过滤选择器是jq独有的选择器
        2.语法规则：  $('选择器:过滤条件')
            :eq(下标)   ： 选择具体下标的元素
            :odd        :  选择下标为奇数的元素
            :even       :  选择下标为偶数的元素
     */
    
    // :eq(下标)   ： 选择具体下标的元素
        let index = 5;

    //a.第一种写法：直接把数字写在字符串里面
        $('li:eq(0)').css('backgroundColor','green');

    //b.第二种写法：把数字写在外面   $().eq(下标)
        //如果下标是存在变量中，就要使用这种写法
        $('li').eq(index).css('backgroundColor','greenyellow');
    
     // :odd        :  选择下标为奇数的元素  (双数行)
        $('li:odd').css('backgroundColor','yellow');
    
    // :even       :  选择下标为偶数的元素  (单数行)
        $('li:even').css('backgroundColor','pink');
</script>
```

### 2-查属性

#### 2-1css属性

```html
<html>
    <style>
        .one {
            height: 200px;
            background-color: pink;
            margin-top: 10px;
        }

        #box {
            border: 1px solid red;
        }
    </style>
    <body>
        
        <button id="btn1">获取样式属性</button>
    	<button id="btn2">设置样式属性</button>
    	<div id="box" class="one" style="width: 100px"></div>
    	<div class="one" style="width: 200px"></div>
    	<div class="one" style="width: 300px"></div>
        
        <script>
	/*  jq操作css样式属性   -> 本质是调用方法
            获取： $().css('属性名')
            设置： $().css('属性名',属性值)
            
	jq操作样式特点： 行内和行外都可以操作  （底层使用getComputedStyle）
	
	隐式迭代： jq会在底层偷偷遍历每一个元素，设置相同的值
            * 隐式迭代只对设置有效
            * 获取类操作没有隐式迭代：默认获取第一个元素值  */
    
    $('#btn1').click(function () {
            //选中一个元素
            // console.log( $('#box').css('width') );

            //选中多个元素 : 默认只会获取第一个元素的值
            console.log( $('.one').css('width') );
        });
    
    $('#btn2').click(function () {
            //选中一个元素
            // $('#box').css('width','500px');

            //选中多个元素 : jq会自动遍历每一个元素设置相同的值
            /* 
            隐式迭代 ： jq会偷偷的遍历每一个元素
            */
            $('.one').css('width','500px');
        });
</script>
    </body>
</html>
```

#### 2-2html属性

```html
<script>
	/* jq操作html属性
		1. 操作内容
			文本: $().text()     底层innerText
			内容: $().html()     底层innerHTML
		2. 标准属性 + 自定义属性
			获取: $().attr('属性名)				  元素.getAttribute('属性名')
			设置: $().attr('属性名',属性值)			元素.setAttribute('属性名',属性值)
			移出: $().removeAttr('属性名')		   元素.removeAttribute('属性名')
</script>
```

#### 2-3表单属性

```html
<script>
    /* jq操作表单属性    ->  本质是调用方法
            1.1 文本：  $().val()
            1.2 布尔类型属性:  jq使用$().prop()方法统一操作
                获取：  $().prop('checked')
                设置：  $().prop('checked',true)  */
    
    // 文本
	$('input:eq(0)').val('我是设置的内容');
	
    //布尔值类型属性
    $('input:eq(2)').prop('checked',true)
    
    // disabled input的禁用属性  
</script>

```

## jQuery第2天

### 1-节点操作(改)

![节点操作](imgs/节点操作.png)

```html
<html>
    <body>
        <script>
        /*    1.复习原生DOM语法节点操作     -> 本质都是对象的属性
            1.1 获取子元素 :   元素.children
            1.2 获取父元素 :   元素.parentNode
            1.3 获取上一个兄弟元素： 元素.previousElementSibling
            1.4 获取下一个兄弟元素： 元素.nextElementSibling

        2.jq操作节点
            2.1 获取子元素 :  $().children()
            2.2 获取父元素 :  $().parent()
            2.3 获取上一个兄弟元素： $().prev()
            2.4 获取下一个兄弟元素： $().next()
            2.5 获取后代元素 : $().find()      -> 底层使用递归实现
            2.6 获取所有的兄弟元素： $().siblings()     -> 获取除自己之外的所有同辈元素
         */
        </script>
    </body>
</html>
```

### 2-增加元素

#### 2-1JQ创建元素2种方式

```html
<html>
    <body>
        <script>
        	/* 
        	 1.复习原生DOM语法3种方式
            1.1 document.write()  : 不推荐，可能会覆盖原有的内容
            1.2 父元素.innerHTML   : 少用（<100）,会有性能问题
            1.3 document.createElement() : DOM推荐 
        	 
        	 2.jq创建元素2种方式
            2.1  $().html('')    : 底层原理innerHTML

            2.2  $('')    :  底层原理 document.createElement
                * a.创建空标签（jq对象）
                * b.设置样式
                * c.添加到DOM树
             */
        </script>
    </body>
</html>
```

#### 2-2JQ添加元素的5种方式

![添加元素的5种方式](imgs/添加元素的5种方式.png)

```html
<html>
    <body>
        <script>
        /*    1.复习原生DOM添加元素2种方式
            1.1 添加到最后面：  父元素.appendChild(子元素)
            1.2 添加到指定位置:  父元素.insertBefore(A元素,B元素)
                * A元素添加到B元素前面

        * 元素操作3个特点
            * a. 元素是新创建的，则是添加操作
            * b. 元素已存在， 则是移动操作
            * c. 元素有子元素，则元素和子元素一起移动

        2.jq添加元素5种方式
            2.1  $(父元素).append( 子元素 )    : 添加在最后面
            2.2  $(子元素).appendTo( 父元素)   : 添加到最后面
            2.3  $(父元素).prepend(子元素)     : 添加到最前面
            2.4  $(兄弟A).before(兄弟B)        ： B插入A的前面
            2.5  $(兄弟A).after(兄弟B)        ：  B插入A的后面

        * jq元素操作与元素特点完全一致
        */
            
            //1  $(父元素).append( 子元素 )    : 添加在最后面
        $("#btnAppend").click(function () {
            //a. 元素是新创建的，则是添加操作
            let $li = $('<li>我是新来的</li>');
            $('#ul1').append($li);

            //上面两行代码可以简写成下面一行
            // $('#ul1').append( $('<li>我是新来的</li>') );
            //还可以这样简写
            // $('#ul1').append( '<li>我是新来的</li>' );

            //b. 元素已存在， 则是移动操作
            $('#ul1').append($('#li3'));

            //c. 元素有子元素，则元素和子元素一起移动
            $('#ul1').append($('#ul2'));
        });

        //2  $(子元素).appendTo( 父元素)   : 添加到最后面
        $("#btnAppendTo").click(function () {
            //a. 元素是新创建的，则是添加操作
            let $li = $('<li>我是新来的</li>');
            $li.appendTo($('#ul1'));//   $li1 添加到  ul1里面

            //b. 元素已存在， 则是移动操作
            $('#li3').appendTo($('#ul1'));
            //c. 元素有子元素，则元素和子元素一起移动
            $('#ul2').appendTo($('#ul1'));// ul2 添加到  ul1里面
        });

        //3  $(父元素).prepend(子元素)     : 添加到最前面
        $("#btnPrepend").click(function () {
            //a. 元素是新创建的，则是添加操作
            let $li = $('<li>我是新来的</li>');
            $('#ul1').prepend($li);

            //b. 元素已存在， 则是移动操作
            $('#ul1').prepend($('#li3'));
           
            //c. 元素有子元素，则元素和子元素一起移动
            $('#ul1').prepend($('#ul2'));});

        //4  $(兄弟A).before(兄弟B)        ： B插入A的前面
        $("#btnBefore").click(function () {
            //a. 元素是新创建的，则是添加操作
            let $li = $('<li>我是新来的</li>');
            $('#li2').before($li);// $li 插入 li2前面

            //b. 元素已存在， 则是移动操作
            $('#li2').before($('#li3'));// li3 插入 li2前面

            //c. 元素有子元素，则元素和子元素一起移动
            $('#li2').before($('#ul2'));// ul2 插入 li2前面
        });

        //5  $(兄弟A).after(兄弟B)        ：  B插入A的后面
        $("#btnAfter").click(function () {
            //a. 元素是新创建的，则是添加操作
            let $li = $('<li>我是新来的</li>');
            $('#li2').after($li);// $li 插入 li2后面
            //b. 元素已存在， 则是移动操作
            $('#li2').after($('#li3'));// li3 插入 li2后面
            //c. 元素有子元素，则元素和子元素一起移动
            $('#li2').after($('#ul2'));// ul2 插入 li2后面
        });
        </script>
    </body>
</html>
```

### 3-移除元素

```html
<html>
    <body>
        <script>
        	/*
              1.复习原生DOM操作2种
            1.1 移除单个元素：  父元素.removeChild(子元素)
            1.2 清空所有子元素 ： 父元素.innerHTML = ''
        
        2.jq移除元素3种方式
            2.1 清空所有子元素
                a.   $().html('')
                b.   $().empty()            jq作者推荐，性能稍好
            2.2 移除单个元素 (jq里面都是自己移除自己)
                $().remove()                 底层： this.parentNode.removeChild(this)
        	*/
        </script>
    </body>
</html>
```

### 4-了解知识

#### 4-1链式编程

```html
<html>
    <body>
        <script>
        	/* 链式编程:一个对象可以连续调用它的方法
                原理：jq在设置完元素的属性之后，这个函数会返回一个jq对象。既然是jq对象，那就可以继续调用方法
                这种编程语法称之为链式语法
             */

        </script>
    </body>
</html>
```

![哼哼哈哈](imgs/哼哼哈哈.png)

#### 4-2onmouseover与onmouseleave(了解)

```html
<html>
    <body>
        <script>
        	/*本小节知识点： onmouseover和onmouseleave的区别
                onmouseover/onmouseout：支持冒泡。移入元素和子元素都会触发（浪费性能）
                onmouseenter/onmouseleave：不支持冒泡。移入子元素不会触发（节省性能）

 				总结： 以后尽量使用 onmouseenter/onmouseleave
        */
        </script>
    </body>
</html>
```

#### 4-3显示/隐藏

```html
<html>
    <script>
    	/*juqery语法显示和隐藏
            显示： $().show()    底层是设置display为block
            隐藏： $().hide()    底层是设置display为none
		*/
    </script>
</html>
```

### 5-类名操作

```html
<html>
    <body>
        <script>
        	 /*学习目标：jq操作类名
        
        1.复习原生DOM操作类名
            1.1 获取类名 ： 元素.className
            1.2 设置类型 ：  元素.className = 类名

        2.jq类名操作
            2.1 添加类名:  $().addClass('类名')
            2.2 移除类名:  $().removeClass('类名')
            2.3 判断类名:  $().hasClass('类名')   true:有  false:没有
            2.4 切换类名:  $().toggleClass('类名')  
                * 如果有，则移除类名
                * 如果没有，则添加类名
        */
            
        //1 添加类名:  $().addClass('类名')
        $("#addClass").click(function () {
            $('#div1').addClass('width200 height200');   ---可以设置多个
            $('#div1').addClass('fontSize30');			---可以换行显示
        })

        //2 移除类名:  $().removeClass('类名')
        $("#removeClass").click(function () {
            $('#div1').removeClass('width200');
         });

        //3 判断类名:  $().hasClass('类名')   true:有  false:没有
        $("#hasClass").click(function () {
            console.log(  $('#div1').hasClass('width200') );
         })
        //4 切换类名:  $().toggleClass('类名') 
        $("#toggleClass").click(function () {
            /* 
            如果有 ： 则移除
            如果没有 ： 则添加
            */
            $('#div1').toggleClass('width200');
         })
        </script>
    </body>
</html>
```

## jQuery第3天

### 1-jq动画

| 名称        | 用法                                                  |                             描述                             |
| ----------- | ----------------------------------------------------- | :----------------------------------------------------------: |
| show()      | $('div').show(动画时间，动画完成回调)                 |        展示动画，主要修改元素 `宽高 + display为block         |
| hide()      | $('div').hide(动画时间，动画完成回调)                 |        隐藏动画，主要修改元素 `宽高 + display为none`         |
| slideDown() | $('div').slideDown(动画时间，动画完成回调)            | 滑入动画（卷帘门效果），主要修改元素 `高度+ display为block`  |
| slideUp()   | $('div').slideUp(动画时间，动画完成回调)              |  滑出动画（卷帘门效果），主要修改元素 `高度+ display为none`  |
| fadeIn()    | $('div').fadeIn(动画时间，,动画完成回调)              |  淡入动画(渐变效果)，主要修改元素 `透明度1+ display为block`  |
| fadeOut()   | $('div').fadeOut(动画时间，,动画完成回调)             |  淡出动画(渐变效果)，主要修改元素 `透明度0+ display为block`  |
| fadeTo()    | $('div').fadeTo(动画时间，`目标透明度`,动画完成回调)  |  淡入动画(渐变效果)，主要修改元素 `透明度+ display为block`   |
| animate()   | $('div').animate(属性对象,动画时间,动画速度,回调函数) | 相当于webApi中封装的缓动动画animationSlow()，只是参数不同而已 |

#### 1-1显示与隐藏

```html
<html>
    <body>
        <script> 
            /*学习目标：  jq显示和隐藏动画
            1.  显示：  $().show() 
            2.  隐藏：  $().hide() 
            3.  切换：  $().toggle() */
            
        //1.  显示：  $().show() 
        $('#show').click(function () {
            //(1)如果不传参数，则没有动画
            // $('#div1').show();
            /*(2)
            第一个参数：动画时间  
            第二参数： 缓动:swing (默认)  匀速：linear,默认值。
            第二个参数：完成回调
            */
            $('#div1').show(1000);
            //(3)第一个参数可以是预先定义的三种字符串：  'slow':600  'normal':400 'fast':200
            $('#div1').show(''); // 空字符串默认就是normal

            //(4)第二个参数表示动画方式 ：  缓动:swing (默认)  匀速：linear,默认值。
            $('#div1').show(2000,'linear');

            //(5)第三个参数表示完成回调 (类似于定时器回调，2s后就会执行)
            $('#div1').show(2000,function(){
                alert('2秒,动画结束');
            });
            
            //(6)动画支持隐式迭代
            $('div').show(2000,function(){
                alert('2秒,动画结束');
            });
         });

             //2.  隐藏：  $().hide() 
        $('#hide').click(function () { 
            /* hide()所有特点与show()一致，唯一区别是动画是相反的 */
            $('#div1').hide('');
        });

        //3.  切换：  $().toggle() 
        $('#toggle').click(function () { 
            /*toggle ： 显示 / 隐藏  切换
            如果display为none :  则执行show()显示 
            如果display为block :  则执行hide()隐藏 
            */
            $('#div1').toggle('');

        });
            </script> 
    </body>
</html>
```

#### 1-2滑入与滑出

```html
<html>
    <body>
        <script>
       		/*学习目标：  jq滑入滑出动画 （修改高度）
        1.滑入：          $().slideDown() 
        2.滑出：           $().slideUp() 
        3.滑入/滑出切换 :  $().slideToggle()
        */

        //1.滑入：          $().slideDown() 
        $('#slideDown').click(function () {
            /* 滑入滑出动画 所有的特点 与显示隐藏一致
                唯一区别： 滑入滑出，不传参数默认时间是noraml:400ms
            */
            $('#div1').slideDown('',function(){
                alert('滑入结束')
            });
        });

        //2.滑出：           $().slideUp() 
        $('#slideUp').click(function () {
            /* 滑出与滑入特点完全一致，唯一区别两者动画是相反的 */
            $('#div1').slideUp();
        });

        //3.滑入/滑出切换 :  $().slideToggle()
        $('#slideToggle').click(function () {
            /* 滑入/滑出 切换
            如果高度为0 ：   则滑入
            如果高度不为0 ： 则滑出
            */
           $('#div1').slideToggle();
        });
        </script>
    </body>
</html>
```

#### 1-3淡入与淡出

```html
<html>
    <body>
        <script>
        	/*学习目标：  jq淡入淡出动画 （修改透明度opacity : 0-1切换）
        1.淡入：          $().fadeIn() 
        2.淡出：           $().fadeOut() 
        3.淡入/出切换   :  $().fadeToggle()
        4.淡入到指定透明度：$().fadeTo()
        */

        //1.淡入：          $().fadeIn() 
        $('#fadeIn').click(function () {
            /* 淡入淡出所有的特点与滑入滑出完全一致，只是动画效果不同 */
            $('#div1').fadeIn(2000,function(){
                alert('我完事了');
            });
        });

        //2.淡出：           $().fadeOut() 
        $('#fadeOut').click(function () {
           /* 淡出与淡入特点一致，效果相反 */
           $('#div1').fadeOut(2000);
        });

        //3.淡入/淡出切换   :  $().fadeToggle()
        $('#fadeToggle').click(function () {
            /* 淡入/淡出切换
            如果透明度为0 ： 则淡入 fadeIn()
            如果透明度不为0 ： 则淡出 fadeOut()
            */
            $('#div1').fadeToggle();
        });

        //4.淡入到指定透明度：$().fadeTo()
        $('#fadeTo').click(function(){
            /* 
            (1)默认情况下，淡入和淡出 透明度在0-1之间切换
            (2)如果希望淡入到指定的透明度，则可以使用fadeTo,淡入到指定透明度
            */
           //第一个参数：动画时间  第二个参数：目标透明度  第三个参数：完成回调
           $('#div1').fadeTo(1000,0.5,function(){
               alert('我到了0.5');
           });
        });
        </script>
    </body>
</html>
```

#### 1-4自定义动画

```HTML
<html>
    <body>
        <script>
        	$('#btn').click(function(){

            /**
            * @description:自定义动画
            * @param {object} properties : 要移动的属性
            * @param {number} duration : 动画时间
            * @param {string} speed : 默认swing缓动，  匀速：linear
            * @param {function} 完成回调函数
            * @return: 
            */
            // $('#div1').animate({
            //     left:300,
            //     top:200,
            //     width:400,
            //     height:400,
            //     opacity:0.6
            // },2000,'swing',function(){
            //     alert('666');
            // });


            /* 常见用法： 一般传第一个参数 和 第四个参数 */
            $('#div1').animate({
                left:300,
                top:200,
                width:400,
                height:400,
                opacity:0.6,
                borderRadius:25,
                zIndex:1
            });
        });
        </script>
    </body>
</html>
```

#### 1-5动画队列

```html
<script>
    // 点击开始按钮,模拟动画队列
    $('#start').click(function(){
        $('div').slideDown(2000).slideUp(2000);
    })
    /* 清除队列: 相当于以前学习的, 每一次新的动画之前应该先清除以前的定时器 
    $().stop(布尔,布尔)
    	第一个参数: 是否清除队列			true: 清除(后面动画不执行)
    	第二个参数: 是否跳转本次动画结果	 true: 跳转(瞬间跳转到本次动画结果)   */
    $('#stop').click(function(){
        // 常用  
        // $(true,false);
    })
</script>
```



### 2-三大家族

| 名称                               | 用法                      | 描述                                                         |
| ---------------------------------- | ------------------------- | ------------------------------------------------------------ |
| outerWidth() / outerHieght()       | $('div').outerWidth()     | 获取 `width` + `padding·`+ `border`(相当于原生的offsetWidth/Height) |
| width() / height()                 | $('div').width()          | 获取 `width`                                                 |
| innerWidth()/innerHeight()         | $('div').innerWidth()     | 获取 `wdith` + `padding`                                     |
| outerWidth(true)/outerHeight(true) | $('div').outerWidth(true) | 获取 `width` + `padding·`+ `border` + `margin`               |
| position()                         | $('div').position()       | 对象类型，自身左外边框  到 定位父级 左内边框距离（相当于原生的offsetLeft/Top） |
| offset()                           | $('div').offset()         | 对象类型, 自身左外边框 距离 页面 左内边框距离                |
| scrollLeft() / scrollTop()         | $('div').scrollLeft()     | 与原生的scrollLeft/Top作用一样.支持修改                      |



#### 2-1宽高尺寸

```html
<html>
    <body>
        <script>
            /*  学习目标 :  jq操作三大家族尺寸
            1. 复习原生DOM三大家族: offset家族  scroll家族  client家族
            	1.1 offset家族: 获取元素 自身的 真实宽高与位置
            		元素.offsetWidth/Height : content + padding + border
            		元素.offsetLeft/Top     : 元素左/上 外边框 到定位父级  左/上 内边框距离
            		元素.offsetParent		  : 元素的最近的定位父元素
            		
            	1.2 scroll家族: 获取元素 内容的 真实宽高与位置
            		元素.scrollWidth/Height : 获取内容的真实高度
            		元素.scrollLeft/Top : 获取内容的真实位置(滚动条滚动的距离)
            		应用场景: 固定导航
            	1.3 client家族: 获取内容 可视区域的宽高与位置
            		元素.clientWidth/Height : 获取可视区域宽高(视口)
            		元素.clientLeft/Top : 获取可视区域位置(左边框和上边框宽度)
            		应用场景: 响应式布局
            		
             原生三大家族有3个特点
             	a.可以获取行内 + 行外
             	b.获取的类型是number类型
             	c.只能获取,不能修改
             	
             2.jq操作尺寸
             	2.1 $().outerWidth()     : 获取content + padding + border
             	2.2 $().width()			: 获取content
             	2.3 $().innerWidth()	 : 获取content + padding
             	2.4 $().outerWidth(true) : 获取content + padding + border + margin
             	
             jq的尺寸是可以修改的,底层原来都是修改 width/height
             */
            
        //1  $().outerWidth()     : 获取content + padding + border
        console.log( $('#one').outerWidth(),$('#one').outerHeight() );//260 260

        // $('#one').outerWidth(500);
        
        //2  $().width()          : 获取content
        console.log( $('#one').width(),$('#one').height() );//200 200

        //3  $().innerWidth()     : 获取content + padding
        console.log( $('#one').innerWidth(),$('#one').innerHeight() );//240 240
        $('#one').innerWidth(500);

        //4  $().outerWidth(true) : 获取content + padding + border + margin
        console.log( $('#one').outerWidth(true),$('#one').outerHeight(true) );//320 320

        </script>
    </body>
</html>
```

#### 2-2position与offset

```html
 <script>
        /* 
        1.  $().position() : 相当于原生的offsetLeft/Top
            * 获取的是自己的 左/上 外边框 到 定位父级 左/上 内边框距离
            * jq也是无法修改的
        
        2.  $().offset() : 获取的是元素左/上外边框 到 页面 的距离
        */

        //1. $().position() 
        console.log( $('#son').position() );// 获取的是一个对象 {left:100,top:100}
        console.log( $('#son').position().left,$('#son').position().top );

        $('#son').position({
            left:200,
            top:200
        });
        

        //2. $().offset() 
        console.log( $('#son').offset() );// 获取的是一个对象 {left:100,top:100}
        console.log( $('#son').offset().left,$('#son').position().top );

        /* 小提示：如果元素没有定位。为了保证left和top也可以生效
        jq会自动设置元素的定位为相对定位
        */
        $('#son').offset({
            left:200,
            top:200
        });

    </script>
```

#### 2-3获取可视区域宽高

```html
<script>
        /* 
        1. 获取页面可视区域宽高 :  $(window).width() 
 
        2. 页面可视区域宽高（视口）应用场景 ： 响应式布局
          (1)给页面注册onresize事件 ： 监听视口变化
          (2)获取页面视口宽高
        */

        console.log($(window).width(), $(window).height());

        //1.给页面注册onresize事件 ： 监听视口变化
        $(window).resize(function () {
            // console.log('页面视口变化');
            //2.获取页面视口宽高
            console.log( $(window).width(), $(window).height() );

            /* 响应式布局 */
            if( $(window).width() >= 1200 ){
                $('body').css('backgroundColor','red');
            }else if( $(window).width() >= 992 ){
                $('body').css('backgroundColor','orange');
            }else if( $(window).width() >= 768 ){
                $('body').css('backgroundColor','yellow');
            }else{
                $('body').css('backgroundColor','green');
            };

            /* 监听横竖屏变化 */
            if( $(window).width() > $(window).height() ){
                alert('横屏');
            }else{
                alert('竖屏');
            }
        });
    </script>
```

#### 2-4scrollLeft()与scrollTop

```html
<script>
        /* 
        1. $().scrollLeft() / $().scrollTop() : 作用与原生一致
            * 滚动条 左/上 滚动的距离
        
        2. 获取页面滚动的距离
            (1)给页面注册滚动条事件 onscroll
            (2)获取页面滚动的距离
        */    

        //(1)给页面注册滚动条事件 onscroll
        $(window).scroll(function(){
            //(2)获取页面滚动的距离
            console.log( $(window).scrollLeft() , $(window).scrollTop() );
            
        });
        
    </script>
```

### 鼠标事件

| **事件**     | **描述**                                                     |
| ------------ | ------------------------------------------------------------ |
| on Click     | 鼠标点击事件，多用在某个对象控制的范围内的鼠标点击           |
| on Dblclick  | 鼠标双击事件                                                 |
| on MouseDown | 鼠标上的按钮被按下了                                         |
| on MouseUp   | 鼠标按下后，松开时激发的事件                                 |
| on MouseOver | 当鼠标移动到某对象范围的上方时触发的事件                     |
| on MouseMove | 鼠标移动时触发的事件                                         |
| on MouseOut  | 当鼠标离开某对象范围时触发的事件                             |
| on KeyPress  | 当键盘上的某个键被按下并且释放时触发的事件.[注意:页面内必须有被聚焦的对象] |
| on KeyDown   | 当键盘上某个按键被按下时触发的事件[注意:页面内必须有被聚焦的对象] |
| on KeyUp     | 当键盘上某个按键被按放开时触发的事件[注意:页面内必须有被聚焦的对象] |

## jQuery第4天

### 1-jq事件

#### 1-1事件注册

```html
<script>
    /* 1. $().事件类型(事件处理函数)     : $().click(function(){})
       2. 事件绑定 :	$().bind()
       3. 事件委托 : 	$().delegate()
       4. $().on(事件类型,事件处理函数)-----------------重点  现在在用 效果较好 */
    
	/* 4. $().on(事件类型,事件处理函数)
	jq1.7版本之后使用on() 方法统一所有的事件注册
	(1)支持同时注册
	(2)支持动态注册
		a.不注册委托事件	: 调用元素自己的 on()
		b.注册委托事件	: 调用父元素的 on()  */
 
    // a. 不注册委托事件 : 调用	'自己' 的on()方法
    $('.one').on({
        click: function () { console.log('单击事件')},
        mouseenter: function () { console.log('移入事件')}
    });
    
    // b. 注册委托事件 : 调用 '父元素' 的on方法
    //注册单个委托事件
    $('body').on('click','one',function(){
        console.log('我是委托的单击事件');
    })
    
    //注册多个委托事件
    $('body').on({
        click: function(){ console.log('委托的单击事件')},
        mouseenter: function(){ console.log('委托的移入事件')}
    },'one');
</script>
```

#### 1-2事件解绑

```html
<script>
	/*  	jq事件解绑 
	1.复习原生DOM注册事件与解绑事件
		1.1 事件源.事件类型 = 事件处理函数   	box.onclick = function(){}
		    解绑:	事件源.事件类型 = null 	box.onclick = null
		1.2 事件源.addEventListener()
			解绑: 事件源.removeEventListener
	2. jq注册事件
		注册: $().on('click',function(){});
		解绑: $().off('click');        */
    // 1. 注册事件
    $('#btn1').click(function(){
        $('.one').click(function(){
            console.log('这是点击事件');
        });
        $('.one').click(function(){
            console.log('这是移入事件');
        });
    })
    
    // 2. 解绑事件
    $('#btn2').click(function(){
        //移除单个事件
        $('.one').off('click');
        //移除所有的事件
        $('.one').off();
    })
</script>
```

#### 1-3事件触发

```html
<script>
	/*  学习目标 : jq事件触发
	1. 复习原生事件触发
		1.1 注册事件: box.onclick = functio(){}
		1.2 触发事件: box.onclick();
	2. jq事件触发
		2.1 注册事件: $().on('click',function(){})
		2.2 触发事件: $().trigger('click');   */
	// 注册事件: $().click(function(){})     等价于 $().on('click',function(){})
    $('.one').click(function(){
        console.log('五年,这五年我是怎么过的');
    })
    //触发事件: $().click()     等价于  $().trigger('click')
    $('.one').trigger('click');
</script>
```

#### 1-4jquery事件对象

```html
<script>
	/* 
	1. jq的事件对象和原生的事件对象是一样的,唯一的区别是jq事件对象内部处理了浏览器兼容
	
	$('.one').click(function(e){
            console.log(e);
        });
        
	2. 阻止a标签默认跳转:
	 	a. 	return false		阻止冒泡 + 阻止默认跳转
	 	b. 	e.preventDefault();  阻止默认跳转
	 	c.	e.stopPropagation(); 阻止默认冒泡
	*/
    $('a').click(function(){
        console.log('我是abiaoq');
        // 阻止默认跳转
        e.preventDefault();
        // 阻止默认冒泡
        e.stopPropagation();
        // 阻止冒泡 + 阻止默认跳转
        return	false
    })
</script>
```

### 2-jq知识点补充

#### 2-1 链式编程注意点与end()方法

```html
<script>
    /*  1. 链式编程	: 一个对象可以连续调用方法
    		* 底层原理: 在对象的方法中返回自己
    	2. 链式编程注意点:
    		2.1	并不是所有的语法都支持链式
    			* 设置类 : 支持链式. 返回的都是jq对象
    			* 获取类 : 不支持链式. 返回的都是对象的属性值 (字符串,数字)
    		2.2 并不是所有的链式都会返回你想要的的结果
    			* end() : 返回链式上一个DOM状态
    	3. 总结: 链式语法过长就容易导致bug
    		* 解决方案:	把一条长链拆开成多条链			*/
    
    /* 
        $('div')                             -> DOM是div
        $('div').text('222')                 -> DOM是div
        $('div').text('222').prev()          ->  第一个p
        $('div').text('222').prev().next()   ->  DOM是div
         */
        //$('div').text('222').prev().text('111').next().text('333');

        //解决方案一： 使用  end()  返回DOM树上一个状态
         /* 
        $('div')                                  -> DOM是div
        $('div').text('222')                      -> DOM是div
        $('div').text('222').prev()               ->  第一个p
        $('div').text('222').prev().end()        ->  返回上一个状态div
         */
        //$('div').text('222').prev().text('111').end().next().text('333');          

         //解决方案二：把一条长链拆开成多条链
         $('div').text('222').prev().text('111');
         $('div').next().text('3333');
</script>
```

#### 2-2显式迭代each

```html
<script>
    /* 
    1. 隐式迭代	:	jq默认的,偷偷的遍历每一个元素设置相同的值
    	* 使用场景	:	所有的元素都需要设置"相同"的值
    2. 显式迭代	:	主动遍历jq对象的每一个元素
    	* 适用场景	: 	设置"不同"的值           
    */
    	
    //1. 隐式迭代: jq默认的,偷偷的遍历每一个元素设置相同的值
     	$('li').css('opacity',0.5);
    //2. 显式迭代: 设置li元素的透明度0.1 - 1.0
    	//2.1 原生的for语法:	遍历jq伪数组
    for(let i = 0; i < $('li').length; i++ ){
        let li = $('li')[i];  // DOM对象
        $(li).css('opacity',i/10 + 0.1);
    }
    	//2.2 使用jq的each()方法
    $('li').each(function(index,ele){
        console.log(index,ele);   // 下标   ele:DOM对象
        $(ele).css('opacity',index/10 + 0.1);
    })
</script>
```

#### 2-3多库共存

```html
<script>
     /* 
        1.多库共存 ： 同时使用两个版本的jq

        2.复习jq版本的区别
            1.x : 不更新，兼容IE5678浏览器（国内使用较多）
            2.x ： 不更新，不兼容IE5678
            3.x : 正在更新，不兼容IE5678（新增几个语法）

        3.如何查看当前jq的版本号 :  $.prototype.jquery

        4.同时导入框架多个版本的规则 : 后者覆盖前者 （谁后导入，$就是谁的）

        ****5.如何实现多库共存 : 释放$控制权
            *  let $3 = $.noConflict()
        */
    //1.如何查看当前jq的版本号
        console.log(  $.prototype.jquery );//1.12.4
        console.log(  jQuery.prototype.jquery );//1.12.4
        console.log( $.fn.jquery );//1.12.4  $.fn === $.prototype

        /*2.同时导入框架多个版本的规则 
            * 规则：后者覆盖前者  （谁后导入，$就是谁的）
            * 原因： 编译器默认从上往下解析， 每一个版本jq都是给window添加$,所以后者覆盖前者
         */

        
        /* 3.如何实现多库共存 : 释放$控制权
            $.noConflict()
         */

        /* 代码含义： 
        (1)默认由于是后导入的3.x,所以$表示3.x
        (2)$.noConflict() 释放3.x版本对$的控制权，转交给$3 . 原来的$就交给了1.x版本
        (3) $3 :  3.x    $:1.x
         */
        let $3 =  $.noConflict();
        console.log( $3.prototype.jquery );//3.0.0
        console.log( $.prototype.jquery );//1.12.4


        /* 4. 需求： 就只希望使用一个$, 就可以代表两个版本
        解决方案： 闭包实现沙箱模式
         */

        console.log( '沙箱外面$:' + $.prototype.jquery);//1.x
        console.log( '沙箱外面$3:' + $3.prototype.jquery);//3.x

        (function($){//沙箱内部的局部变量$ : let $ = $3
            console.log('沙箱内部$:' + $.prototype.jquery);//3.x
            
        })($3);
</script>
```

### 3-插件

#### 3-1*懒加载技术作用和原理 

​        1.为什么要有懒加载技术

​            1.1 img标签默认会加载src属性对应的资源图片

​            1.2 如果一个网页有几百上千的img标签，需要加载上千个资源，影响网页加载时间

​        2.懒加载技术好处

​            2.1 提升网页加载速度（性能提升）

​        3.懒加载技术原理

​            3.1 将图片的资源路径放入自定义属性中 （不要放入src属性）

​            3.2 监听网页的滚动，当图片进入可视区域范围

​            3.3 取出图片自定义属性中的路径，赋值给src即可

#### 3-2自定义插件原理

```html
<script>
        /* 
        jq插件原理：给$原型添加方法
        */

        // $('div').css('width',200);
        // $('div').css('height',200);
        // $('div').css('backgroundColor','red');

        $.prototype.w = function(num){
            //this:调用这个方法的jq对象
            this.css('width',num+'px');

            //返回jq对象自身，用于链式调用
            return this;
        };

        $.prototype.h = function(num){
            //this:调用这个方法的jq对象
            this.css('height',num+'px');

            //返回jq对象自身，用于链式调用
            return this;
        };

        $.prototype.bgc = function(str){
            //this:调用这个方法的jq对象
            this.css('backgroundColor',str);

            //返回jq对象自身，用于链式调用
            return this;
        };

        //需求：快速的设置元素的宽度 高度 颜色
        $('div').w(200).h(200).bgc('green');
    </script>
```

### 4-jq中的常用事件

|         事件          |                     说明                     |
| :-------------------: | :------------------------------------------: |
|       .click()        | 鼠标单击触发事件，参数可选（data，function） |
|      .dblclick()      |                双击触发，同上                |
|   .mousedown()/up()   |            鼠标按下/弹起触发事件             |
|     .mousemove()      |                 鼠标移动事件                 |
|  .mouseover()/out()   |            鼠标移入/移出触发事件             |
| .mouseenter()/leave() |            鼠标进入/离开触发事件*            |
|  .hover(func1,func2)  |   鼠标移入调用func1函数，移出调用func2函数   |
|      .focusin()       |          鼠标聚焦到该元素时触发事件          |
|      .focusout()      |            鼠标失去焦点时触发事件            |
|   . focus()/.blur()   |    鼠标聚焦/失去焦点触发事件（不支持冒泡     |
|       .change()       |          表单元素发生改变时触发事件          |
|       .select()       |           文本元素被选中时触发事件           |
|       .submit()       |              表单提交动作触发*               |
|    .keydown()/up()    |            键盘按键按下/弹起触发             |
|         .on()         |                 多事件的绑定                 |
|        .off()         |                移除事件的绑定                |
|   .trigger(“event”)   |              触发事件event调用               |
|   .triggerHandler()   |     触发事件，不会冒泡，不会触发默认事件     |
