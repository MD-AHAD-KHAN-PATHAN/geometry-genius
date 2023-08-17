
function triangleAreaCalculator(base, heignt) {

    document.getElementById('area1').innerText = 0.5 * base * heignt;
}

function areaCalculatorRectangle(base, heignt) {
    document.getElementById('area2').innerText = base * heignt;
}

function areaCalculatorParallelogram(base, heignt) {
    document.getElementById('area3').innerText = base * heignt;
}


function clickbtn1(element) {

    const triangleBase = element.parentNode.parentNode.childNodes[5].childNodes[1].value;
    const triangleHeight = element.parentNode.parentNode.childNodes[5].childNodes[5].value;

    triangleAreaCalculator(triangleBase, triangleHeight);


}

function clickbtn2(element) {

    const rectangleBase = element.parentNode.parentNode.childNodes[5].childNodes[1].value;
    const rectangleHeight = element.parentNode.parentNode.childNodes[5].childNodes[5].value;

    areaCalculatorRectangle(rectangleBase, rectangleHeight);

}

function clickbtn3(element) {

    const parallelogramBase = element.parentNode.parentNode.childNodes[5].childNodes[1].value;
    const parallelogramHeight = element.parentNode.parentNode.childNodes[5].childNodes[5].value;

    areaCalculatorParallelogram(parallelogramBase, parallelogramHeight);

}


