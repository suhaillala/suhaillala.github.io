jQuery(document).ready(function ($) {
  $(".dnxte_logo_carousel_child").addClass("swiper-slide");
  $(".dnxte_logo_carousel_child .et_pb_module_inner").addClass(
    "dnext-logo-carosuel-item"
  );
  $(".dnxte_coverflowslider_child").addClass("swiper-slide");
  $(".dnxte_coverflowslider_child .et_pb_module_inner").addClass(
    "dnxte-coverflowslider-item"
  );

  $(".dnxte_3dcubeslider_child").addClass("swiper-slide");
  $(".dnxte_3dcubeslider_child .et_pb_module_inner").addClass(
    "dnxte-3dcubeslider-item"
  );

  $(".dnxte_thumbs_gallery_child").addClass("swiper-slide");
  $(".dnxte_thumbs_gallery_child .et_pb_module_inner").addClass(
    "next-thumbs-gallery-item"
  );

  $(".dnxte_testimonial_child").addClass("swiper-slide");
  $(".dnxte_testimonial_child .et_pb_module_inner").addClass(
    "dnxte-tstimonial-item"
  );

  (function ($) {
    "use strict";
    /*============================= Swiper Slider =================================*/
    $(".dnext-logo-carosuel-active").each(function (e) {
      const logoData = $(this).data();
      const carouselBreakpoint =
        logoData.breakpoints && logoData.breakpoints.split("|");

      // console.log(typeof logoData.breakpoints);

      const logoSwiper = new Swiper(this, {
        direction: logoData.direction,
        speed: logoData.speed ? parseInt(logoData.speed) : 400,
        spaceBetween: parseInt(logoData.spacing),
        grabCursor: "on" === logoData.grab,
        preventClicksPropagation: true,
        autoplay: {
          enabled: 1 === logoData.autoplay,
          delay: logoData.delay ? parseInt(logoData.delay) : 0,
          disableOnInteraction: !1
        },
        slidesPerView: carouselBreakpoint && parseInt(carouselBreakpoint[0]),
        centeredSlides: "on" === logoData.center,
        loop: "on" === logoData.loop,
        breakpoints: {
          1024: {
            slidesPerView: carouselBreakpoint && parseInt(carouselBreakpoint[0])
          },
          768: {
            slidesPerView: carouselBreakpoint && parseInt(carouselBreakpoint[1])
          },
          479: {
            slidesPerView: carouselBreakpoint && parseInt(carouselBreakpoint[2])
          },
          200: {
            slidesPerView: carouselBreakpoint && parseInt(carouselBreakpoint[2])
          }
        },
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: "on" === logoData.paginationBullets,
          clickable: true,
          type: logoData.paginationType
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false
        },
        mousewheel: {
          invert: true
        },
        navigation: {
          nextEl: $(this).siblings(".swiper-button-next")[0],
          prevEl: $(this).siblings(".swiper-button-prev")[0]
        }
      });

      if (1 === logoData.autoplay && logoData.pauseonhover === 1) {
        $(this).mouseenter(function () {
          logoSwiper.autoplay.stop();
        });
        $(this).mouseleave(function () {
          logoSwiper.autoplay.start();
        });
      }
    });

    $(".dnxte-coverflowslider-active").each(function (e) {
      const coverflow = $(this).data();
      const coverflowBreakpoint =
        coverflow.breakpoints && coverflow.breakpoints.split("|");

      const coverflowSwiper = new Swiper(this, {
        direction: coverflow.direction,
        autoHeight: "on" === coverflow.autoheight,
        speed: coverflow.speed ? parseInt(coverflow.speed) : 400,
        spaceBetween: parseInt(coverflow.spacing),
        grabCursor: "on" === coverflow.grab,
        preventClicksPropagation: true,
        centeredSlides: 1 === coverflow.center,
        autoplay: {
          enabled: 1 === coverflow.autoplay,
          delay: coverflow.delay ? parseInt(coverflow.delay) : 0,
          disableOnInteraction: !1
        },
        effect: "coverflow",
        coverflowEffect: {
          slideShadows: "on" === coverflow.covershadow,
          rotate: +coverflow.coverrotate,
          stretch: +coverflow.coverstretch,
          depth: +coverflow.coverdepth
        },
        slidesPerView: coverflowBreakpoint && parseInt(coverflowBreakpoint[0]),
        centeredSlides: 1 === coverflow.center,
        loop: "on" === coverflow.loop,
        breakpoints: {
          1024: {
            slidesPerView:
              coverflowBreakpoint && parseInt(coverflowBreakpoint[0])
          },
          768: {
            slidesPerView:
              coverflowBreakpoint && parseInt(coverflowBreakpoint[1])
          },
          479: {
            slidesPerView:
              coverflowBreakpoint && parseInt(coverflowBreakpoint[2])
          },
          200: {
            slidesPerView:
              coverflowBreakpoint && parseInt(coverflowBreakpoint[2])
          }
        },
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: "on" === coverflow.paginationBullets,
          clickable: true,
          type: coverflow.paginationType
        },
        keyboard: {
          enabled: "on" === coverflow.keyboardenable,
          onlyInViewport: false
        },
        mousewheel: {
          invert: true
        },
        navigation: {
          nextEl: $(this).siblings(".swiper-button-next")[0],
          prevEl: $(this).siblings(".swiper-button-prev")[0]
        }
      });

      if (1 === coverflow.autoplay && coverflow.pauseonhover === 1) {
        $(this).mouseenter(function () {
          coverflowSwiper.autoplay.stop();
        });
        $(this).mouseleave(function () {
          coverflowSwiper.autoplay.start();
        });
      }
    });

    $(".dnxte-3dcubeslider-active").each(function () {
      const cubeslider3d = $(this).data();
      var cubeslider = new Swiper(this, {
        autoHeight: false,
        speed: cubeslider3d.speed ? parseInt(cubeslider3d.speed) : 400,
        direction: cubeslider3d.direction,
        grabCursor: "on" === cubeslider3d.grab,
        loop: "on" === cubeslider3d.loop,
        effect: "cube",
        cubeEffect: {
          slideShadows: 1 === cubeslider3d.slideshadows,
          shadow: 1 === cubeslider3d.shadow,
          shadowOffset:
            1 === cubeslider3d.shadow ? parseInt(cubeslider3d.shadowoffset) : 0,
          shadowScale:
            1 === cubeslider3d.shadow ? parseFloat(cubeslider3d.shadowscale) : 0
        },
        autoplay: {
          enabled: 1 === cubeslider3d.autoplay,
          delay: cubeslider3d.delay ? parseInt(cubeslider3d.delay) : 0,
          disableOnInteraction: !1
        },
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: "on" === cubeslider3d.paginationBullets,
          clickable: true,
          type: cubeslider3d.paginationType
        },
        keyboard: {
          enabled: 1 === cubeslider3d.keyboardenable,
          onlyInViewport: false
        },
        mousewheel: {
          invert: true
        },
        navigation: {
          nextEl: $(this).siblings(".swiper-button-next")[0],
          prevEl: $(this).siblings(".swiper-button-prev")[0]
        }
      });

      if (1 === cubeslider3d.autoplay && cubeslider3d.pauseonhover === 1) {
        $(this).mouseenter(function () {
          cubeslider.autoplay.stop();
        });
        $(this).mouseleave(function () {
          cubeslider.autoplay.start();
        });
      }
    });
    var thumbsBottomSwiper;
    $(".dnext-thumbs-gallery-bottom").each(function (e) {
      const thumbsBottomData = $(this).data();
      const thumbsBottomBreakpoint =
        thumbsBottomData.breakpoints && thumbsBottomData.breakpoints.split("|");

      thumbsBottomSwiper = new Swiper(this, {
        direction: thumbsBottomData.direction,
        speed: thumbsBottomData.speed ? parseInt(thumbsBottomData.speed) : 400,
        spaceBetween: parseInt(thumbsBottomData.spacing),
        grabCursor: "on" === thumbsBottomData.grab,
        preventClicksPropagation: true,
        autoplay: {
          enabled: 1 === thumbsBottomData.autoplay,
          delay: thumbsBottomData.delay ? parseInt(thumbsBottomData.delay) : 0,
          disableOnInteraction: !1
        },
        slidesPerView:
          thumbsBottomBreakpoint && parseInt(thumbsBottomBreakpoint[0]),
        centeredSlides: "on" === thumbsBottomData.center,
        loop: "on" === thumbsBottomData.loop,
        breakpoints: {
          1024: {
            slidesPerView:
              thumbsBottomBreakpoint && parseInt(thumbsBottomBreakpoint[0])
          },
          768: {
            slidesPerView:
              thumbsBottomBreakpoint && parseInt(thumbsBottomBreakpoint[1])
          },
          479: {
            slidesPerView:
              thumbsBottomBreakpoint && parseInt(thumbsBottomBreakpoint[2])
          },
          200: {
            slidesPerView:
              thumbsBottomBreakpoint && parseInt(thumbsBottomBreakpoint[2])
          }
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false
        },
        mousewheel: {
          invert: true
        }
      });

      if (
        1 === thumbsBottomData.autoplay &&
        thumbsBottomData.pauseonhover === 1
      ) {
        $(this).mouseenter(function () {
          thumbsBottomSwiper.autoplay.stop();
        });
        $(this).mouseleave(function () {
          thumbsBottomSwiper.autoplay.start();
        });
      }
    });

    $(".dnext-thumbs-gallery-top").each(function (e) {
      const thumbsData = $(this).data();
      const thumbsBreakpoint =
        thumbsData.breakpoints && thumbsData.breakpoints.split("|");
      const thumbsSwiper = new Swiper(this, {
        direction: thumbsData.direction,
        speed: thumbsData.speed ? parseInt(thumbsData.speed) : 400,
        spaceBetween: parseInt(thumbsData.spacing),
        grabCursor: "on" === thumbsData.grab,
        preventClicksPropagation: true,
        autoplay: {
          enabled: 1 === thumbsData.autoplay,
          delay: thumbsData.delay ? parseInt(thumbsData.delay) : 0,
          disableOnInteraction: !1
        },
        slidesPerView: thumbsBreakpoint && parseInt(thumbsBreakpoint[0]),
        centeredSlides: "on" === thumbsData.center,
        loop: "on" === thumbsData.loop,
        breakpoints: {
          1024: {
            slidesPerView: thumbsBreakpoint && parseInt(thumbsBreakpoint[0])
          },
          768: {
            slidesPerView: thumbsBreakpoint && parseInt(thumbsBreakpoint[1])
          },
          479: {
            slidesPerView: thumbsBreakpoint && parseInt(thumbsBreakpoint[2])
          },
          200: {
            slidesPerView: thumbsBreakpoint && parseInt(thumbsBreakpoint[2])
          }
        },
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: "on" === thumbsData.paginationBullets,
          clickable: true,
          type: thumbsData.paginationType
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false
        },
        mousewheel: {
          invert: true
        },
        navigation: {
          nextEl: $(this).siblings(".swiper-button-next")[0],
          prevEl: $(this).siblings(".swiper-button-prev")[0]
        },
        thumbs: {
          swiper: thumbsBottomSwiper
        }
      });

      if (1 === thumbsData.autoplay && thumbsData.pauseonhover === 1) {
        $(this).mouseenter(function () {
          thumbsSwiper.autoplay.stop();
        });
        $(this).mouseleave(function () {
          thumbsSwiper.autoplay.start();
        });
      }
    });

    $(".dnxte-tstimonial-wrap").each(function (e) {
      const testimonialData = $(this).data();
      const testimonialBreakpoints =
        testimonialData.breakpoints && testimonialData.breakpoints.split("|");
      const testimonialSwiper = new Swiper(this, {
        autoplay: {
          enabled: 1 === testimonialData.autoplay,
          delay: testimonialData.delay ? parseInt(testimonialData.delay) : 0,
          disableOnInteraction: !1
        },
        slidesPerView:
          testimonialBreakpoints && parseInt(testimonialBreakpoints[0]),
        centeredSlides: "on" === testimonialData.center,
        spaceBetween: parseInt(testimonialData.spacing),
        direction: testimonialData.direction,
        speed: testimonialData.speed ? parseInt(testimonialData.speed) : 400,
        grabCursor: "on" === testimonialData.grab,
        loop: "on" === testimonialData.loop,
        breakpoints: {
          1024: {
            slidesPerView:
              testimonialBreakpoints && parseInt(testimonialBreakpoints[0])
          },
          768: {
            slidesPerView:
              testimonialBreakpoints && parseInt(testimonialBreakpoints[1])
          },
          479: {
            slidesPerView:
              testimonialBreakpoints && parseInt(testimonialBreakpoints[2])
          },
          200: {
            slidesPerView:
              testimonialBreakpoints && parseInt(testimonialBreakpoints[2])
          }
        },
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: "on" === testimonialData.paginationBullets,
          clickable: true,
          type: testimonialData.paginationType
        },
        navigation: {
          nextEl: $(this).siblings(".swiper-button-next")[0],
          prevEl: $(this).siblings(".swiper-button-prev")[0]
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false
        },
        mousewheel: {
          invert: true
        }
      });

      if (
        1 === testimonialData.autoplay &&
        testimonialData.pauseonhover === 1
      ) {
        $(this).mouseenter(function () {
          testimonialSwiper.autoplay.stop();
        });
        $(this).mouseleave(function () {
          testimonialSwiper.autoplay.start();
        });
      }
    });
  })(jQuery);
});
