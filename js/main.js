// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.documentElement.scrollTop > 280) {
        document.getElementById("navbar").style.background = "white";
        document.getElementById("navbar").style.padding = "15px";
        document.getElementById("logo").style.display = "hide";
        document.getElementById("logo").style.opacity = "1";
    } else {
        document.getElementById("navbar").style.background = "transparent";
        document.getElementById("navbar").style.padding = "25px";
        document.getElementById("logo").style.display = "show";
        document.getElementById("logo").style.height = "35px";
        document.getElementById("logo").style.opacity = "0";
    }
}
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
$(".dropdown").hover(function () {
    document.getElementById("myDropdown").classList.toggle("show");
});


function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
$(".dropdown2").hover(function () {
    document.getElementById("myDropdown2").classList.toggle("show");
});
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn2')) {
        var dropdowns = document.getElementsByClassName("dropdown-content2");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}