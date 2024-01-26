let dayWasSelected = false;
let nightWasSelected = false;
let daytimeButtonElement;
let nighttimeButtonElement;

function init() {

    initNightTimeButton();
    initDayTimeButton();

}

function initDayTimeButton() {

    nighttimeButtonElement = document.getElementById('daytime-button-night');

    nighttimeButtonElement.addEventListener('click', function () {

        if (dayWasSelected) deactivateDay();

        if (!nightWasSelected) {
            activateNight();
            return;
        }

        deactivateNight();

    });
}

function initNightTimeButton() {

    daytimeButtonElement = document.getElementById('daytime-button-day');

    daytimeButtonElement.addEventListener('click', function () {

        if (nightWasSelected) deactivateNight();

        if (!dayWasSelected) {
            activateDay();
            return;
        }

        deactivateDay();

    });
}

function activateNight() {
    nightWasSelected = true;
    setBackgroundColorOfElement(nighttimeButtonElement, 'red');
}

function activateDay() {
    dayWasSelected = true;
    setBackgroundColorOfElement(daytimeButtonElement, 'red');
}

function deactivateDay() {
    dayWasSelected = false;
    setBackgroundColorOfElement(daytimeButtonElement, 'lightblue');
}

function deactivateNight() {
    nightWasSelected = false;
    setBackgroundColorOfElement(nighttimeButtonElement, 'lightblue');
}

function setBackgroundColorOfElement(element, color) {
    element.setAttribute('style', 'background-color:' + color);
}


function alerta() {
    alert("moin")
    let habit = {
        "key": 1,
        "activity": "Laufen",
        "day": true,
    }
    localStorage.setItem('01', JSON.stringify(habit));
}