(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-63172716-1', 'auto');
ga('send', 'pageview');

var global_Config_EnableDisplayOptionProducts = 'False';
var global_Config_ForceSecureShoppingCartPage = true;
var global_PageText_OtherItemsAdded = '(All other items have been added to the cart)';
var Config_EnableSoftAddToCart = true;
var Config_VCompare_MaxProducts = '5';
var PageText_783 = "Compare"; 
var PageText_784 = "Change Selections";
var PageText_785 = "You've attempted to select more than{0}items. Click{1}to continue with your initial{0}items or{2}to change your selections.";
var PageText_819 = "Product Comparison";
var PageText_822 = "Compare";
var PageText_840 = "Create Password";
var PageText_841 = "Retype Password";
var PageText_842 = "Added to cart";
var PageText_843 = "Subtotal";
var PageText_844 = "items in cart";

(function($) {
volusion.ready(function() {
  if (volusion.cart.isObservingCount()) {
    var ts = new Date().getTime();
    $.getJSON('/ajaxcart.asp?cachebust=' + ts, function(data) {
      var quantityTotal = 0;
      $.each(data.Products, function(key, val) {
        if (val.IsProduct === 'Y') {
          quantityTotal += parseInt(val.Quantity);
        } else if (val.IsAccessory === 'Y') {
          quantityTotal += parseInt(val.Quantity);
        }
      });
      quantityTotal = quantityTotal || '0';
      volusion.cart.itemCount(quantityTotal);
    });
  }
});
}(jQuery));

//
//
//var Config_Search_Auto_Complete = false;
//function store_init(event) {}
//AttachEvent(window, 'load', store_init);
//if (!/\/shoppingcart\.asp/i.test(window.location.pathname)) {
//  jQuery(document).ready(function() {
//    jQuery('a').each(AddCartLink)
//  });
//}


//disable link popup move page in FAQ



//header cart summary 
function updateHeaderCartSummary(){var c;var b;var a;c=document.getElementById("view_cart_text_right");if(c==null){return}b=getShoppingCartItems();total=getShoppingCartTotal();if(isShoppingCartEmpty()){a="0 Items: $0.00"}else{if(b==null||total==null){return}else{if(b==0){a="0 Items: $0.00"}else{a=b+" Item";if(b>1){a=a+"s"}a=a+": "+total}}}c.innerHTML=a};


//remvoe products by page
if(document.URL.indexOf("124.htm")>=0){var LowV=document.getElementsByTagName("td")[20];LowV.style.display="none"==LowV.style.display?"block":"none"}if(document.URL.indexOf("545.htm")>=0){var ERICOLowV=document.getElementsByTagName("td")[20];ERICOLowV.style.display="none"==ERICOLowV.style.display?"block":"none"}if(document.URL.indexOf("274.htm")>=0){var Powersemi=document.getElementsByTagName("td")[20];Powersemi.style.display="none"==Powersemi.style.display?"block":"none"}if(document.URL.indexOf("550.htm")>=0){var ABBpowersemi=document.getElementsByTagName("td")[20];ABBpowersemi.style.display="none"==ABBpowersemi.style.display?"block":"none"}if(document.URL.indexOf("555.htm")>=0){var IXYSpowersemi=document.getElementsByTagName("td")[20];IXYSpowersemi.style.display="none"==IXYSpowersemi.style.display?"block":"none"}if(document.URL.indexOf("554.htm")>=0){var SEMIKpowersemi=document.getElementsByTagName("td")[20];SEMIKpowersemi.style.display="none"==SEMIKpowersemi.style.display?"block":"none"}if(document.URL.indexOf("125.htm")>=0){var Clamps=document.getElementsByTagName("td")[20];Clamps.style.display="none"==Clamps.style.display?"block":"none"}if(document.URL.indexOf("556.htm")>=0){var IXYSClamps=document.getElementsByTagName("td")[20];IXYSClamps.style.display="none"==IXYSClamps.style.display?"block":"none"}if(document.URL.indexOf("227.htm")>=0){var ICClamps=document.getElementsByTagName("td")[20];ICClamps.style.display="none"==ICClamps.style.display?"block":"none"}if(document.URL.indexOf("126.htm")>=0){var Capacitors=document.getElementsByTagName("td")[20];Capacitors.style.display="none"==Capacitors.style.display?"block":"none"}if(document.URL.indexOf("557.htm")>=0){var DUCATICapacitors=document.getElementsByTagName("td")[20];DUCATICapacitors.style.display="none"==DUCATICapacitors.style.display?"block":"none"}if(document.URL.indexOf("127.htm")>=0){var Heatsink=document.getElementsByTagName("td")[20];Heatsink.style.display="none"==Heatsink.style.display?"block":"none"}if(document.URL.indexOf("513.htm")>=0){var ICHeatsink=document.getElementsByTagName("td")[20];ICHeatsink.style.display="none"==ICHeatsink.style.display?"block":"none"}if(document.URL.indexOf("594.htm")>=0){var Sensors=document.getElementsByTagName("td")[20];Sensors.style.display="none"==Sensors.style.display?"block":"none"}if(document.URL.indexOf("589.htm")>=0){var LEMSensors=document.getElementsByTagName("td")[20];LEMSensors.style.display="none"==LEMSensors.style.display?"block":"none"}if(document.URL.indexOf("548.htm")>=0){var ABB=document.getElementsByTagName("td")[20];ABB.style.display="none"==ABB.style.display?"block":"none"}if(document.URL.indexOf("107.htm")>=0){var Ducati=document.getElementsByTagName("td")[20];Ducati.style.display="none"==Ducati.style.display?"block":"none"}if(document.URL.indexOf("108.htm")>=0){var Erico=document.getElementsByTagName("td")[20];Erico.style.display="none"==Erico.style.display?"block":"none"}if(document.URL.indexOf("590.htm")>=0){var Erico=document.getElementsByTagName("td")[20];Lem.style.display="none"==Lem.style.display?"block":"none"}if(document.URL.indexOf("226.htm")>=0){var Iconopower=document.getElementsByTagName("td")[20];Iconopower.style.display="none"==Iconopower.style.display?"block":"none"}if(document.URL.indexOf("232.htm")>=0){var Ixys=document.getElementsByTagName("td")[20];Ixys.style.display="none"==Ixys.style.display?"block":"none"}if(document.URL.indexOf("233.htm")>=0){var Semikron=document.getElementsByTagName("td")[20];Semikron.style.display="none"==Semikron.style.display?"block":"none"}
