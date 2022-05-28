// You can include your own javascript here
// alert("hello, your main.js file was added properly.");
console.log("Logging from main.js, it was loaded.");

$(document).ready(function() {
    //hide all of the hisory items to start.
    $('.history-item').hide();
    
    //code to respond to clicking one of the buttons in div.filters
    $('.history-title').click(function() {
      // toggle show and hide
      $(this).next('.history-item').toggle(300);
      $(this).toggleClass('open')
    return false;
    }); //end history type.click()
  }); //end document.ready()