var fadeInBlockMobile = function () {
  var tags = $("section");
  var windowScroll = $(window).scrollTop();
  // console.log("windowScroll = " + windowScroll);
  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    var sectionTop = $(tag).position().top;
    var sectionScrollDistance = sectionTop - windowScroll;
    // console.log("section " + i + " sectionTop = " + sectionTop);
    // console.log("section " + i + " sectionScrollDistance = " + sectionScrollDistance);
    if (sectionScrollDistance < 75) {
      // console.log("section " + i + " visible and sectionTop = " + sectionTop);
      $(tag)
        .find(".top")
        .text("sectionTop = " + sectionTop);
      $(tag)
        .find(".bottom")
        .text("sectionScrollDistance = " + sectionScrollDistance);
      $(tag).find(".section-number").text(i);
      $(tag).find(".fadeable").addClass("visible");
    } else {
      // console.log("section not visible");
      $(tag)
        .find(".top")
        .text("sectionTop = " + sectionTop);
      $(tag)
        .find(".bottom")
        .text("sectionScrollDistance = " + sectionScrollDistance);
      $(tag).find(".section-number").text(i);
      $(tag).find(".fadeable").removeClass("visible");
    }
  }
};

var fadeInBlockDesktop = function () {
  var tags = $("section");
  var mainScroll = $(this).scrollTop();
  // console.log("windowScroll = " + windowScroll);
  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    var sectionTop = $(tag).position().top;
    var sectionScrollDistance = sectionTop - mainScroll; // unecessary
    // console.log("section " + i + " sectionTop = " + sectionTop);
    // console.log("section " + i + " sectionScrollDistance = " + sectionScrollDistance);
    if (sectionTop < 75) {
      // console.log("section " + i + " visible and sectionTop = " + sectionTop);
      $(tag)
        .find(".top")
        .text("sectionTop = " + sectionTop);
      $(tag)
        .find(".bottom")
        .text("sectionScrollDistance = " + sectionScrollDistance);
      $(tag).find(".section-number").text(i);
      $(tag).find(".fadeable").addClass("visible");
    } else {
      // console.log("section not visible");
      $(tag)
        .find(".top")
        .text("sectionTop = " + sectionTop);
      $(tag)
        .find(".bottom")
        .text("sectionScrollDistance = " + sectionScrollDistance);
      $(tag).find(".section-number").text(i);
      $(tag).find(".fadeable").removeClass("visible");
    }
  }
};

$(window).on("load resize", function () {
  if ($(this).width() < 768) {
    // console.log("window width < 768");
    fadeInBlockMobile();
    $(this).on("scroll", function () {
      fadeInBlockMobile();
    });
  } else {
    // console.log("window width > 768");
    fadeInBlockDesktop();
    $("main").on("scroll", function () {
      fadeInBlockDesktop();
    });
  }
});
