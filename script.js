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
    buttonListEl = $(".saveBtn")

    buttonListEl.on("click", function(event) {
      
      var button = $(event.target)
      
      var savedTodos = {
        time: button.parent().attr("id"),
        todo: button.prev().val(),
      }

      var storedTodos = JSON.parse(localStorage.getItem("savedTodos")) || []

      storedTodos.push(savedTodos)

      localStorage.setItem("savedTodos", JSON.stringify(storedTodos))

    })

    //need to make todos stay on page when page is reloaded 

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //

  
    timeNow = dayjs().format("H")

    container = $(".container-lg")

    hourIdEl = container.children().data("hour")

    blockBg = $("textarea")

    if (hourIdEl < timeNow) {
      blockBg.attr("class", "past")
    } else if (hourIdEl > timeNow) {
      blockBg.attr("class", "future")
    }else {
      blockBg.attr("class", "present")
    }

    console.log(hourIdEl)

    // for (var i = 0; hourIdEl.length; i++) {
    //   if (hourIdEl[i] === timeNow) {
    //     blockBg.attr("class", "present")
    //     console.log(hourIdEl[i])
    //   } else if (hourIdEl[i] < timeNow) {
    //     blockBg.attr("class", "past")
    //     console.log(hourIdEl[i])
    //   } else {
    //     blockBg.attr("class", "future")
    //     console.log(hourIdEl[i])
    //   }
    // }



    // timeArray = [$("#hour-9"), $("#hour-10"), $("#hour-11"), $("#hour-12"), $("#hour-13"), $("#hour-14"), $("#hour-15"), $("#hour-16"), $("#hour-17")]


    // //variable for divs with class="time-block"
    // timeBlock = $(".time-block")

    // for (var i = 0; i < timeArray.length; i++) {
    //   if (timeArray[i].text() === timeNow) {
    //     timeArray[i].attr("class", "present")
    //   } else if (timeArray[i].text() < timeNow) {
    //     timeArray[i].attr("class", "past")
    //   } else {
    //     timeArray[i].attr("class", "future")
    //   }
    // }

    // console.log(dayjs().format("hA"))
    


    

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
    function currentTime() {
      setInterval(function() {
      $('#currentDay').text(dayjs().format('MMMM DD, YYYY hh:mm:ss A'))
      }, 1000)
      }
    
    currentTime()

  })