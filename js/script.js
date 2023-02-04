/* =================================Typing animation============================== */
var typed = new Typed(".typing", {
    strings: ["", "Web Designer", "Web Developer", "Gamer", "Esports Player"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})
/* =================================Aside============================== */
const nav = document.querySelector(".nav"),
    navlist = document.querySelectorAll("li"),
    allSection = document.querySelectorAll(".section")
for (let i = 0; i < navlist.length; i++) 
{
    const a = navlist[i].querySelector("a")
    a.addEventListener("click", function() 
    {   
       removeBackSection()
        for(let j=0;j<navlist.length;j++)
        {
            if(navlist[j].querySelector('a').classList.contains("active"))
            {
                addBackSection(j)
            }
            navlist[j].querySelector("a").classList.remove("active")
        }
        this.classList.add("active")
        showSelction(this)
        if(window.innerWidth<1200)
        {
            asideSectiontogglerBtn()
        }
    })
}
function removeBackSection()
{
    for(let i=0;i<allSection.length;i++)
    {
        allSection[i].classList.remove("back-section")
    }
}
function addBackSection(num)
{
    allSection[num].classList.add("back-section")
}
function showSelction(element)
{   
    for(let i=0;i<allSection.length;i++)
    {
        allSection[i].classList.remove('active')
    }
    const target = element.getAttribute("href").split('#')[1]
    document.querySelector('#' + target).classList.add('active')
}
function updateNav (element)
{
    for (let i=0;i<navlist.length;i++)
    {
        navlist[i].querySelector('a').classList.remove("active")
        const target = element.getAttribute("href").split('#')[1]
        if(target === navlist[i].querySelector('a').getAttribute("href").split('#')[1])
        {
            navlist[i].querySelector('a').classList.add("active")
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function()
{
    const sectionIndex = this.getAttribute("data-section-index")
    showSelction(this)
    updateNav(this)
    removeBackSection()
    addBackSection(sectionIndex)
})
const navTogglerBtn = document.querySelector(".nav-toggler")
    aside = document.querySelector(".aside")
    navTogglerBtn.addEventListener("click", () =>
    {
        asideSectiontogglerBtn()
    })
    function asideSectiontogglerBtn()
    {
        aside.classList.toggle("open")
        navTogglerBtn.classList.toggle("open")
        for(let i=0; i<allSection.length; i++)
        {
            allSection[i].classList.toggle("open")
        }
    }
    $(".rotate").click(function () {
        $(this).toggleClass("down");
    })