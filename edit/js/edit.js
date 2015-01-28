/* Write JavaScript here */
$(function () {

  // JSON形式のデータ
  var data =
  {
    koutei:"",                  // 現在の主工程
    pjStart:"",                 // 開始日
    pjEnd:"",                   // 終了日
    gamenNum:0,                 // 計画画面数
    chohyoNum:0,                // 計画帳票数
    bucchiNum:0,                // 計画バッヂ数
    kadouNum:0,                 // 稼働人数
    orderUmu:"",                // オーダー有無
    kadouPTRUmu:0,              // 稼働PTR有無
    shoudanUmu:"",              // 商談有無
    mitsumoriUmu:"",            // 見積もり有無
    ssproUmu:"",                // SSPRO有無
    gyosekiKisaiUmu:"",         // 業績記載有無
    jissekiUmu:"",              // 実績有無
    excelKisaiUmu:"",
    syuseiKakuninUmu:"",
    mgRenrakuUmu:"",
    ssproKaiteiUmu:"",          //
    excelSyuseiUmu:"",          // 業績明細EXCELの修正有無
    keikakuSakuseiUmu:"",       // プロジェクト計画書の作成有無
    qcdSakuseiUmu:"",           // QCD月例報告書作成有無
    kanriKousu:0,               // 現段階管理工数
    nowZangyouAvg:0,            // 当月の平均残業見込み
    nextZangyouAvg:0            // 翌月の平均残業見込み
  };

  // HTMLから値取り出し
　data.koutei = $('#kotei').val();
  data.pjStart = $('#dtPjStartDate').val();
  data.pjEnd = $('#pjEnd').val();
  data.gamenNum = $('#gamenNum').val();
  data.chohyoNum = $('#chohyoNum').val();
  data.bucchiNum = $('#bucchiNum').val();



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

  $('#btn-submit').on('click',function(){
    //Validation成功時の遷移先
    $("input.validate").click(function() {
        if($("#registrationForm").valid() == true){

          localStorage.setItem('input', data);

          location.href =　'../../check/index.html';
            //location.href = "confirm.html"
        }
        return false;
    });
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