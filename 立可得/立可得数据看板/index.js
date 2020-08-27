/*      jq入口函数         */
$(function () {
    /*      1. 故障设备tab栏切换      */
    $('.fault .tab span')
        .click(function () {
            $(this).addClass('active').siblings().removeClass('active');
            // 排他思想显示对应下标的轮播图
            $('.carousel-view').eq($(this).index()).show().siblings('.carousel-view').hide();
        })
    /*      2. 鼠标移入移出信息      */
    $('.carousel-view .carousel .row')
        .mouseenter(function () {
            $(this).addClass('active').siblings().removeClass('active');
        })
        .mouseleave(function () {
            $(this).removeClass('active');
        })
    /*      3. 自动轮播信息      */
    function lunbo() {
        $('.carousel').css('top',0);
        $('.carousel').animate({
            top: -175
        },5000,'linear',function(){
            lunbo();
        });
    };
    lunbo();
    /*      4. 订单量tab栏切换        */
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
    $('.order .filter a')
        .click(function () {
            $(this).addClass('active').siblings().removeClass('active');
            $('.order .data .item:eq(0) h3').text(orderData[$(this).index()].orders)
            $('.order .data .item:eq(1) h3').text(orderData[$(this).index()].amount)
        })
    /*      5. 销售额tab栏切换      */
    $('.sales .header a')
        .click(function () {
            $(this).addClass('active').siblings().removeClass('active');
        })
    /*      6. 各省热销鼠标移入      */
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

    $('.province .cup:eq(0) li')
        .mouseenter(function () {
            $(this).addClass('active').siblings().removeClass('active');
            /* 通过数组元素互换位置模拟数据刷新 */
            hotData.push(hotData.shift());
            /* 重新渲染页面 */
            let str = '';
            for(let i = 0;i < hotData.length;i++) {
                str += '<li>' +
                '<span>' + 
                '</span>' + hotData[i].name +'<span>' + 
                '<span class="icon-up" style="color:#dc3c33">' +
                hotData[i].num +
                '</span>' +
                '</li>' 
            }
            $('.cup:eq(1)').html(str);
        })
})