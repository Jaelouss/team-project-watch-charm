function calculatePercentage(objectWidth, containerWidth) {
    let percentage = (objectWidth / containerWidth) * 100;
    return percentage;
}


let objectWidth = 100; // Введіть розмір об'єкта в пікселях
let containerWidth = 320;

let percentage = calculatePercentage(objectWidth, containerWidth);
console.log(percentage + '%');
