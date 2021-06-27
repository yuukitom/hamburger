$(document).ready(function(){
  $(".js_navBtn").on("click", function(){
    $(".p-container__right").toggleClass("is-open");
    $("body").toggleClass("is-open");
  });
});