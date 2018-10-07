/// <reference path="typings/globals/jquery/index.d.ts" />

$(document).ready(function() {
  
  $(document).on('click', 'button[name="del"]', function(){
    var checkstr =  confirm('Are you sure you want to delete this?');
    if(checkstr == true){
      $(this).parent().slideUp("slow", function () {
        $(this).remove();
      });
    }else{
    return false;
    }
    });

    $(document).on('click', 'button[name="buy"]', function(){
      var checkstr =  confirm('Are you sure you want to buy this? Eenmaal wanneer u op "OK" drukt, zal dit item uit de lijst verdwijnen.');
      if(checkstr == true){
        $(this).parent().slideUp("slow", function () {
          $(this).remove();
        });
      }else{
      return false;
      }
      });

  $("#btnAppend").click(function() {

    var itemName = $("#itemName").val();
    var itemPrice = $("#itemPrice").val(); 

    if(itemName.length > 0 && itemPrice.length > 0){
    $('<li class= "list-group-item">'
    
    + itemName + '&nbsp'
    + '<span class="badge badge-primary badge-pill">' 
    + '€' + itemPrice + '</span>'
    + '<button class="btn btn-outline-primary float-right col-sm-12 col-md-1 mr-1 my-1"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>'
    + '<button name="del" class="btn btn-outline-danger float-right col-sm-12 col-md-1 mr-1 my-1" data-toggle="modal" data-target="#delModal"><i class="fa fa-trash-o" aria-hidden="true"></i></button>'
    + '</li>')
    
    .hide().appendTo("#list").slideDown("slow");

    $("#itemName").val('');
    $("#itemPrice").val('');

    }

  });

  /*$("#btnRemove").click(function () {
    $("#list li").slideUp("slow", function () {
      $("#list li").remove();
    });
  });*/

  
  
  
});
