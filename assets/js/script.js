// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// DONE THEN the current day is displayed at the top of the calendar
// ! WHEN I scroll down
// TODO I am presented with timeblocks for standard business hours
// ! WHEN I view the timeblocks for that day
// TODO each timeblock is color coded to indicate whether it is in the past, present, or future
// ! WHEN I click into a timeblock
// TODO I can enter an event
// ! WHEN I click the save button for that timeblock
// TODO the text for that event is saved in local storage
// ! WHEN I refresh the page
// TODO the saved events persist

// DOM Elements 
var currentDay = $('#currentDay');

var currentTime = moment().format('HH')
var workHours = 9
//Get row element
var plannerRow = $('.planner-row')
var plannerDiv = $('#planner-div')

var divDataTime = $()
//Function to display the current day and date.
function renderDayDate() {
    // var dayDate = moment().format('LLLL')
    var dayDate = moment().format('dddd, MMMM Do YYYY')
    currentDay.text(dayDate)
}
renderDayDate()
renderColors()

// function to render colors NEED TO FIX THE LOOP TO INCLUDE INDEX 0
function renderColors() {
    for (var i = 0; i <= workHours; i++) {
        var targetRow = plannerDiv.children('div').eq(i).attr('data-time')
        var targetText = plannerDiv.children('div').eq(i).children('textarea')
        if (targetRow < currentTime) {
            targetText.attr('class', 'past col-10')
        } else if (targetRow == currentTime) {
            targetText.attr('class', 'present col-10')
        } else {
            targetText.attr('class', 'future col-10')
        }
    }
}
