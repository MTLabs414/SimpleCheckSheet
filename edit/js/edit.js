$(function () {



  // バリデーション
  $("#registrationForm").validate({
      errorClass:'error',
      errorElement:'span',
      highlight: function (element, errorClass, validClass) {
          $(element).parents("div[class='control-group']").addClass(errorClass);
      },
      unhighlight: function (element, errorClass, validClass) {
          $(element).parents(".error").removeClass(errorClass);
      },
      rules: {
          reauiredFld: {
              required: true
          },
          email: {
              required: true
          },
          password: {
              required: true
          },
          confirmPassword: {
              required: true,
              equalTo: ".password"
          }
      },
      messages: {
          reauiredFld: "必須項目です。",
          email: "メールアドレスを入力してください",
          password: "パスワードを入力して下さい",
          confirmPassword: {
              required: "確認用パスワードを入力して下さい",
              equalTo: "パスワードが一致していません"
          }
      }
  });
  //Validation成功時の遷移先
  $("input.validate").click(function() {
      if($("#registrationForm").valid() == true){
          //location.href = "confirm.html"
      }
      return false;
  });

  $('#radioBtn a').on('click', function(){
    var sel = $(this).data('title');
    var tog = $(this).data('toggle');
    $('#'+tog).prop('value', sel);

    $('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
    $('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
  });

  // プロジェクト計画期間　開始
  $('#datetimepicker1').datepicker({
    format:'yyyy/mm/dd',
    language:'ja',
    autoclose:'true'
  });
  // プロジェクト計画期間　終了
  $('#datetimepicker2').datepicker({
    format:'yyyy/mm/dd',
    language:'ja',
    autoclose:'true'
  });


  //$('#datetimepicker2').datepicker();
});

/**
 * send
 *
*/

function sendForm(){



}

function validate(){



}