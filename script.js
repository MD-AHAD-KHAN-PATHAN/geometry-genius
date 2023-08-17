
function inputValue(inputId){
    const number = document.getElementById(inputId);
    return number.value;
}

function areaInnerTextSet(elementId, area){
    document.getElementById(elementId).innerText = area;
}


function clickbtn1() {

    const base = inputValue('triangleBase');

    const height = inputValue('triangleHeight');

    let area = 0.5 * base * height;

    areaInnerTextSet('triangleArea', area);

}

function clickbtn2() {

    const width = inputValue('rectangleBase');
    
    const length = inputValue('rectangleHeight');

    let area = width * length;

    areaInnerTextSet('rectangleArea', area);


}

function clickbtn3() {

    const base = inputValue('parallelogramBase');

    const height = inputValue('parallelogramHeight')

    let area = base * height;

    areaInnerTextSet('parallelogramArea', area);

}

function clickbtn4() {

    const base = inputValue('rhombusBase');

    const height = inputValue('rhombusHeight')

    let area = 0.5 * base * height;

    areaInnerTextSet('rhombusArea', area);

}

function clickbtn5() {

    const base = inputValue('pentagonBase');

    const height = inputValue('pentagonHeight')

    let area = 0.5 * base * height;

    areaInnerTextSet('pentagonArea', area);

}

function clickbtn6() {

    const base = inputValue('ellipseBase');

    const height = inputValue('ellipseHeight')

    let area = 3.14 * base * height;

    areaInnerTextSet('ellipseArea', area);

}


