'use strict'

$(function() {
    function resize() {
        var windowWidth = $(window).width();
        var isSmallScreen = windowWidth < 768;
        $('#main_id>.carousel-inner>.item').each(function(i, item) {
            var $item = $(item);
            var imgSrc = isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');
            $item.css('backgroundImage', 'url("' + imgSrc + '")');
            if (isSmallScreen) {
                $item.html('<img src="' + imgSrc + '" alt=""/>')
            } else {
                $item.empty()
            }
        })

    }
    $(window).on('resize', resize).trigger('resize')
    $('[data-toggle="tooltip"]').tooltip()
    var $ulContainer = $('.nav-tabs');
    var width = 30;
    $ulContainer.children().each(function(i, ele) {
        width += ele.clientWidth
    })
    if (width > $(window).width()) {
        $ulContainer.css('width', width).parent().css('overflow-x','scroll')
    }
    var $newsTitle=$('#news .news-title');
    $('#news .nav-pills a').on('click',function(){
    var $this=$(this);
    var title=$this.data('title');
    $newsTitle.text(title);
    })

     // 获取界面上的轮播图容器
  var $carousels = $('.carousel');
  var startX, endX;
  var offset = 50;
  // 注册滑动事件
  $carousels.on('touchstart', function(e) {
    // 手指触摸开始时记录一下手指所在的坐标X
    startX = e.originalEvent.touches[0].clientX;
    // console.log(startX);
  });

  $carousels.on('touchmove', function(e) {
    // 变量重复赋值
    endX = e.originalEvent.touches[0].clientX;
    // console.log(endX);
  });
  $carousels.on('touchend', function(e) {
    console.log(e);
    // 结束触摸一瞬间记录最后的手指所在坐标X
    // 比大小
    // console.log(endX);
    // 控制精度
    // 获取每次运动的距离，当距离大于一定值时认为是有方向变化
    var distance = Math.abs(startX - endX);
    if (distance > offset) {
      // 有方向变化
      // console.log(startX > endX ? '←' : '→');
      // 2. 根据获得到的方向选择上一张或者下一张
      //     - $('a').click();
      //     - 原生的carousel方法实现 http://v3.bootcss.com/javascript/#carousel-methods
      $(this).carousel(startX > endX ? 'next' : 'prev');
    }
  });

})