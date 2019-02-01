$(function(){
  $("#open-dialog1").on("click", function(){
  //leftの値 = (ウィンドウ幅 -コンテンツ幅) ÷ 2
    var leftPosition = (($(window).width() - $("#dialog1").outerWidth(true)) / 2);
    //CSSを変更
    $("#dialog1").css({"left": leftPosition + "px"});
    //ダイアログを表示する
    $("#dialog1").show();
  });

  $("#open-dialog2").on("click", function(){
  //leftの値 = (ウィンドウ幅 -コンテンツ幅) ÷ 2
    var leftPosition = (($(window).width() - $("#dialog2").outerWidth(true)) / 2);
    //CSSを変更
    $("#dialog2").css({"left": leftPosition + "px"});
    //ダイアログを表示する
    $("#dialog2").show();
  });

  //閉じるボタンで非表示
  $(".dialog-close").on("click", function(){
    $(this).parents(".dialog").hide();
  });
  //参考URL<https://uxmilk.jp/41809>

  $('#top-btn').click(function(){
    $('html, body').animate({
      'scrollTop':0
    },500);
  });

  $('.title-product').hover(
    function(){
      $(this).css({'background-color':'#D8D8D8'},300);
      $('.title-product .product .explotion').css({'background-color':'#fff'});
    },
    function(){
       $(this).css({'background-color':'#fff'},300);
    }
  );

});
