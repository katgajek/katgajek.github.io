(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";

$(function () {

    //main-hero fadeIn
    function mainHero() {
        $('.main-hero').animate({
            opacity: 1
        }, 3000);
    }
    mainHero();

    //page scroll - menu

    function pageScroll() {
        $(".main-nav a").on("click", function (e) {
            e.preventDefault();

            var $a = $(this);
            var href = $a.attr("href");
            var $section = $(href);

            $('html').animate({
                scrollTop: $section.offset().top
            }, 1000);
        });
    }
    pageScroll();

    //burger menu

    var $menu = $(".sidebar");
    var $burger = $(".burger");
    var menuOpen;

    function openMenu() {
        $menu.css("right", "0");
        menuOpen = true;
    }

    function closeMenu() {
        $menu.css("right", "-320px");
        menuOpen = false;
    }

    function toggleSidebar() {
        $burger.toggleClass("active");

        if (menuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    $burger.on("click tap", function () {
        toggleSidebar();
    });

    $(".sidebar a").on("click tap", function (e) {
        e.preventDefault();

        var $a = $(this);
        var href = $a.attr("href");
        var $section = $(href);

        $('html, body').animate({
            scrollTop: $section.offset().top

        }, 1000);

        $burger.removeClass("active");

        if (menuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    //box fadeIn
    function boxFadein() {
        $(window).scroll(function () {

            $(".speech").each(function (i) {
                var bottomOfItem = $(this).offset().top + $(this).outerHeight();
                var bottomOfWindow = $(window).scrollTop() + $(window).height();

                if (bottomOfWindow > bottomOfItem) {
                    $(this).addClass("active");
                }
            });
        });
    }
    boxFadein();

    //carousel
    function carousel() {
        $('#carousel').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            responsive: [{
                breakpoint: 902,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }]
        });
    }
    carousel();

    //cert slideDown
    function slideDown() {
        var $certBtn = $(".certBtn");

        $certBtn.on("click tap", function () {
            $(this).parent().next().slideToggle(500);
        });
    }
    slideDown();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBLEVBQUUsWUFBVTs7QUFFUjtBQUNBLGFBQVMsUUFBVCxHQUFvQjtBQUNoQixVQUFFLFlBQUYsRUFBZ0IsT0FBaEIsQ0FBd0I7QUFDaEIscUJBQVM7QUFETyxTQUF4QixFQUVPLElBRlA7QUFJSDtBQUNEOztBQUVBOztBQUVBLGFBQVMsVUFBVCxHQUFzQjtBQUNsQixVQUFFLGFBQUYsRUFBaUIsRUFBakIsQ0FBb0IsT0FBcEIsRUFBNkIsVUFBVSxDQUFWLEVBQWE7QUFDdEMsY0FBRSxjQUFGOztBQUVBLGdCQUFNLEtBQUssRUFBRSxJQUFGLENBQVg7QUFDQSxnQkFBTSxPQUFPLEdBQUcsSUFBSCxDQUFRLE1BQVIsQ0FBYjtBQUNBLGdCQUFNLFdBQVcsRUFBRSxJQUFGLENBQWpCOztBQUVBLGNBQUUsTUFBRixFQUFVLE9BQVYsQ0FBa0I7QUFDZCwyQkFBVyxTQUFTLE1BQVQsR0FBa0I7QUFEZixhQUFsQixFQUVHLElBRkg7QUFHSCxTQVZEO0FBV0g7QUFDRDs7QUFHQTs7QUFFQSxRQUFNLFFBQVEsRUFBRSxVQUFGLENBQWQ7QUFDQSxRQUFNLFVBQVUsRUFBRSxTQUFGLENBQWhCO0FBQ0EsUUFBSSxRQUFKOztBQUVBLGFBQVMsUUFBVCxHQUFtQjtBQUNmLGNBQU0sR0FBTixDQUFVLE9BQVYsRUFBbUIsR0FBbkI7QUFDQSxtQkFBVyxJQUFYO0FBQ0g7O0FBRUQsYUFBUyxTQUFULEdBQW9CO0FBQ2hCLGNBQU0sR0FBTixDQUFVLE9BQVYsRUFBbUIsUUFBbkI7QUFDQSxtQkFBVyxLQUFYO0FBQ0g7O0FBRUQsYUFBUyxhQUFULEdBQXdCO0FBQ3BCLGdCQUFRLFdBQVIsQ0FBb0IsUUFBcEI7O0FBRUEsWUFBSSxRQUFKLEVBQWM7QUFDVjtBQUNILFNBRkQsTUFFSztBQUNEO0FBQ0g7QUFDSjs7QUFFRCxZQUFRLEVBQVIsQ0FBVyxXQUFYLEVBQXVCLFlBQU07QUFDekI7QUFDSCxLQUZEOztBQUlBLE1BQUUsWUFBRixFQUFnQixFQUFoQixDQUFtQixXQUFuQixFQUFnQyxVQUFTLENBQVQsRUFBVztBQUN2QyxVQUFFLGNBQUY7O0FBRUEsWUFBTSxLQUFLLEVBQUUsSUFBRixDQUFYO0FBQ0EsWUFBTSxPQUFPLEdBQUcsSUFBSCxDQUFRLE1BQVIsQ0FBYjtBQUNBLFlBQU0sV0FBVyxFQUFFLElBQUYsQ0FBakI7O0FBRUEsVUFBRSxZQUFGLEVBQWdCLE9BQWhCLENBQXdCO0FBQ3BCLHVCQUFXLFNBQVMsTUFBVCxHQUFrQjs7QUFEVCxTQUF4QixFQUdFLElBSEY7O0FBS0EsZ0JBQVEsV0FBUixDQUFvQixRQUFwQjs7QUFFQSxZQUFJLFFBQUosRUFBYztBQUNWO0FBQ0gsU0FGRCxNQUVLO0FBQ0Q7QUFDSDtBQUNKLEtBbkJEOztBQXVCQTtBQUNBLGFBQVMsU0FBVCxHQUFxQjtBQUNqQixVQUFFLE1BQUYsRUFBVSxNQUFWLENBQWlCLFlBQU07O0FBRW5CLGNBQUUsU0FBRixFQUFhLElBQWIsQ0FBa0IsVUFBVSxDQUFWLEVBQWE7QUFDM0Isb0JBQU0sZUFBZSxFQUFFLElBQUYsRUFBUSxNQUFSLEdBQWlCLEdBQWpCLEdBQXVCLEVBQUUsSUFBRixFQUFRLFdBQVIsRUFBNUM7QUFDQSxvQkFBTSxpQkFBaUIsRUFBRSxNQUFGLEVBQVUsU0FBVixLQUF3QixFQUFFLE1BQUYsRUFBVSxNQUFWLEVBQS9DOztBQUVBLG9CQUFJLGlCQUFpQixZQUFyQixFQUFtQztBQUMvQixzQkFBRSxJQUFGLEVBQVEsUUFBUixDQUFpQixRQUFqQjtBQUNIO0FBQ0osYUFQRDtBQVFILFNBVkQ7QUFXSDtBQUNEOztBQUVBO0FBQ0ksYUFBUyxRQUFULEdBQW1CO0FBQ2YsVUFBRSxXQUFGLEVBQWUsS0FBZixDQUFxQjtBQUNqQixzQkFBVSxJQURPO0FBRWpCLDBCQUFjLENBRkc7QUFHakIsNEJBQWdCLENBSEM7QUFJakIsa0JBQU0sSUFKVztBQUtqQixvQkFBUSxJQUxTO0FBTWpCLHdCQUFZLENBQ1I7QUFDSSw0QkFBWSxHQURoQjtBQUVJLDBCQUFVO0FBQ04sa0NBQWMsQ0FEUjtBQUVOLG9DQUFnQixDQUZWO0FBR04sOEJBQVUsSUFISjtBQUlOLDBCQUFNO0FBSkE7QUFGZCxhQURRO0FBTkssU0FBckI7QUFrQkg7QUFDRDs7QUFJSjtBQUNBLGFBQVMsU0FBVCxHQUFxQjtBQUNqQixZQUFNLFdBQVcsRUFBRSxVQUFGLENBQWpCOztBQUVBLGlCQUFTLEVBQVQsQ0FBWSxXQUFaLEVBQXlCLFlBQVk7QUFDakMsY0FBRSxJQUFGLEVBQVEsTUFBUixHQUFpQixJQUFqQixHQUF3QixXQUF4QixDQUFvQyxHQUFwQztBQUNILFNBRkQ7QUFHSDtBQUNEO0FBRUgsQ0FySUQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfXJldHVybiBlfSkoKSIsIlxuJChmdW5jdGlvbigpe1xuXG4gICAgLy9tYWluLWhlcm8gZmFkZUluXG4gICAgZnVuY3Rpb24gbWFpbkhlcm8oKSB7XG4gICAgICAgICQoJy5tYWluLWhlcm8nKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgICB9LCAzMDAwXG4gICAgICAgICk7XG4gICAgfVxuICAgIG1haW5IZXJvKCk7XG5cbiAgICAvL3BhZ2Ugc2Nyb2xsIC0gbWVudVxuXG4gICAgZnVuY3Rpb24gcGFnZVNjcm9sbCgpIHtcbiAgICAgICAgJChcIi5tYWluLW5hdiBhXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc3QgJGEgPSAkKHRoaXMpO1xuICAgICAgICAgICAgY29uc3QgaHJlZiA9ICRhLmF0dHIoXCJocmVmXCIpO1xuICAgICAgICAgICAgY29uc3QgJHNlY3Rpb24gPSAkKGhyZWYpO1xuXG4gICAgICAgICAgICAkKCdodG1sJykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAkc2VjdGlvbi5vZmZzZXQoKS50b3BcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcGFnZVNjcm9sbCgpO1xuXG5cbiAgICAvL2J1cmdlciBtZW51XG5cbiAgICBjb25zdCAkbWVudSA9ICQoXCIuc2lkZWJhclwiKTtcbiAgICBjb25zdCAkYnVyZ2VyID0gJChcIi5idXJnZXJcIik7XG4gICAgdmFyIG1lbnVPcGVuO1xuXG4gICAgZnVuY3Rpb24gb3Blbk1lbnUoKXtcbiAgICAgICAgJG1lbnUuY3NzKFwicmlnaHRcIiwgXCIwXCIpO1xuICAgICAgICBtZW51T3BlbiA9IHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VNZW51KCl7XG4gICAgICAgICRtZW51LmNzcyhcInJpZ2h0XCIsIFwiLTMyMHB4XCIpO1xuICAgICAgICBtZW51T3BlbiA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZVNpZGViYXIoKXtcbiAgICAgICAgJGJ1cmdlci50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcblxuICAgICAgICBpZiAobWVudU9wZW4pIHtcbiAgICAgICAgICAgIGNsb3NlTWVudSgpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIG9wZW5NZW51KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkYnVyZ2VyLm9uKFwiY2xpY2sgdGFwXCIsKCkgPT4ge1xuICAgICAgICB0b2dnbGVTaWRlYmFyKCk7XG4gICAgfSk7XG5cbiAgICAkKFwiLnNpZGViYXIgYVwiKS5vbihcImNsaWNrIHRhcFwiLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0ICRhID0gJCh0aGlzKTtcbiAgICAgICAgY29uc3QgaHJlZiA9ICRhLmF0dHIoXCJocmVmXCIpO1xuICAgICAgICBjb25zdCAkc2VjdGlvbiA9ICQoaHJlZik7XG5cbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAkc2VjdGlvbi5vZmZzZXQoKS50b3AsXG5cbiAgICAgICAgfSwxMDAwKTtcblxuICAgICAgICAkYnVyZ2VyLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuXG4gICAgICAgIGlmIChtZW51T3Blbikge1xuICAgICAgICAgICAgY2xvc2VNZW51KCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgb3Blbk1lbnUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG5cblxuICAgIC8vYm94IGZhZGVJblxuICAgIGZ1bmN0aW9uIGJveEZhZGVpbigpIHtcbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbCgoKSA9PiB7XG5cbiAgICAgICAgICAgICQoXCIuc3BlZWNoXCIpLmVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBib3R0b21PZkl0ZW0gPSAkKHRoaXMpLm9mZnNldCgpLnRvcCArICQodGhpcykub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBib3R0b21PZldpbmRvdyA9ICQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5oZWlnaHQoKTtcblxuICAgICAgICAgICAgICAgIGlmIChib3R0b21PZldpbmRvdyA+IGJvdHRvbU9mSXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBib3hGYWRlaW4oKTtcblxuICAgIC8vY2Fyb3VzZWxcbiAgICAgICAgZnVuY3Rpb24gY2Fyb3VzZWwoKXtcbiAgICAgICAgICAgICQoJyNjYXJvdXNlbCcpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5MDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXJvdXNlbCgpO1xuXG5cblxuICAgIC8vY2VydCBzbGlkZURvd25cbiAgICBmdW5jdGlvbiBzbGlkZURvd24oKSB7XG4gICAgICAgIGNvbnN0ICRjZXJ0QnRuID0gJChcIi5jZXJ0QnRuXCIpO1xuXG4gICAgICAgICRjZXJ0QnRuLm9uKFwiY2xpY2sgdGFwXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkubmV4dCgpLnNsaWRlVG9nZ2xlKDUwMCk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIHNsaWRlRG93bigpO1xuXG59KTsiXX0=
