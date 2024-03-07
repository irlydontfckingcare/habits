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

     var e = document.getElementById("select-content");
     var text = e.options[e.selectedIndex].text;

     let habit = {
         "activity": text,
         "day": dayWasSelected,     
     }

     localStorage.setItem(Date.now(), JSON.stringify(habit));
    

    //  let temp = JSON.parse(localStorage.getItem('01'));
    //  let d = temp.day;
    //  let a = temp.activity;
    //  console.log(temp + "2222");
    //  console.log(d + "ddd");
    //  console.log(a + "a");

}

  

