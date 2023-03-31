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

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //

    function colorHour() {
      var timeNow = dayjs().format("H")
  
      var container = $(".container-lg").children()
  
      var blockBg = $(".description")
  
      for (let  i = 0;  i < container.length;  i++) {
  
        var containerLoop = container[i]
        var hourDiv = $(containerLoop).data("hour")
        intHourDiv = parseInt(hourDiv)
        intTimeNow = parseInt(timeNow)
  
        console.log(hourDiv < intTimeNow)
   
          if (hourDiv < intTimeNow) {
            //past, purple grey
            blockBg.css({"background-color": "#e3d1e0"})
    
          } else if (hourDiv > intTimeNow) {
            //future, blue
            blockBg.css({"background-color": "#9dc3f5"})
    
          } else {
            //present, green 
            blockBg.css({"background-color": "#bdf588"})
          }
    }
  }

    colorHour()

    // var timeNow = dayjs().format("H")
    // var timeNow = 14

    // var container = $(".container-lg").children()

    // var blockBg = $(".description")

    // for (let  i = 0;  i < container.length;  i++) {

    //   var containerLoop = container[i]
    //   var hourDiv = $(containerLoop).data("hour")
    //   intHourDiv = parseInt(hourDiv)
    //   intTimeNow = parseInt(timeNow)

    //   console.log(hourDiv < intTimeNow)
 
    //     if (hourDiv < intTimeNow) {
    //       //past, purple grey
    //       blockBg.css({"background-color": "#e3d1e0"})
  
    //     } else if (hourDiv > intTimeNow) {
    //       //future, blue
    //       blockBg.css({"background-color": "#9dc3f5"})
  
    //     } else {
    //       //present, green 
    //       blockBg.css({"background-color": "#bdf588"})
    //     }


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