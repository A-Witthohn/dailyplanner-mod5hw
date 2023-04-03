// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

var currentTime = dayjs().hour();
console.log(currentTime)

//logs Military Time of just the hour of the day.

var day = $(".time-block")
console.log(day) 

//logs the entire day as an object array. specifically showing each div as 1 part of the array

day.each(function () {
  var hourOfDay = $(this).attr("id").split("-")[1];
  //takes the id of (this) array and splits it into a new array without the (hour -) 
  //beginning portion of the ID,  assigning it the new value of (hourOfDay)
  
  console.log(hourOfDay, currentTime)
  if (hourOfDay == currentTime){
    $(this).addClass("present")
  }
})
//compares if the hourOfDay meets the currentTime and if it does assigns it the present class.




  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  const todayDate = dayjs().format("dddd, MMMM D YYYY");
  $("#currentDay").text(todayDate);
});
