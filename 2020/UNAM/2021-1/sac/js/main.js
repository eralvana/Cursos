// --------------efecto menu------------
$(document).ready(function() {
  $('.barras').click(function() {
    $('nav').toggleClass('active');
  });
  if ($(window).width() > 990) {
    var a = 150;
  }
  if ($(window).width() <= 990) {
    var a = 110;
  }
  if ($(window).width() <= 800) {
    var a = 100;
  }
  if ($(window).width() <= 400) {
    var a = 120;
  }

  var Header = $('#Header').offset().top - 70,
    Noticias = $('#Noticias').offset().top - a,
    Descripcion = $('#Descripcion').offset().top - a,
    Historial = $('#Historial').offset().top - a,
    Temario = $('#Temario').offset().top - a,
    Metodologia = $('#Metodologia').offset().top - a,
    Evaluacion = $('#Evaluacion').offset().top - a,
    Bibliografia = $('#Bibliografia').offset().top - a,
    Contacto = $('#Contacto').offset().top - a;


  $(window).scroll(function() {
    if ($(this).scrollTop() >= 0 && $(this).scrollTop() < Descripcion) {
      $('#btn-header').addClass('active');
    } else {
      $('#btn-header').removeClass('active');
    }
    if ($(this).scrollTop() >= Descripcion && $(this).scrollTop() < Temario) {
      $('#btn-descripcion').addClass('active');
    } else {
      $('#btn-descripcion').removeClass('active');
    }
    if ($(this).scrollTop() >= Temario && $(this).scrollTop() < Metodologia) {
      $('#btn-temario').addClass('active');
    } else {
      $('#btn-temario').removeClass('active');
    }
    if ($(this).scrollTop() >= Metodologia && $(this).scrollTop() < Evaluacion) {
      $('#btn-metodologia').addClass('active');
    } else {
      $('#btn-metodologia').removeClass('active');
    }
    if ($(this).scrollTop() >= Evaluacion && $(this).scrollTop() < Bibliografia) {
      $('#btn-evaluacion').addClass('active');
    } else {
      $('#btn-evaluacion').removeClass('active');
    }
    if ($(this).scrollTop() >= Bibliografia && $(this).scrollTop() < Contacto) {
      $('#btn-bibliografia').addClass('active');
    } else {
      $('#btn-bibliografia').removeClass('active');
    }
    if ($(this).scrollTop() >= Contacto && $(this).scrollTop() < Noticias) {
      $('#btn-contacto').addClass('active');
    } else {
      $('#btn-contacto').removeClass('active');
    }
    if ($(this).scrollTop() >= Noticias && $(this).scrollTop() < Historial) {
      $('#btn-noticias').addClass('active');
    } else {
      $('#btn-noticias').removeClass('active');
    }
    if ($(this).scrollTop() >= Historial) {
      $('#btn-historial').addClass('active');
    } else {
      $('#btn-historial').removeClass('active');
    }
  });

  $('#btn-header').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: Header
    }, 1000);
  });
  $('#btn-noticias').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: Noticias + 1
    }, 1000);
  });
  $('#btn-descripcion').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: Descripcion + 1
    }, 1000);
  });
  $('#btn-historial').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: Historial + 1
    }, 1000);

  });
  $('#btn-temario').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: Temario + 1
    }, 1000);

  });
  $('#btn-metodologia').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: Metodologia + 1
    }, 1000);

  });
  $('#btn-evaluacion').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: Evaluacion + 1
    }, 1000);

  });
  $('#btn-bibliografia').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: Bibliografia + 1
    }, 1000);

  });
  $('#btn-contacto').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: Contacto + 1
    }, 1000);

  });
  $('#btn-noticias3').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: Noticias + 1
    }, 1000);
  });
});
