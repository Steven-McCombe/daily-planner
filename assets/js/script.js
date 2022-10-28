
// get DOM Elements 
var currentDay = $('#currentDay');
var plannerRow = $('.time-block')
var plannerDiv = $('#planner-div')
var saveBtn = $('.saveBtn')
var timeNowEl = $('#timeNow')
//Global Variables
var currentTime = parseInt(moment().format('HH')) //24 Hour format 
var timeNow = (moment().format('LT'))
var workHours = 9
var timeKey = 8
//Call Functions
renderSaved()
renderDayDate()
renderColors()
//Function to display the current day and date.
function renderDayDate() {
    var dayDate = moment().format('dddd, MMMM Do YYYY')
    currentDay.text(dayDate)
    timeNowEl.text("The current time is: " + timeNow)
}
//function to render the colors. 
function renderColors() {
    for (var i = 0; i < workHours; i++) {    
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
// function to render the saved items from localStorage back to the text area.
function renderSaved() {
    for (var i = 0; i <= workHours; i++) {
        timeKey ++
        var renderText = plannerDiv.children('div').eq(i).children('textarea')
        var renderRow = localStorage.getItem(timeKey)    
        renderText.val(renderRow)
        
    }
}
//Event Listener to save the row to local storage. 
saveBtn.on('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
    var key = $(this).parent().attr('data-time')
    var getTextContent = $(this).siblings('textarea').val()
    localStorage.setItem (key, getTextContent)
});
 
