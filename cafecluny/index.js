 document.body.addEventListener("click",(ev)=>{
    const isExplandableTitle = !!ev.target.closest(".expandable__title-bar");
    const expandable = ev.target.closest(".expandable");

   if(!isExplandableTitle){
    return;
   }

   expandable.classList.toggle("expandable--open")

 });
// Initialize draggable for all elements with class .card
let currentZIndex = 100;


$(function() {
  $("#maxsbox").draggable();
  $( "#maxsbox" ).on( "mousedown", function() {
    currentZIndex +=2
    $(this).css("z-index", currentZIndex);
  } );
} );

$(function() {
  $("#angelasbox").draggable();
  $( "#angelasbox" ).on( "mousedown", function() {
    currentZIndex +=2
    $(this).css("z-index", currentZIndex);
  } );
} );

$(function() {
  $("#midorisbox").draggable();
  $( "#midorisbox" ).on( "mousedown", function() {
    currentZIndex +=2
    $(this).css("z-index", currentZIndex);
  } );
} );

$(function() {
$("#dansbox").draggable();
$( "#dansbox" ).on( "mousedown", function() {
  currentZIndex +=2
  $(this).css("z-index", currentZIndex);
} );
} );

$(function() {
$("#sofiasbox").draggable();
$( "#sofiasbox" ).on( "mousedown", function() {
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
$("#postcard").draggable();
$( "#postcard" ).on( "mousedown", function() {
currentZIndex +=2
$(this).css("z-index", currentZIndex);
} );
} );

$(function() {
$("#postcardback").draggable();
$( "#postcardback" ).on( "mousedown", function() {
currentZIndex +=2
$(this).css("z-index", currentZIndex);
} );
} );



