// KeyboardCopy.js

var client = new ZeroClipboard( document.getElementById("copy-button") );

client.on( "ready", function( readyEvent ) {
  // alert( "ZeroClipboard SWF is ready!" );

  client.on( "aftercopy", function( event ) {
    // alert("Copied text to clipboard: " + event.data["text/plain"] );
  } );
  
} );
