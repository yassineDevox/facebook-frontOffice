// header shared js 
$(function () {

    $(".search-btn").click(function () {
        $(this).addClass("hide-search");
    })
    $(".gap.gray-bg").click(function () {
        $(".search-btn").removeClass("hide-search");
    })

})