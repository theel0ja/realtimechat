console.log("DEBUG: js/script.js loaded");

/* chat_page.html */
$( "form#chatForm" ).submit(function(e) {
  alert("Chat form submitted!");

  e.preventDefault();
});