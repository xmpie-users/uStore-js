<script type="text/javascript">
$(document).ready(function() { 

  // product property dial ids:
  var ddlAutoCalc = ["10809"]; // array of Dropdown list dial ids
  var txtAutoCalc = ["10810"]; // array of Text field dial ids

  var pathname = window.location.pathname.toLowerCase(); 
  if (pathname.indexOf("orderfinalstep.aspx") > 0) { 
    // update if dropdown quantity changes
    $("#ctl00_cphMainContent_ddlNumCopies").on('change', function() {
      autoRecalculate(); 
    });
  
    // update if text input quantity changes
    $("#ctl00_cphMainContent_txtNumCopies").on('input', function() {
      autoRecalculate(); 
    });
    
    //update if drop-down list product properties change
    $.each(ddlAutoCalc, function( index, value ) {
      $("#ctl00_cphMainContent_ctl11_Duc" + value + "_DropDownList").on('change', function() {
        autoRecalculate(); 
      });
    });
    
    //update if text product properties change
    $.each(txtAutoCalc, function( index, value ) {
      $("#ctl00_cphMainContent_ctl11_Duc" + value + "_StringTextBox").on('blur', function() {
        autoRecalculate(); 
      });
    });          
  }
});

function autoRecalculate () {
	if ($("#ctl00_cphMainContent_btnRecalculate").attr("href").length > 0)    
		window.location.href = 'javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions("ctl00$cphMainContent$btnRecalculate", "", true, "", "", false, true))';
}
</script>
