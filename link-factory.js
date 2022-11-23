// THE PLAN

// if #slide-number === A 
// then    #left-arrow attribute href = A - 1
//         #right-arrow attribute href = A + 1
// if #right-arrow attribute href > slide-number-max 
// then    #right-arrow attribute href = 1
// if #left-arrow attribute href < slide-number-min 
// then    #left-arrow attribute href = slide-number-max

// only needs to run once; no loop
// each page has one slide num, one of each arrow

// SUCCESS!

let slideNumber = Number(document.getElementById("slide-number").innerHTML);
let slideNumberMax = 16;
let slideNumberMin = 1;
let rightArrow = slideNumber + 1;
let leftArrow = slideNumber - 1;
let pageOrder = [ "unused to make 1-indexing OK",
    "basketball-model.html","twod-surface.html","missing-dimension.html",
    "troposphere.html","average-speed-car.html","shallow-ocean.html",
    "moon-v-earth.html","paper-thin.html","thermohaline-circulation.html",
    "light-bulb-moments.html","changeover-of-perception.html","existential-vertigo.html",
    "heat-and-carbon-sink.html","dead-zones.html","oxygen-minimum-zone.html",
    "anoxic-events.html"
]
if (rightArrow === 17) {
    rightArrow = 1;
}
if (leftArrow === 0) {
    leftArrow = 16;
}
document.getElementById("left-arrow").setAttribute("href",pageOrder[leftArrow]);
document.getElementById("right-arrow").setAttribute("href",pageOrder[rightArrow]);
document.getElementById("left-arrow-top").setAttribute("href",pageOrder[leftArrow]);
document.getElementById("right-arrow-top").setAttribute("href",pageOrder[rightArrow]);