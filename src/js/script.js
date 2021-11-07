$(document).ready(function(){
window.addEventListener('DOMContentLoaded', () => {
    const headerList = document.querySelector('.header-list'),
    headerListItem = document.querySelectorAll('.header-list__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active');
        headerList.classList.toggle('header-list_active');
    });

    headerListItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger-active');
            headerList.classList.toggle('header-list_active');
        });
    });
});



    $('.white-text').collapser({
        mode: 'lines',
        truncate: 4,
    });
    
    $(".new").css({ "height": "114px" });
    
       
    });  
    function showMore() {
        var dots = document.getElementById("dots");
        var moreAboutText = document.getElementById("more");
        var btnAboutText = document.getElementById("btn");
        var element = document.querySelector(".about-click");
            element.classList.toggle("about-click_active");
        /* var element = document.getElementById("btn");
            element.classList.toggle("about-mom"); */
            
        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnAboutText.innerHTML = "Explore more ";
              moreAboutText.style.display = "none";
        }
        else {
            dots.style.display = "none";
            btnAboutText.innerHTML = "Hide text";
              moreAboutText.style.display = "inline";
        }
    }
    function showStart() {
        var training = document.getElementById("training");
        var startAboutText = document.getElementById("start");
        var browseAboutText = document.getElementById("browse");
        var element = document.querySelector(".about-click1");
            element.classList.toggle("about-click1_active");
        if (training.style.display === "none") {
            training.style.display = "inline";
            browseAboutText.innerHTML = "Browse training";
            startAboutText.style.display = "none";
        }
        else {
            training.style.display = "none";
            browseAboutText.innerHTML = "Hide text";
            startAboutText.style.display = "inline";
        }
    }

    function showAnd() {
        var connects = document.getElementById("connects");
        var andAboutText = document.getElementById("and");
        var connectAboutText = document.getElementById("connect");
        var element = document.querySelector(".about-click2");
            element.classList.toggle("about-click2_active");
        if (connects.style.display === "none") {
            connects.style.display = "inline";
            connectAboutText.innerHTML = "Connect now";
            andAboutText.style.display = "none";
        }
        else {
            connects.style.display = "none";
            connectAboutText.innerHTML = "Hide text";
            andAboutText.style.display = "inline";
        }
    }
    function showBy() {
        var communicate = document.getElementById("communicate");
        var byAboutText = document.getElementById("by");
        var nowAboutText = document.getElementById("now");
        var element = document.querySelector(".about-click3");
            element.classList.toggle("about-click3_active");
        if (communicate.style.display === "none") {
            communicate.style.display = "inline";
            nowAboutText.innerHTML = "Start now";
            byAboutText.style.display = "none";
            
        }
        else {
            communicate.style.display = "none";
            nowAboutText.innerHTML = "Hide text";
            byAboutText.style.display = "inline";
            /* document.querySelector('button').style = "background-color: red"; */
             
        }
    }
    