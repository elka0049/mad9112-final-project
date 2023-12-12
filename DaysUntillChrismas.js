var currentDate = new Date();
console.log(`Today is ${currentDate}`);

var christmasDay = new Date(currentDate.getFullYear(), 11, 25);
if (currentDate.getMonth() === 11 && currentDate.getDate() > 25) {
    christmasDay.setFullYear(christmasDay.getFullYear() + 1);
}

var oneDay = 1000 * 60 * 60 * 24;
function getDaysUntilChristmas() {
    return Math.ceil((christmasDay.getTime() - currentDate.getTime()) / oneDay);
}

console.log("there are "+getDaysUntilChristmas()+" days left for christmas");