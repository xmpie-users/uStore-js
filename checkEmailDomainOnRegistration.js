<script type="text/javascript">
$(document).ready(function() {
  $('#ctl00_cphMainContent_btnRegister').hide();
  $('#ctl00_cphMainContent_ucUserRegistration_txtEmail').focusout(function() {
    $('#ctl00_cphMainContent_ucUserRegistration_txtEmail').filter(function() {
      var user_email=$('#ctl00_cphMainContent_ucUserRegistration_txtEmail').val();
      var emailReg = /^([a-zA-Z0-9\._-])*@anz.com+$/; //CHANGE @anz.com TO BE THE REQUIRED EMAIL DOMAIN
      if(!emailReg.test(user_email)) {
        alert('Please enter a valid ANZ email address'); //CHANGE ANZ TO BE THE NECESSARY COMPANY NAME
        $('#ctl00_cphMainContent_btnRegister').hide();
      } else {
        $('#ctl00_cphMainContent_btnRegister').show();
      }
    })
  });
});
</script>
