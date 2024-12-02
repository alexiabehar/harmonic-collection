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
      $("#tessbox").draggable();
      $( "#tessbox" ).on( "mousedown", function() {
        currentZIndex +=2
        $(this).css("z-index", currentZIndex);
      } );
  } );

    $(function() {
      $("#sadesbox").draggable();
      $( "#sadesbox" ).on( "mousedown", function() {
        currentZIndex +=2
        $(this).css("z-index", currentZIndex);
      } );
  } );

   $(function() {
      $("#johnsbox").draggable();
      $( "#johnsbox" ).on( "mousedown", function() {
        currentZIndex +=2
        $(this).css("z-index", currentZIndex);
      } );
  } );
  
  $(function() {
    $("#janesbox").draggable();
    $( "#janesbox" ).on( "mousedown", function() {
      currentZIndex +=2
      $(this).css("z-index", currentZIndex);
    } );
} );

$(function() {
  $("#marksbox").draggable();
  $( "#marksbox" ).on( "mousedown", function() {
    currentZIndex +=2
    $(this).css("z-index", currentZIndex);
  } );
} );

$(function() {
  $("#johnsbox").draggable();
  $( "#johnsbox" ).on( "mousedown", function() {
    currentZIndex +=2
    $(this).css("z-index", currentZIndex);
  } );
} );

$(function() {
  $("#alexsbox").draggable();
  $( "#alexsbox" ).on( "mousedown", function() {
    currentZIndex +=2
    $(this).css("z-index", currentZIndex);
  } );
} );

$(function() {
  $("#cardback").draggable();
  $( "#cardback" ).on( "mousedown", function() {
    currentZIndex +=2
    $(this).css("z-index", currentZIndex);
  } );
} );

$(function() {
  $("#openmatchbox").draggable();
  $( "#openmatchbox" ).on( "mousedown", function() {
    currentZIndex +=2
    $(this).css("z-index", currentZIndex);
  } );
} );

$(function() {
  $("#cardfront").draggable();
  $( "#cardfront" ).on( "mousedown", function() {
    currentZIndex +=2
    $(this).css("z-index", currentZIndex);
  } );
} );

$(function() {
  $("#matchbox").draggable();
  $( "#matchbox" ).on( "mousedown", function() {
    currentZIndex +=2
    $(this).css("z-index", currentZIndex);
  } );
} );


  });
  
   