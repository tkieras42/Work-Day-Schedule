$(function () {
  // elements
  var todaysDate = $('#currentDay');
  var hoursContainer = $('.container-lg');
  
  // variables
  var now = dayjs().format('MMMM/DD/YYYY');
  
  // functions
  function setDate(date){
    todaysDate.text(date);
  }
  function whatColor(){
    
    var time = dayjs().format("H");
    for(i = 0; i < 9; i++){
      if(time > (i + 9)){
      hoursContainer.children().eq(i).addClass("past");
      }
      else if(time < (i + 9)){
      hoursContainer.children().eq(i).addClass("future");      
      }
      else if(time == (i + 9))
      hoursContainer.children().eq(i).addClass("present");
    }
  }

  function saveWords(event){
    
    var textE1 = $(event.currentTarget);
    var text = textE1.value;
     if(textE1.is('#hour-9')){
      localStorage.setItem("hour-9", text);
     }  
     else if(textE1.is('#hour-10')){
      localStorage.setItem("hour-10", text);
     }
     else if(textE1.is('#hour-11')){
      localStorage.setItem("hour-11", text);
     }
     else if(textE1.is('#hour-12')){
      localStorage.setItem("hour-12", text);
     }
     else if(textE1.is('#hour-13')){
      localStorage.setItem("hour-13", text);
     }
     else if(textE1.is('#hour-14')){
      localStorage.setItem("hour-14", text);
     }
     else if(textE1.is('#hour-15')){
      localStorage.setItem("hour-15", text);
     }
     else if(textE1.is('#hour-16')){
      localStorage.setItem("hour-16", text);
     }
     else if(textE1.is('#hour-17')){
      localStorage.setItem("hour-17", text);
     }
    
     
  }
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
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  hoursContainer.on('click', '.btn', saveWords);
  setDate(now);  
  whatColor();
});
