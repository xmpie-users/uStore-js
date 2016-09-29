<script type="text/javascript">
$(document).ready(function() { 

  // Auto Calculate Price ID's
  var ddlAutoCalc = ["10809"]; // Dropdown lists
  var txtAutoCalc = ["10810"]; // Text fields

	var pathname = window.location.pathname.toLowerCase(); 

	if (pathname.indexOf("orderfinalstep.aspx") > 0) { 
		// if drop down menu price steps
		$("#ctl00_cphMainContent_ddlNumCopies").on('change', function() {
			autoRecalculate(); 
		});
		// if only text input for quantity
		$("#ctl00_cphMainContent_txtNumCopies").on('input', function() {
			autoRecalculate(); 
		});

    $.each(ddlAutoCalc, function( index, value ) {
      $("#ctl00_cphMainContent_ctl11_Duc" + value + "_DropDownList").on('change', function() {
        autoRecalculate(); 
      });
    });
              
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
