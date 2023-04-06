$(function () {
  //adds event listener on click for save button
  $('.saveBtn').on('click', function() {
    var savedText = $(this).siblings('.description').val();
    var id = $(this).parent().attr('id');
    localStorage.setItem(id, savedText);
    //sets parent to ID and siblings to description means the text is the value shown inside description, when clicked it stores the information in text to the appropriate ID
  });
  
  //adds for loop to load previous saved text for all 24 hrs
  for (var i = 0; i <=24; i++) {
    var keyId = 'hour-' + i;
    var loadText = localStorage.getItem(keyId);
    console.log(keyId,loadText)
  //sets parameters of loop for loadText to pull from the correct stored location
    if (loadText !== "") {
      $('#' + keyId + ' .description').val(loadText);
  //checks if text is empty, if it is not empty it loads/sets the text, returning it for the proper ID/description based on the value of loadText
    }
  }

var currentTime = dayjs().hour();
console.log(currentTime)
//logs the hour of the day in Military Time

var day = $(".time-block")
console.log(day) 
//logs the entire day as an object array. specifically showing each div of time (hour - x ) as 1 part of the array

day.each(function () {
  var hourOfDay = $(this).attr("id").split("-")[1];
  //takes the id of (this) array and splits it into a new array without the (hour -) 
  //beginning portion of the ID,  assigning it the new value of (hourOfDay)

  console.log(hourOfDay, currentTime)
  if (hourOfDay == currentTime){
    $(this).addClass("present")
    console.log("present")
  }
  //assigns present to class if hourOfDay loosely equals currentTime
  else if (hourOfDay < currentTime){
  $(this).addClass("past")
  console.log("past")
  }
  //assigns past to class to hours that are less than currentTime
  else if (hourOfDay > currentTime){
    $(this).addClass("future")
    console.log("future")
  }
  //assigns future to class if hours are greater than currentTime
})
//compares if the hourOfDay meets the currentTime and if it does assigns it the present class.

  const todayDate = dayjs().format("dddd, MMMM D YYYY");
  $("#currentDay").text(todayDate);
});
