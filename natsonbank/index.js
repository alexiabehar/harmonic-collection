$(document).ready(function() {

    // Toggle expandable content visibility when clicking on a title bar
    document.body.addEventListener("click", (ev) => {
      const isExpandableTitle = !!ev.target.closest(".expandable__title-bar");
      const expandable = ev.target.closest(".expandable");
  
      if (!isExpandableTitle) {
        return;
      }
  
      expandable.classList.toggle("expandable--open");
    });
  
        // Initialize draggable for all elements with class .card
        let currentZIndex = 100;


    $(function() {
      $("#billysbox").draggable();
      $( "#billysbox" ).on( "mousedown", function() {
        currentZIndex +=2
        $(this).css("z-index", currentZIndex);
      } );
  } );

    $(function() {
      $("#nikksbox").draggable();
      $( "#nikksbox" ).on( "mousedown", function() {
        currentZIndex +=2
        $(this).css("z-index", currentZIndex);
      } );
  } );

   $(function() {
      $("#taylorbox").draggable();
      $( "#taylorsbox" ).on( "mousedown", function() {
        currentZIndex +=2
        $(this).css("z-index", currentZIndex);
      } );
  } );
  
  $(function() {
    $("#taylorsbox").draggable();
    $( "#taylorsbox" ).on( "mousedown", function() {
      currentZIndex +=2
      $(this).css("z-index", currentZIndex);
    } );
} );

$(function() {
  $("#jamesbox").draggable();
  $( "#jamesbox" ).on( "mousedown", function() {
    currentZIndex +=2
    $(this).css("z-index", currentZIndex);
  } );
} );

$(function() {
  $("#michaelsbox").draggable();
  $( "#michaelsbox" ).on( "mousedown", function() {
    currentZIndex +=2
    $(this).css("z-index", currentZIndex);
  } );
} );

$(function() {
  $("#helenasbox").draggable();
  $( "#helenasbox" ).on( "mousedown", function() {
    currentZIndex +=2
    $(this).css("z-index", currentZIndex);
  } );
} );

$(function() {
  $("#cardimage").draggable();
  $( "#cardimage" ).on( "mousedown", function() {
    currentZIndex +=2
    $(this).css("z-index", currentZIndex);
  } );
} );

$(function() {
  $("#postcard").draggable();
  $( "#postcard" ).on( "mousedown", function() {
    currentZIndex +=2
    $(this).css("z-index", currentZIndex);
  } );
} );

$(function() {
  $("#pens").draggable();
  $( "#pens" ).on( "mousedown", function() {
    currentZIndex +=2
    $(this).css("z-index", currentZIndex);
  } );
} );

$(function() {
  $("#sticker").draggable();
  $( "#sticker" ).on( "mousedown", function() {
    currentZIndex +=2
    $(this).css("z-index", currentZIndex);
  } );
} );


  });
  
   