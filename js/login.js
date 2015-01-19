// 初期処理
$(function(){

  // ボタン押下イベント
  btnClickEvent();

});

// ボタン押下処理
function btnClickEvent()
{
  var _frm;         // フォーム
  var _userid;      // ユーザーID
  var _password;    // パスワード

  $('#submit-btn').on('click',function(){

    // formを取得
    _frm = $('#form-login');

    // ユーザーID、パスワード取得
    _userid = $('#userId').val();
    _password = $('#userpassword').val();

    // 引数指定
    //var submitType = document.createElement("input");
    //submitType.setAttribute("name", name);

    // DB接続

    _frm.submit();

  });
}