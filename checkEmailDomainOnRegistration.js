<script type="text/javascript">
$(document).ready(function() {
    var interval = setInterval(() => {
        if ($('#ctl00_cphMainContent_btnRegister').length) {
          clearInterval(interval)
      }
        $('#ctl00_cphMainContent_btnRegister').attr("href", "javascript:void(0)")
        
        $('#ctl00_cphMainContent_btnRegister').click(function (event) {
            var user_email=$('#ctl00_cphMainContent_ucUserRegistration_txtEmail').val();
            var emailReg = /^([a-zA-Z0-9\._-])*@vancity.com$/; //CHANGE THE REQUIRED EMAIL DOMAIN
            if(!emailReg.test(user_email)) {
                alert('Please enter a valid Vancity email'); //CHANGE THE NECESSARY COMPANY NAME
            } else {
                WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions("ctl00$cphMainContent$btnRegister", "", true, "RegisterValidation", "", false, true))
            }
        })
    }, 200);
});
</script>
