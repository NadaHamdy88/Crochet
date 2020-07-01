$(document).ready(function(){

        // Show Navbar when Click on icon
    $('i.icon').click(function(){
        $('.nav-list').slideToggle()
    });    


     // Show selling when click on button
     $('.home-btn').click(function(){
        $(this).fadeOut(function(){
            $('.selling').fadeIn()
        })
       
    }); 

    
     //products Buttons change bg
    $('.products-menu button').click(function(){
        $(this).addClass('focus_button').siblings().removeClass('focus_button')
    });
    $('.images').mixItUp();

      //popup video in about-video section
      $('.play-btn').magnificPopup({
        type: 'iframe',
        // delegate: 'a'
    }); 

    $('.img-poup').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true,
        }
    });
  
     //Show bag-steps when click on button
     $('.more').click(function(){
        $(this).fadeOut(function(){
            $('.bag-steps').fadeIn()
        })
   });

   //
   var target = location.href.split("=")[1];
   $('#'+ target).trigger("click");
   
});
