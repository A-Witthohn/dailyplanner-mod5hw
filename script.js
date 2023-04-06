$(function () {
  //adds event listener on click for save button
  $('.saveBtn').on('click', function () {
    var savedText = $(this).siblings('.description').val();
    console.log(savedText)
    //logs text saved in description
    var id = $(this).parent().attr('id');
    console.log(id)
    //logs ID of which hour the text above was saved
    localStorage.setItem(id, savedText);
    var locallySavedText = localStorage.getItem(id);
    console.log("Saved value for " + id + " is " + locallySavedText);
    //logs the value of local storage by id
    //sets parent to ID and siblings to description. This means the savedText is the value shown inside description, when clicked it stores the text in to the appropriate ID
  });

  //adds for loop to load previous saved text for all 24 hrs
  for (var i = 0; i <= 24; i++) {
    var keyId = 'hour-' + i;
    var loadText = localStorage.getItem(keyId);
     //sets parameters of loop for loadText to pull from the correct stored location
    if (loadText == null) {
      console.log(keyId + " nothing found local storage")
    }
    else if (loadText !== "") {
      $('#' + keyId + ' .description').val(loadText);
      console.log(loadText + " found saved in " + keyId)
      //checks if text is empty, if it is not empty it loads/sets the text, returning it for the proper ID/description based on the value of loadText
    }
  }


  var currentTime = dayjs().hour();
  console.log(currentTime + " current hour in military time")
  //logs the hour of the day in Military Time

  var day = $(".time-block")
  console.log(day, "logging hours of the day")
  //logs the entire day as an object array. specifically showing each div of time (hour - x ) as 1 part of the array

  day.each(function () {
    var hourOfDay = $(this).attr("id").split("-")[1];
    //takes the id of (this) array and splits it into a new array without the (hour -) 
    //beginning portion of the ID,  assigning it the new value of (hourOfDay)

    console.log(hourOfDay, currentTime,  "  checking if hourOfDay = currentTime")
    if (hourOfDay == currentTime) {
      $(this).addClass("present")
      console.log("present class applied, hourOfDay = currentTime ")
    }
    //assigns present to class if hourOfDay loosely equals currentTime
    else if (hourOfDay < currentTime) {
      $(this).addClass("past")
      console.log("past class applied, hourOfDay < currentTime")
    }
    //assigns past to class to hours that are less than currentTime
    else if (hourOfDay > currentTime) {
      $(this).addClass("future")
      console.log("future class applied, hourOfDay > currentTime")
    }
    //assigns future to class if hours are greater than currentTime
  })
  //compares if the hourOfDay meets the currentTime and if it does assigns it the present class.

  const todayDate = dayjs().format("dddd, MMMM D YYYY");
  $("#currentDay").text(todayDate);
});
