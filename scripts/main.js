const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

// Change Nav Color //

$(document).ready(function () {
  var scroll_start = 0;
  var startchange = $(".hero");
  var offset = startchange.offset();
  if (startchange.length) {
    $(document).scroll(function () {
      scroll_start = $(this).scrollTop();
      if (scroll_start > offset.top) {
        // $(".nav").css("background-color", "#000");
        $(".nav").css("border-bottom", "2px solid rgb(51,84,172)");
      } else {
        // $(".nav").css("background-color", "transparent");
        $(".nav").css("border-bottom", "2px solid rgb(51,84,172)");
      }
    });
  }
});
