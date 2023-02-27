new WOW().init();


$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {

          items: 5,
         
          responsiveClass:true,
          responsive:{
              0:{
                  items:1,
                  nav:true
              },
              500:{
                  items:3,
                  nav:false
              },
              700:{
                  items:2,
                  nav:true,
                  loop:false
              },
              1000:{
                  items:3,
                  nav:true,
                  loop:false
              }
          },
         
       
        },
       
    );
  });




  let homeOffset = $('#Home').offset().top ;
  let aboutOffset = $('#About').offset().top ;
  let teamOffset = $('#Team').offset().top ;
  let servicesOffset = $('#Services').offset().top ;
  let reviewsOffset = $('#Testmonial').offset().top ;
  let contactOffset = $('#Contact').offset().top ;
  $(document).ready(function()
  {
    let wScroll = $(window).scrollTop() ;
if(wScroll > aboutOffset - 80  && wScroll < teamOffset)
{
    $('.progress div').each(function()
  {
      $(this).animate({width : $(this).attr('data-progress')} , 500)
  })
}
  })

  
  $(window).scroll(function(e)
  {
    let wScroll = $(window).scrollTop() ;
    if (wScroll > aboutOffset - 50)
    {
      if($('#p').width() == 0)
      {
      $('.progress div').each(function()
      {
          $(this).animate({width : $(this).attr('data-progress')} , 500)
      })
    }
      $('.navbar').css('background-color' , 'white');
      $('.navbar').css('padding' , '10px 50px');
      $('.nav-link').css('color' , 'black');
      $('.navbar-social a ').css('color' , 'black');
      $('.navbar-brand img').attr('src' , 'images/logo-red.png')
      $('#btnUp').fadeIn(500);
      $('.navbar-toggler i ').css("color" , "black ");

    
    }
    else
    {
      $('.navbar').css('background-color' , 'transparent');
      $('.navbar').css('padding' , '30px');
      $('.nav-link').css('color' , 'white');
      $('.navbar-social a ').css('color' , 'white');
      $('.navbar-brand img').attr('src' , 'images/logo-white.png')
      $('#btnUp').fadeOut(500);
      $('.navbar-toggler i ').css("color" , "white ");
     
     
    }

    if(wScroll > homeOffset-50 && wScroll < aboutOffset -50 )
    {
      $("a[href='#Home']").css('color' , ' #f25454');
    }
    if(wScroll > aboutOffset-50 && wScroll < teamOffset -50 )
    {
      $("a[href='#About']").css('color' , ' #f25454');
    }
 
    if(wScroll > teamOffset-50 && wScroll < servicesOffset -50 )
    {
      $("a[href='#Team']").css('color' , ' #f25454');
    }
  
    if(wScroll > servicesOffset-50 && wScroll < reviewsOffset -50 )
    {
      $("a[href='#Services']").css('color' , ' #f25454');
    }
 
    if(wScroll > reviewsOffset-50 && wScroll < contactOffset -50 )
    {
      $("a[href='#Testmonial']").css('color' , ' #f25454');
    }
   
    if(wScroll > contactOffset-50  )
    {
      $("a[href='#Contact']").css('color' , ' #f25454');
    }
  



 

   
  })

  $('#btnUp').click(function()
  {
    $('html , body').animate({scrollTop:0} , 2000)
  });
$("a[href^='#']").click(function(e)
{
  $(e.target).css('color' , '#f25454');
  $(e.target).parent().siblings().children().css('color' , 'black');
 let sectionHref = ($(e.target).attr('href')) ;
 let sectionOffset = $(sectionHref).offset().top  ;
 
 $('html , body').animate({scrollTop: sectionOffset} , 2000)
  
})



$('#loading .sk-circle ').fadeOut(2000, function()
{
  $('#loading').fadeOut(2000 , function()
  {
    $('#loading').remove();
    $('body').css('overflow-y' , 'auto')
  })
})

















