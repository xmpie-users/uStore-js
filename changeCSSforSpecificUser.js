<script type="text/javascript">
  $("document").ready(function() {
    var customerCompany = xmp.sdk.storeFrontParams.currentUser["companyName"];
    //or use the email domain if you think the customer might edit the company name:
    //var customerCompany = xmp.sdk.storeFrontParams.currentUser["email"].replace(/.*@/, ""); 
    if (customerCompany.toLowerCase() == "xmpie") {
      //change a logo only like this:
      $("#logo").css("background-image", "url(/ustore/images/xmpie.gif)"); 
      //or change the whole store skin like this:
      //$('link[href="/uStore/Images/<current skin folder>/Style.css"]').attr('href','/uStore/Images/<different skin folder>/Style.css');
    }
  });
</script>
