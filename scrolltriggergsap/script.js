function breakTheText() {
    var h1= document.querySelector("h1")
    var h1text =h1.textContent

    var splittedText = h1text.split("")
    var halfvalue = splittedText.length/2

    var clutter = ""

    splittedText.forEach(function (element,idx){
        if (idx < halfvalue){
            clutter += `<span class="a">${element}</span>`
        }else{
            clutter += `<span class="b">${element}</span>`
        }
    })

    h1.innerHTML= clutter
}

breakTheText()

gsap.from(".a ",{
    y:80,
    duration:0.8,
    delay:0.5,
    stagger:0.15,
    opacity:0
})

gsap.from(".b ",{
    y:80,
    duration:0.8,
    delay:0.5,
    stagger:-0.15,
    opacity:0
})