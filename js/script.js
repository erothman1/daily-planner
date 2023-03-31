// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  //Click event for save button to save time and todos to local storage
    buttonListEl = $(".saveBtn")

    buttonListEl.on("click", function(event) {
      
      var button = $(event.target)

      var todo = button.prev().val()
      var time = button.parent().attr("id")

      localStorage.setItem(time, todo)

    })

    //Conditional statement to change color of timeblock based on time of day
    var timeNow = parseInt(dayjs().format("H"))

    $(".time-block").each(function() {

      var hourDiv = parseInt($(this).attr("id"))
      
      if (hourDiv < timeNow) {
        //grey purple color
        $(this).addClass("past")

      } else if (hourDiv === timeNow) {
        //green
        $(this).addClass("present")

      } else {
        //blue
        $(this).addClass("future")
      }
    })

    //Puts todos on page from local storage when page is refreshed
    for (var i = 9; i < 18; i ++) {
      $("#" + i).children(1).val(localStorage.getItem(i))
    }

    //Puts exact time to page counting down from seconds 
    function currentTime() {

      setInterval(function() {

      $('#currentDay').text(dayjs().format('MMMM DD, YYYY hh:mm:ss A'))

      }, 1000)
      }
    
    currentTime()

  })