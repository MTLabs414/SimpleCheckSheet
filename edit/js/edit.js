$(function () {

  // JSON形式のデータ
  var data =
  {
    koutei:"",
    pjStart:"",
    pjEnd:"",
    gamenNum:0,
    chohyoNum:0,
    bucchiNum:0,
    kadouNum:0,
    orderUmu:"",
    kadouPTRUmu:0,
    shoudanUmu:"",
    mitsumoriUmu:"",
    ssproUmu:"",
    gyosekiKisaiUmu:"",
    jissekiUmu:"",
    excelKisaiUmu:"",
    syuseiKakuninUmu:"",
    mgRenrakuUmu:"",
    ssproKaiteiUmu:"",          //
    excelSyuseiUmu:"",          // 業績明細EXCELの修正有無
    keikakuSakuseiUmu:"",       // プロジェクト計画書の作成有無
    qcdSakuseiUmu:"",           // QCD月例報告書作成有無
    kanriKousu:0,               // 現段階管理工数
    nowZangyouAvg:0,            // 当月の平均残業見込み
    nextZangyouAvg:0,           // 翌月の平均残業見込み


  }

　data.koutei = $('#kotei').val();

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