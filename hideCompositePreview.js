<script type="text/javascript">
$(document).ready (function () 
{
  var pathname = window.location.pathname.toLowerCase();
  if (pathname.indexOf("filesubmission.aspx") > 0) {
    if ($("#ctl00_containerPageProductName").html().indexOf("Upload Office") >= 0) {
      $("#imgCompositeProofView").hide();
    }
  }
});           
</script>
