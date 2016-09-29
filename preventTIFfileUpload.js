<script type="text/javascript"> 
var myDialId = 10342; //change this to your graphic dial id
var lastValue = ''; 
$(document).ready(function() { 
  window.setInterval(function() { 
    if(lastValue == '' || lastValue != $("#previewBig_"+myDialId).attr("fileextension")) { 
      lastValue = $("#previewBig_"+myDialId).attr("fileextension"); 
      if(lastValue == '.TIF') { 
        alert('TIF File Types are not allowed on this product.'); 
      } 
    } 
  }, 500); 
}); 
</script> 
