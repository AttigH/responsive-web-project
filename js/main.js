$(document).ready(function () {
    //ripples
    $("#header, .info").ripples({
        dropRadius: 25 ,
        perturbance: 0.6,
    
      });
//magnific gallery
$('.parent-container').magnificPopup({
    delegate: 'a', 
    type: 'image',
    
    gallery:{
        enabled:true
    }
    
  });



});