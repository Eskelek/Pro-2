$(function () {
    "use strict";
    //carousel
    var carouselList = $("#carousel ul"),
        intervalId;
         
    intervalId = setInterval(changeRightSlide, 3000);
    
    function changeRightSlide() {
        carouselList.animate({marginLeft: "-100%"}, 700, moveFirstSlide);
    }
    function changeLeftSlide() {
        moveLastSlide();
        carouselList.animate({marginLeft: 0}, 700);
    }
    
    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft: 0});
    }
    
    function moveLastSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        
        firstItem.before(lastItem);
        carouselList.css({marginLeft: "-100%"});
    }
    
    var stopSlice = $("#carousel");
    
    $(stopSlice).mouseover(function () {
        clearInterval(intervalId);
    });
    
    $(stopSlice).mouseout(function () {
        intervalId = setInterval(changeRightSlide, 3000);
    });
    //carousel button
    var rArrowClick = $("#right");
    var lArrowClick = $("#left");
    
    $(rArrowClick).click(function () {
        changeRightSlide();
    });
    
    $(lArrowClick).click(function () {
        changeLeftSlide();
    });
    
    //menu -500px
    var back = $(".title");
    var sort = $(".sort");
    var show = $(".show");
    
    $(sort).click(function () {
        if ($(".show").is(':visible')) {
            show.slideUp();
            back.slideDown();
        } else {
            show.slideDown();
            back.slideUp();
        }
    });
    
    //mobileSlider
    var pHide = $(".hide");
    var buttonShow = $(".listItem");
    
    console.log(pHide);
    
    $(buttonShow[0]).click(function () {
        if ($(".hide").is(':visible')) {
            pHide.slideUp();
        } else {
            pHide.slideDown();
        }
    });
        
});