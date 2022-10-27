
// DOM Elements 
var currentDay = $('#currentDay');

var currentTime = moment().format('HH')
var workHours = 9
var timeKey = 8
//Get row element
var plannerRow = $('.planner-row')
// var plannerDiv = document.getElementById("planner-div")
var plannerDiv = $('#planner-div')
var saveBtn = $('.saveBtn')
var eventsSaved = []


//CALL FUNCTIONS
renderSaved()
renderDayDate()
renderColors()

//Function to display the current day and date.
function renderDayDate() {
    var dayDate = moment().format('dddd, MMMM Do YYYY')
    currentDay.text(dayDate)
}

//todo function to render colors NEED TO FIX THE LOOP TO INCLUDE INDEX 0
function renderColors() {
    for (var i = 0; i <= workHours -1; i++) {
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

saveBtn.on('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
    var key = $(this).parent().attr('data-time')
    var getTextContent = $(this).siblings('textarea').val()
    localStorage.setItem (key, getTextContent)
});
 
// function to add the saved items from localStorage 
function renderSaved() {
    
    for (var i = 0; i <= workHours; i++) {
        timeKey ++
        var renderText = plannerDiv.children('div').eq(i).children('textarea')
        var renderRow = localStorage.getItem(timeKey)    
        renderText.val(renderRow)
        
    }
}

