$(function () {


  /* main_visual alphabet */
  const $alphabets = $(".alphabet_all img"); // 모든 알파벳 요소를 선택합니다.

  $(window).on("scroll", function () {
    const scrollTop = $(this).scrollTop(); // 현재 스크롤 위치
    const windowHeight = $(this).height(); // 브라우저 창 높이

    $alphabets.each(function (index) {
      const $alpha = $(this);
      const offsetTop = $alpha.offset().top; // 알파벳 위치
      const delay = index * 50; // 알파벳마다 약간의 딜레이 추가 (밀려드는 효과)

      if (scrollTop + windowHeight > offsetTop) {
        setTimeout(() => {
          $alpha.css({
            opacity: 1,
            transform: "translateY(0px) scale(1)"
          });
        }, delay);
      }
    });
  });


  // fade-in 스크롤 이벤트
  $(window).on('scroll', function () {
    $('.fade-in').each(function () {
      var elementOffset = $(this).offset().top;
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();

      // 화면에 요소가 들어오면 visible 클래스 추가
      if (scrollTop + windowHeight > elementOffset + 50) {
        $(this).addClass('visible');
      }
    });
  });


  /* move-in 스크롤 이벤트 */
  $('.move-in').each(function (index) {
    var element = $(this);
    setTimeout(function () {
      element.addClass('visible'); // visible 클래스 추가
    }, index * 300); // 각 이미지마다 300ms 딜레이
  });

  /* who i am 옆 line 생성 모션  */
  $(window).on('scroll', function () {
    var elementOffset = $('.who_line').offset().top;
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();

    // 라인이 화면에 보일 때 애니메이션 트리거
    if (scrollTop + windowHeight > elementOffset + 50) {
      $('.line').addClass('active');
    }
  });

  /* skills 띠 좌우 모션 */
  $('.txt_anibox .skills_index').simplyScroll({
    speed: 4,
    direction: 'backwards',
    pauseOnHover: true,
    pauseOnTouch: false,
  });
  $('.txt_anibox .skills_tit').simplyScroll({
    speed: 4,
    direction: 'forwards',
    pauseOnHover: true,
    pauseOnTouch: false,
    // clone:false,
  });

  /* Projects lin2 -스크롤 */
  $(window).on("scroll", function () {
    var line2 = $(".projects_all .line2"); // line2 요소 선택
    var lineOffset = $(".projects_all").offset().top; // projects_all 섹션의 위치
    var scrollTop = $(window).scrollTop(); // 현재 스크롤 위치
    var windowHeight = $(window).height(); // 브라우저 창 높이
    var maxHeight = $(".projects_all").height(); // projects_all 섹션의 높이

    // 스크롤 비율 계산
    if (scrollTop + windowHeight > lineOffset && scrollTop < lineOffset + maxHeight) {
      var progress = (scrollTop + windowHeight - lineOffset) / (maxHeight + windowHeight);
      var lineHeight = Math.min(progress * maxHeight, maxHeight); // 최대 높이 제한
      line2.css("height", lineHeight + "px");
    } else if (scrollTop + windowHeight <= lineOffset) {
      // 초기 상태로 복귀
      line2.css("height", "0");
    }
  });



  /* projects 스크롤 넘버  */
  $(window).on("scroll", function () {
    var windowHeight = $(window).height(); // 브라우저 창 높이
    var scrollTop = $(window).scrollTop(); // 현재 스크롤 위치

    $(".project_item").each(function () {
      var itemOffset = $(this).offset().top; // 해당 article의 위치
      var triggerPoint = itemOffset - windowHeight + 100; // 트리거 포인트 설정

      if (scrollTop > triggerPoint) {
        $(this).addClass("visible"); // visible 클래스 추가
      }
    });
  });

  $(".project_item").hover(
    function () {
      $(this).find("h3, p, span,ul.p_sub, ul.p_sub li").css("color", "#7F9A9C");
    },
    function () {
      $(this).find("h3, p, span,ul.p_sub, ul.p_sub li").css("color", ""); // 원래 색상으로 복구
    }
  );



  /* Previous works 부분 슬라이드 */
  let thumbSwiper = new Swiper(".thumbSwiper", {
    loop: true,
    spaceBetween: 50,
    slidesPerView: 4,
    loopAdditionalSlides: 1,     // 추가 슬라이드 클론 수
    //cssMode: true,           // CSS 기반 스크롤 활성화
    freeMode: true,          // 자유로운 스크롤 모드
    freeModeMomentum: true,  // 관성 효과 추가
    speed: 800,              // 슬라이드 전환 속도 (ms 단위)
    freeModeMomentumRatio: 0.3, // 관성 속도 감소율 (0에 가까울수록 빠르게 멈춤)
    autoplay: {
      delay: 1000,
      // disableOnInteraction: false,
    },
  });
  // swiper2 초기화 여부를 추적할 변수
  let swiper2Initialized = false;
  let swiper2 = new Swiper(".main_swiper", {
    loop: false,
    thumbs: {
      swiper: thumbSwiper,
    },
  });


  $(".thumbSwiper .swiper-slide").click(function () {
    if (!swiper2Initialized) {
      $('.main_swiper').addClass('swiper');
      swiper2Initialized = true;
      $('.light_prev').attr('src', 'img/light_next.svg')
      thumbSwiper.autoplay.delay = 500;
    }
  });



  $(".thumbSwiper .swiper-slide").click(function () {
    if (!swiper2Initialized) {
      $('.main_swiper').addClass('swiper');
      swiper2Initialized = true;
      $('.light_prev').attr('src', 'img/light_next.svg')
      thumbSwiper.autoplay.delay = 500;
    }
  });



  // 스크롤 이벤트 : 배경색이 채워지면서 글씨 나타나기
  $(window).on("scroll", function () {
    const scrollTop = $(window).scrollTop();
    const sectionOffset = $(".en_comment").offset().top;
    const windowHeight = $(window).height();

    if (scrollTop + windowHeight > sectionOffset + 100) {
      $(".en_comment").addClass("scroll-active");
    }
  });

});