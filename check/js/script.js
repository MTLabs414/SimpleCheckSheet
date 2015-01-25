/* Write JavaScript here */
$(function () {
  hoge();
  msg();
});

function hoge()
{
  $('#enter_btn').on('click',function(){
	$('#checkdialog').dialog('open');
    alert('message');
  });
}

function hoge()
{
  $('#return_btn').on('click',function(){
    alert('message');
  });
}


$('#checkdialog').dialog({
  autoOpen: false,
  title: '確認',
  closeOnEscape: false,
  modal: true,
  buttons: {
    "OK": function(){
      $(this).dialog('close');
    }
  }
});
