<script type="text/javascript">
$("document").ready(function() {
  // only if there is a link to "update thumbnail" on the page
  if ($("#ctl00_cphMainContent_ucDialCustomization_btnUpdateThumbnails").length > 0)
  { 
    //set form input tags keyup event to refresh the preview after 4 second delay
    $("input").keyup(function() {
      wait(
        function(){
          if ($("#ctl00_cphMainContent_ucDialCustomization_btnUpdateThumbnails").length > 0) {
            document.location.href = $("#ctl00_cphMainContent_ucDialCustomization_btnUpdateThumbnails").attr("href"); 
          }
        },
        4000); //4000ms = 4 seconds
    });
    //set form input tags onchange event to refresh the preview after 4 second delay
    $(".Duc[dialid] [tabindex]").change(function() {
      wait(
        function(){
          if ($("#ctl00_cphMainContent_ucDialCustomization_btnUpdateThumbnails").length > 0) {
            document.location.href = $("#ctl00_cphMainContent_ucDialCustomization_btnUpdateThumbnails").attr("href"); 
          }
        },
        4000); //4000ms = 4 seconds
    });
  }
});
//this is a helper function used to delay the callback for x milliseconds.
var wait = function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  }  
}();
</script>
