// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// DONE THEN the current day is displayed at the top of the calendar
//  WHEN I scroll down
// DONE I am presented with timeblocks for standard business hours
// ! WHEN I view the timeblocks for that day
// TODO each timeblock is color coded to indicate whether it is in the past, present, or future
// DONE I click into a timeblock
// DONE I can enter an event
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
var saveBtn = $('.saveBtn')

var eventsSaved = []

//Function to display the current day and date.
function renderDayDate() {
    var dayDate = moment().format('dddd, MMMM Do YYYY')
    currentDay.text(dayDate)
}
renderDayDate()
renderColors()


//todo function to render colors NEED TO FIX THE LOOP TO INCLUDE INDEX 0
function renderColors() {
    for (var i = 0; i <= workHours; i++) {
        var targetRow = plannerDiv.children('div').eq(i).attr('data-time')
        var targetText = plannerDiv.children('div').eq(i).children('textarea')
        if (targetRow < currentTime) {
            targetText.attr('class', 'past col-10') //grey
        } else if (targetRow == currentTime) {
            targetText.attr('class', 'present col-10') //red
        } else if (targetRow > currentTime){
            targetText.attr('class', 'future col-10') //green
        }
    }
}
console.log(currentTime)

// function to push to local storage 
saveBtn.on('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
    var getTextContent = $(this).siblings('textarea').val()
    var getTimeContent = $(this).parent().attr('data-time')
  
    var eventsArray = {
         time: getTimeContent,
         description: getTextContent
    }
    eventsSaved.push(eventsArray)
    localStorage.setItem('Events', JSON.stringify(eventsSaved))
    
}); 


