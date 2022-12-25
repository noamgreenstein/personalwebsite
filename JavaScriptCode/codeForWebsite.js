let myButton = document.getElementById("myBtn");
console.log("hello");
window.onscroll = function (){scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
        console.log("hello1");
    }
    else {
        myButton.style.display = "none";
        console.log("hello2");
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}






