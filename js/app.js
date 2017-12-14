$(".intro").hide();
//luoyan
$(".show").each(function() {
	$(this).find(".item").eq(0).show().siblings().hide();
})
$(".lyqie ul li").on("click", function() {
	$(this).addClass("active").siblings().removeClass("active");
	var index = $(this).index();
	$(this).parent().parent().find(".show .item").eq(index).show().siblings().hide();
})

//電視
$(".showimg img").eq(0).show().siblings().hide();
$(".dp ul li").on("click", function() {
	$(this).addClass("active").siblings().removeClass("active");
	var index = $(this).index();
	$(this).parent().parent().parent().find(".showimg img").eq(index).show().siblings().hide();
})

function pageScroll() {
	alert("123")
	window.scrollBy(0, -100);
	scrolldelay = setTimeout('pageScroll()', 20);
	var sTop = document.documentElement.scrollTop + document.body.scrollTop;
	if(sTop == 0) clearTimeout(scrolldelay);
}
$(".totop img").on('click', function() {
	$(".content").animate({
		scrollTop: 0
	}, 1000);
	return;
});
$.init();
var s = new Swiper(".swiper-container", {
	autoplay: 1000,
	pagination: ".swiper-pagination",
	loop: true,
	paginationClickable: true,
	nextButton: ".swiper-button-next",
	prevButton: ".swiper-button-prev",
	autoplayDisableOnInteraction: false,
})
$(".swiper-container").hide();
s.stopAutoplay();
//切换
$(".btn1").on("click", function() {
	$(".swiper-container").show();
	s.startAutoplay();
	$(".intro").hide();
	$("video")[0].pause();
})
$(".btn2").on("click", function() {
	s.stopAutoplay();
	$(".swiper-container").hide();
	$(".intro").show();
	$("video")[0].play();
});

//关闭
$(".close").on("click", function() {
	$(this).parent().hide();
	s.stopAutoplay();
})
$(".closev").on("click", function() {
	$(this).parent().hide();
	$("video")[0].pause();
})