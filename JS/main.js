window.onload = function () {
   //ищем элемент по селектору
   var Products__link = document.querySelector('#Products__link');
   var rooms__link = document.querySelector('#rooms__link');
   //вешаем на него события
   Products__link.onmouseout = function(e) {
     document.getElementById('Products__link__open').style.display='none';
   }
   rooms__link.onmouseout = function(e) {
      document.getElementById('rooms__link__open').style.display='none';
    }
 
   Products__link.onmouseover = function(e) {
     document.getElementById('Products__link__open').style.display='block';
   };
   rooms__link.onmouseover = function(e) {
      document.getElementById('rooms__link__open').style.display='block';
    };
 }
 