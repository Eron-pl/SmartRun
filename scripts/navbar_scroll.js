window.onscroll = function() 
{
    scrollFunction()
};

function scrollFunction() 
{
    if (screen.width > 1000) 
    {
        if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
            document.getElementById("nav").style.height = "100px";
            document.getElementById("nav").style.backgroundColor = "rgba(192,192,192,0.2)";
            document.getElementById("logo").style.width = "8%";
            document.getElementById("logo").style.top = "0px";
        } else {
            document.getElementById("nav").style.height = "150px";
            document.getElementById("nav").style.backgroundColor = "transparent";
            document.getElementById("logo").style.width = "15%";
            document.getElementById("logo").style.top = "0px";
        }
    } else {
        if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
            document.getElementById("nav").style.height = "100px";
            document.getElementById("nav").style.backgroundColor = "rgba(192,192,192,0.2)";
        } else {
            document.getElementById("nav").style.height = "150px";
            document.getElementById("nav").style.backgroundColor = "transparent";
        }
    }
} 
