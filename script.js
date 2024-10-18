const aboutConts = document.querySelectorAll(".about-cont")
const previous = document.querySelector(".previous")
const next = document.querySelector(".next")
const currentDivs = document.querySelectorAll(".current-div")
const body = document.querySelector("body")
const scrollToTop = document.querySelector(".scroll-to-top")
const homeButt = document.querySelector(".home-butt")
const aboutButt = document.querySelector(".about-butt")
const menusButt = document.querySelector(".menus-butt")
const tablesButt = document.querySelector(".tables-butt")
const menusHButt = document.querySelector(".menus")
const tablesHButt = document.querySelector(".tables")
const home = document.querySelector(".home")
const about = document.querySelector(".about")
const menus = document.querySelector(".menus-sec")
const tables = document.querySelector(".tables-sec")

window.addEventListener("scroll", ()=>{
    if (window.scrollY < 500) {
        scrollToTop.classList.add("hide")
        
    }else{
        scrollToTop.classList.remove("hide")
    }
})

homeButt.addEventListener("click", ()=>{
    home.scrollIntoView({behavior: "smooth"})
})

aboutButt.addEventListener("click", ()=>{
    about.scrollIntoView({behavior: "smooth"})
})

menusButt.addEventListener("click", ()=>{
    menus.scrollIntoView({behavior: "smooth"})
})

tablesButt.addEventListener("click", ()=>{
    tables.scrollIntoView({behavior: "smooth"})
})

menusHButt.addEventListener("click", ()=>{
    menus.scrollIntoView({behavior: "smooth"})
})

tablesHButt.addEventListener("click", ()=>{
    tables.scrollIntoView({behavior: "smooth"})
})



scrollToTop.addEventListener("click", ()=>{
    body.scrollIntoView({behavior: "smooth"})
})

let current = 0

previous.addEventListener("click", ()=>{
    // alert(current)
    if (current == 0) {
        current = aboutConts.length - 1
    }else{
        current--
    }

    

    aboutConts.forEach((about)=>{
        if (aboutConts[current] == about) {
            about.classList.remove("hide")
            about.classList.add("fade-in")
        }else{
            about.classList.add("hide")
            about.classList.remove("fade-in")
        }
    })

    currentDivs.forEach((currentDiv)=>{
        if (currentDivs[current] == currentDiv) {
            currentDiv.classList.add("curr")
        }else{
            currentDiv.classList.remove("curr")
        }
    })
})

next.addEventListener("click", ()=>{
    // alert(current)
    if (current == (aboutConts.length - 1)) {
        current = 0
    }else{
        current++
    }
    

    aboutConts.forEach((about)=>{
        if (aboutConts[current] == about) {
            about.classList.remove("hide")
            about.classList.add("fade-in")
        }else{
            about.classList.add("hide")
            about.classList.remove("fade-in")
        }
    })

    currentDivs.forEach((currentDiv)=>{
        if (currentDivs[current] == currentDiv) {
            currentDiv.classList.add("curr")
        }else{
            currentDiv.classList.remove("curr")
        }
    })
})



