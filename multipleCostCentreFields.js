<script type="text/javascript">
$(document).ready(function() {
  if ($(".ClearingConfigCell")) {
    //hide the default costcentre field and label
    $("#ctl00_cphMainContent_ctlClearingUserData10000_lblCostCenter").hide();
    $("#ctl00_cphMainContent_ctlClearingUserData10000_txtCostCenter").hide();

    //append your custom form fields
    $(".ClearingConfigCell").append("Caption 1: <input type='text' id='customField1' maxlength='5' value='' class='customCostCenterField'><br>");
    $(".ClearingConfigCell").append("Caption 2: <input type='text' id='customField2' value='' class='customCostCenterField'><br>");
    $(".ClearingConfigCell").append("Caption 3: <input type='text' id='customField3' value='' class='customCostCenterField'>"); 

    //add some validation for your custom fields if needed
    validateClearingCustomFields()

    //now when your custom fields are changed, set the default costcenter form field to be custom field values separated by pipes
    $(".customCostCenterField").keyup(function () {
      $("#ctl00_cphMainContent_ctlClearingUserData10000_txtCostCenter").val ( $("#customField1").val() + "||" + $("#customField2").val() + "||" + $("#customField3").val() );
      validateClearingCustomFields()
    });
  }
});

function validateClearingCustomFields() {
{
 if ($("#customField1").val() != "")
    $("#ctl00_cphMainContentFooter_btnCheckout").show();
  else
    $("#ctl00_cphMainContentFooter_btnCheckout").hide();
  }
}
</script>
