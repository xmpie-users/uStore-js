<script type="text/javascript"> 
  $(document).ready(function() { 
    var pageTitle = $(document).find("title").text().substring(0,24); 
    if (pageTitle == "Checkout - Order Summary") { 
      $("#ctl00_cphMainContent_ddlApprover").html($("#ctl00_cphMainContent_ddlApprover option").sort(function (a, b) { 
        return a.text == b.text ? 0 : a.text < b.text ? -1 : 1 
      })) 
    } 
  }); 
</script>
