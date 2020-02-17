
$(function () {


    var animateBetween = function (start, end, percent) {
        var difference = start - end;
        var output = start - (difference * percent);
        return output;
    };

    $("#circle1").attr("cy", 677.4);
    $("#circle2").attr("cy", 677.4);
    $("#circle3").attr("cy", 677.4);
    $("#circle4").attr("cy", 677.4);

    $("#polyline").attr("points", "194.5,677.7 322.5,677.7 458.5,677.7 593,677.7");

    var synringe = $("#filled_in_bit");


    /*var makeThingStayOnPageAndAnimate = function (selector) {
        $(selector).css("margin-bottom", "1000px");
    };

    makeThingStayOnPageAndAnimate("#graph");
    */


    var animateSyringe = function (percent) {
        //console.log("syringe", percent);
        var potentialHeight = 86.1 * percent;
        if (potentialHeight > 86.1) {
            potentialHeight = 86.1;
        }
        synringe.height(potentialHeight);

        var textPercent = parseInt(83 * percent);

        if (textPercent > 83) {
            textPercent = 83;
        }
        if (textPercent < 30) {
            textPercent = 30;
        }
        $("#percentIncrese").text(textPercent + "%");

        $("#all-syringe-text").css("opacity", percent);
        //console.log("we've gone past the synringe, start animating");
    };

    var animatedGraph = function (percent) {
        percent = percent;

        if (percent > 1) {
            percent = 1;
        }


        var cir1Y = animateBetween(740.1, 740.1, percent);
        var cir2Y = animateBetween(740.1, 666.4, percent);
        var cir3Y = animateBetween(740.1, 492.4, percent);
        var cir4Y = animateBetween(740.1, 263.9, percent);

        $("#circle1").attr("cy", cir1Y);
        $("#circle2").attr("cy", cir2Y);
        $("#circle3").attr("cy", cir3Y);
        $("#circle4").attr("cy", cir4Y);
        //<polyline id="polyline" class="st4" points="194.5,677.7 322.5,603.7 458.5,429.7 593,200.7 	"/>

        $("#polyline").attr("points", "194.5," + cir1Y + " 322.5," + cir2Y + " 458.5," + cir3Y + " 593," + cir4Y);
        $("#graph-text").css("opacity", percent);
    };


    var animatePeople = function (percent, selector) {
        var scale = 1 + (0.5 * percent);
        $(selector + " img").css('transform', 'scale(' + scale + ')');
        $(selector + " .name-and-title-box").css({opacity: 1.5 * percent});
    };


    var animatedElements = [
        {
            selector: "#community-people",
            animate: animatePeople,
            startPercent: 0.20,
            endPercent: 0.60
        },
        {
            selector: "#district-people",
            animate: animatePeople,
            startPercent: 0.20,
            endPercent: 0.60
        },
        {
            selector: "#national-people",
            animate: animatePeople,
            startPercent: 0.20,
            endPercent: 0.60
        }
    ];

    var setElementBeforeScroll = function (element) {
        $(element.selector).css({
            "position": "relative",
            "margin-top": 0,
            "left": 0,
        });
    };

    var setElementHoldingScrolling = function (element) {
        //console.log("setting fixed", element.selector);
        $(element.selector).css({
            "position": "fixed",
            "left": element.startingLeft,
            "top": 0,
            "width": element.startingWidth,
            "height": element.startingHeight,
        });
    };

    var setElementAfterScrolling = function (element) {
        $(element.selector).css({
            "position": "relative",
            "top": element.scrollingAreaHeight - element.startingHeight
        });
    };

    var selector = "#graph";


    var scrollingElements = [
        {
            scrollingAreaHeight: 1000,
            scrollingAreaSelector: "#graph-scrolling-area",
            selector: "#graph",
            animateFunction: animatedGraph,
            startingLeft: null,
            startingWidth: null,
            startingHeight: null
        },
        {
            scrollingAreaHeight: 1000,
            scrollingAreaSelector: "#syringe-scrolling-area",
            selector: "#syringe",
            animateFunction: animateSyringe,
            startingLeft: null,
            startingWidth: null,
            startingHeight: null
        }
    ];

    scrollingElements.forEach(function (element) {
        element.startingLeft = $(element.selector).css("left");
        element.startingHeight = $(element.selector).height();
        element.startingWidth = $(element.selector).width();

        $(element.scrollingAreaSelector).css({
            "height": element.scrollingAreaHeight,
            "margin-bottom": "50px;"
        })
        element.animateFunction(0);
    });

    var animations = [
        {
            selector: "#graph123",            
            startingLeft: null,
            startingWidth: null,
            startingHeight: null
        }
    ];

    
    animations.forEach(function (element) {
        //element.startingLeft = $(element.selector).css("left");
        element.startingHeight = $(element.selector).height();
        element.startingWidth = $(element.selector).width();

        /*$(element.scrollingAreaSelector).css({
            "height": element.scrollingAreaHeight,
            "margin-bottom": "50px;"
        })*/
        //element.animateFunction(0);
    });

    window.scrollingElements = scrollingElements;

    $(window).scroll(function () {
        //this.console.log("scroll");
        animations.forEach(function (element) {

            var clientRect = document.querySelector(element.selector).getBoundingClientRect();
            var innerHeight = window.innerHeight;
            element.scrollingAreaHeight = $(element.selector).height();


            //console.log(clientRect.y,-Math.abs(element.scrollingAreaHeight));
            if (clientRect.y < 0) {
                if (clientRect.y < -Math.abs(element.scrollingAreaHeight)) {
                    console.log("after3", clientRect.y);
                    //setElementAfterScrolling(element);
                    //element.animateFunction(1);
                } else {
                    console.log("during2", clientRect.y);
                    //setElementHoldingScrolling(element);
                    //var percent = Math.abs(clientRect.y) / (element.scrollingAreaHeight - element.startingHeight);
                    //element.animateFunction(percent);
                }
            }
            if (clientRect.y > 0) {
                console.log("before1", clientRect.y);
                //setElementBeforeScroll(element);
                //element.animateFunction(0);
            }
        });


        scrollingElements.forEach(function (element) {

            var clientRect = document.querySelector(element.scrollingAreaSelector).getBoundingClientRect();
            var innerHeight = window.innerHeight;

            if (clientRect.y < 0) {
                if (clientRect.y < -Math.abs(element.scrollingAreaHeight) + element.startingHeight) {
                    //console.log("after", clientRect.y);
                    setElementAfterScrolling(element);
                    element.animateFunction(1);
                } else {
                    //console.log("during", clientRect.y);
                    setElementHoldingScrolling(element);
                    var percent = Math.abs(clientRect.y) / (element.scrollingAreaHeight - element.startingHeight);
                    element.animateFunction(percent);
                }
            }
            if (clientRect.y > 0) {
                //console.log("before", clientRect.y);
                setElementBeforeScroll(element);
                element.animateFunction(0);
            }
        });


        animatedElements.forEach(function (element) {
            var clientRect = document.querySelector(element.selector).getBoundingClientRect();
            var innerHeight = window.innerHeight;
            var percentThroughScroll;
            if (clientRect.y < innerHeight) {
                if (clientRect.y < 0 - clientRect.height) {
                    percentThroughScroll = 1;
                } else {
                    var lengthOfScroll = innerHeight + clientRect.height;
                    var positionInScroll = clientRect.top + clientRect.height;
                    percentThroughScroll = (lengthOfScroll - positionInScroll) / lengthOfScroll;
                }
            } else {
                percentThroughScroll = 0;
            }
            //console.log(percentThroughScroll);


            if (typeof (element.startPercent) != "undefined" && typeof (element.endPercent) != "undefined") {
                var speedUpPercentBy = 1 / (element.endPercent - element.startPercent);
                percentThroughScroll = percentThroughScroll * speedUpPercentBy;

                if (percentThroughScroll < element.startPercent) {
                    element.animate(0, element.selector);
                    //console.log("set 0");
                } else if (percentThroughScroll > 1 + element.startPercent) {
                    element.animate(1, element.selector);
                    //console.log("set 1");
                } else {
                    var modifiedPercent = percentThroughScroll - element.startPercent;
                    element.animate(modifiedPercent, element.selector);
                    //console.log("set modified percent");
                }
            } else {
                element.animate(percentThroughScroll, element.selector);
            }
        });
    });

    console.log("here");
});