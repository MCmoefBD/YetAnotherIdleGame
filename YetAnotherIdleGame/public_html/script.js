
var clicks = 0;
var amount = 1;
var price1 = 10;
var CS =0;
var DS =0;
var AP =0;
var price2 = 1000;
var price3 = 80000;
var PerSec = 0;
var pricem = 5;

$(document).ready(function(){
    $(".Shop").hide();
var Tick = setInterval(function() {clicks= clicks+PerSec; refresh();},1000);
var RefreshShop = setInterval(function() {refreshShop();},10);

    $('.Manual').click(function(){
        clicks=clicks+amount;
        refresh();
    });
    
    $('.BuyBoost').click(function(){
        if(checkIf(clicks,price)){
            clicks-=price;
            price=price+150;
            amount=amount*2;
            refresh();
        }
    });
    
    //Tab Switcher
    $('.Menu1').click(function(){
    $('.Menu1').addClass("active");
    $('.Menu2').removeClass("active");
    $(".Shop").show();
    $(".Invests").hide();
    }); 
    
    $('.Menu2').click(function(){
    $('.Menu2').addClass("active");
    $('.Menu1').removeClass("active");
    $(".Invests").show();
    $(".Shop").hide();
    }); 
    $('.b1').click(function(){
       if(checkIf(clicks,price1)){
        clicks-=price1;
        price1=Math.floor(price1*0.2+price1);
        PerSec+=1;
        CS+=1;
        $(".i1").text("Coffee shop : " + CS);
       }
    });
    $('.b2').click(function(){
       if(checkIf(clicks,price2)){
        clicks-=price2;
        price2=Math.floor(price2*0.2+price2);
        PerSec+=10;
        DS+=1;
        $(".i2").text("Department Store : " + DS);
       }
    });
    $('.b3').click(function(){
       if(checkIf(clicks,price3)){
        clicks-=price3;
        price3=Math.floor(price3*0.2+price3);
        PerSec+=1;
        AS+=1;
        $(".i3").text("Amusement Park : " + CS);
       }
    });
    $('.b').click(function(){
       if(checkIf(clicks,pricem)){
        clicks-=pricem;
        pricem=pricem*2;
        amount+=1;
        $(".Man").text("PerClick : " + amount);
       }
    });
});

 var checkIf = function(a,b){
        if(a===b||a>b){
            return true;
        }
        else{
            return false;
        }
    };
var refresh = function(){
  $('.i4').text('Cash: '+clicks+ "    Per Second: "+PerSec);
};
var refreshShop = function(){
    $('.pr1').text('Price: '+price1);
    $('.pr2').text('Price: '+price2);
    $('.pr3').text('Price: '+price3);
    $('.pr').text('Price: '+pricem);
};

var Save = function(){
    $.cookie('clicks', clicks, { expires: 7 });
    $.cookie('amount', amount, { expires: 7 });
    $.cookie('price', price, { expires: 7 });
};

var Load = function(){
    price = $.cookie('price');
    amount= $.cookie('amount');
    clicks= $.cookie('clicks');
};
