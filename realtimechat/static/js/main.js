console.log("DEBUG: js/script.js loaded");

/* chat_page.html - Form handler */
$( "form#chatForm" ).submit(function(e) {
  var messageBox = $( "input#messageBox" );

  var message = messageBox.val();

  // TODO: If textbox is empty, show error message

  // Empty messageBox
  messageBox.val(''); // FIXME: Fix this problem with the required thing on the input (Video: https://storage.theel0ja.info/theel0ja-img-up/ShareX/2018/03/2018-03-02_23-26-18.mp4)

  e.preventDefault();
});