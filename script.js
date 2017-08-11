$(function () {
    "use strict";
    
    var carouselList = $("#carousel ul"),
        intervalId;
         
    intervalId = setInterval(changeRightSlide, 3000);
    
    var liWidth = $(".imgSlider");
    
    console.log(liWidth.width);
    
    function changeRightSlide() {
        carouselList.animate({marginLeft: -1700}, 700, moveFirstSlide);
    }
    function changeLeftSlide() {
        moveLastSlide();
        carouselList.animate({
            marginLeft: 0
        }, 700);
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
        carouselList.css({marginLeft: -1700});
    }
    
    var stopSlice = $("#carousel");
    
    $(stopSlice).mouseover(function () {
        clearInterval(intervalId);
    });
    
    $(stopSlice).mouseout(function () {
        intervalId = setInterval(changeRightSlide, 3000);
    });
    
    var rArrowClick = $("#right");
    var lArrowClick = $("#left");
    
    $(rArrowClick).click(function () {
        changeRightSlide();
    });
    
    $(lArrowClick).click(function () {
        changeLeftSlide();
    });
});