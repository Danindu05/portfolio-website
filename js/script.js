$(document).ready(function () {

    // Menu toggle for mobile nav
    $('#menu').click(function () {
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
    });
  
    // Scroll functionality
    $(window).on('scroll load', function () {
      $('#menu').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');
  
      if (window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active');
      } else {
        document.querySelector('#scroll-top').classList.remove('active');
      }
  
      // Active link highlight
      $('section').each(function () {
        let height = $(this).height();
        let offset = $(this).offset().top - 200;
        let top = $(window).scrollTop();
        let id = $(this).attr('id');
  
        if (top > offset && top < offset + height) {
          $('.navbar ul li a').removeClass('active');
          $('.navbar').find(`[href="#${id}"]`).addClass('active');
        }
      });
    });
  
    // Smooth scroll
    $('a[href*="#"]').on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top,
      }, 500, 'linear')
    });
  
    // EmailJS integration
    $("#contact-form").submit(function (event) {
      emailjs.init("YOUR_USER_ID_HERE");
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', '#contact-form')
        .then(function (response) {
          console.log('SUCCESS!', response.status, response.text);
          document.getElementById("contact-form").reset();
          alert("Form Submitted Successfully");
        }, function (error) {
          console.log('FAILED...', error);
          alert("Form Submission Failed! Try Again");
        });
      event.preventDefault();
    });
  });
  
 
  
  // Typed.js effect
  var typed = new Typed(".typing-text", {
    strings: ["frontend development", "backend development", "web designing", "web development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
  });
  
  // ScrollReveal animations
  const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
  });
  
  srtop.reveal('.home .content h2', { delay: 200 });
  srtop.reveal('.home .content p', { delay: 200 });
  srtop.reveal('.home .content .btn', { delay: 200 });
  srtop.reveal('.home .image', { delay: 400 });
  srtop.reveal('.social-icons li', { interval: 200 });
  srtop.reveal('.about .content h3, .about .content .tag, .about .content p, .about .content .box-container, .about .content .resumebtn', { delay: 200 });
  srtop.reveal('.skills .container, .skills .container .bar', { interval: 200 });
  srtop.reveal('.education .box, .work .box, .experience .timeline .container, .contact .container', { interval: 200 });
  
  // Developer tools block
  
  document.onkeydown = function (e) {
    if (e.keyCode == 123 ||
      (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(String.fromCharCode(e.keyCode))) ||
      (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))) {
      return false;
    }
  };  