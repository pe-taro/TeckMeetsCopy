// トップへゆっくり戻る1
$(function () {
  $(".logo").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });
});

// トップへゆっくり戻る2
$(function () {
  $(".gotop").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });
});

// トップへゆっくり戻る3
$(function () {
  $(".menu__item").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });
});

// 固定ヘッダー
$(function () {
  var nav = $("#nav");
  //navの位置
  var navTop = nav.offset().top;
  //スクロールするたびに実行
  $(window).scroll(function () {
    var winTop = $(this).scrollTop();
    //スクロール位置がnavの位置より下だったらクラスfixedを追加
    if (winTop >= navTop) {
      nav.addClass("fixed");sx
    } else if (winTop <= navTop) {
      nav.removeClass("fixed");
    }
  });
});



// バーガーメニュー3
$('.menu-btn').on('click', function(){
  $('.menu').toggleClass('is-active');
});
$('.menu__item').on('click', function(){
  $('.menu').toggleClass('is-active');
});