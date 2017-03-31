<script>
  $(document).ready(function(){
    if (window.location.pathname.indexOf("Recipient.aspx") > -1)
    {
    var numRecipients = document.getElementById("ctl00_cphMainContent_lblRecipient_LabelRecipientsNum").innerText;
      if (numRecipients > 100)
	    {
        $("#ctl00_cphMainContentFooter_WizardStepsNextPrev1_ButtonNext").hide();
	    alert ("There are more than 100 recipients!");
        }
    }
  });
</script>
