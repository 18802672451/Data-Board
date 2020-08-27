// require('jQuery')

// jq入口函数
$(function () {
    // 1. 设备监控tab切换
    $(' .monitor .tab span').click(function () {
        // 排他思想修改样式
        $(this).addClass('active').siblings().removeClass('active');
        // 1.2 排他思想显示对应下标的轮播图
        $('.carousel-view').eq($(this).index()).show().siblings('.carousel-view').hide();
    })
    // 2. 设备监控鼠标移入移出
    $('.carousel .row')
        .mouseenter(function () {
            $(this).addClass('active').siblings().removeClass('active')
        })
        .mouseleave(function () {
            $(this).removeClass('active')
        })
    // 3. 设备监控无限轮播
    function lunbo() {
        $('.carousel').css('top', 0);
        $('.carousel').animate({
            top: -175
        }, 5000, 'linear', function () {
            lunbo();
        });
    };
    lunbo();
    // 4. 订单tab切换
    let orderData = [{
            orders: '20,301,987',
            amount: '99834'
        },
        {
            orders: '301,987',
            amount: '9834'
        },
        {
            orders: '1,987',
            amount: '3834'
        },
        {
            orders: '987',
            amount: '834'
        }
    ];

    $('.filter a').click(function () {
        // (1)排他思想修改样式
        $(this).addClass('active').siblings().removeClass('active');
        // (2)加载对应数据
        $('.order .item:eq(0) h3').text(orderData[$(this).index()].orders);
        $('.order .item:eq(1) h3').text(orderData[$(this).index()].amount)
    })
    // 5. 销售额度tab栏切换
    $('.sales .header a').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    })
    // 6. 各省热销移入
    let hotData = [{
            name: '可爱多',
            num: '9,086'
        },
        {
            name: '娃哈哈',
            num: '8,341'
        },
        {
            name: '喜之郎',
            num: '7,407'
        },
        {
            name: '八喜',
            num: '6,080'
        },
        {
            name: '小洋人',
            num: '6,724'
        },
        {
            name: '好多鱼',
            num: '2,170'
        },
    ];

    $('.province .cup:eq(0) li').mouseenter(function () {
        // (1)排他思想修改样式
        $(this).addClass('active').siblings().removeClass('active');
        // (2)切换右侧ul的数据
        /* 通过数组元素互换位置模拟数据刷新 */
        hotData.push(hotData.shift());
        /* 重新渲染到页面 */
        let str = '';
        for (let i = 0; i < hotData.length; i++) {
            str += '<li>' +
                '<span>' +
                '</span>' + hotData[i].name + '<span>' +
                '<span class="icon-up" style="color:#dc3c33" ></span>' +
                hotData[i].num +
                '</span>' +
                '</li>'
        };

        $('.cup:eq(1)').html(str);
    })
});