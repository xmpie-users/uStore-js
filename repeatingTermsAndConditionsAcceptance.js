<script type="text/javascript">

var mainareaContent = "";
var langContent = "<h1>Terms & Conditions</h1><br><iframe src='images/<skin folder name>/terms_and_conditions.html' width='80%' height='300' name='Terms'></iframe><br><br><input type='checkbox' name='readterms' id='readterms' value='yes' OnChange='return validateAgreed();'>I Agree<br><br><div onClick='showOldContent()'><a class='XmpImageButton XmpieThemeColorButton' id='nextButton' href='#' style='cursor:default' disabled>Next</a></div>";

$(document).ready(function() {
  var pathname = window.location.pathname.toLowerCase();
  if (readCookie("noShow")!="true" && pathname.indexOf("checkoutfinal.aspx") > 0) {
    createCookie("noShow", "true");
    mainareaContent = $(".mainareaFullWidth").html();

    var address = $(".dropDownFlags a").attr("style");
    if (address) {
      var flags = address.indexOf("flags")+6;
      var gif = address.indexOf(".gif");
      var countryFlag = address.substr(flags, gif-flags);

      switch (countryFlag) {
        case "US":
          langContent = langContent;
          break;
        case "GB":
          langContent = "<h1>Terms and Conditions</h1><br><iframe src='images/<skin folder name>/terms_and_conditions_enGB.html' width='80%' height='300' name='TCFrame'></iframe><br><br><input type='checkbox' name='readterms' id='readterms' value='yes' OnChange='return validateAgreed();'>I Agree<br><br><div onClick='showOldContent()'><a class='XmpImageButton XmpieThemeColorButton' id='nextButton' href='#' style='cursor:default' disabled>Next</a></div>";
          break;
        case "FR":
          langContent = "<h1>Termes et conditions</h1><br><iframe src='images/<skin folder name>/terms_and_conditions_frFR.html' width='80%' height='300' name='TCFrame'></iframe><br><br><input type='checkbox' name='readterms' id='readterms' value='yes' OnChange='return validateAgreed();'>je suis d'accord<br><br><div onClick='showOldContent()'><a class='XmpImageButton XmpieThemeColorButton' id='nextButton' href='#' style='cursor:default' disabled>Next</a></div>";
          break;
        case "DE":
          langContent = "<h1>Geschäftsbedingungen</h1><br><iframe src='images/<skin folder name>/terms_and_conditions_deDE.html' width='80%' height='300' name='TCFrame'></iframe><br><br><input type='checkbox' name='readterms' id='readterms' value='yes' OnChange='return validateAgreed();'>Ich stimme zu<br><br><div onClick='showOldContent()'><a class='XmpImageButton XmpieThemeColorButton' id='nextButton' href='#' style='cursor:default' disabled>Next</a></div>";
          break;
      }
    }

    $(".mainareaFullWidth").html(langContent);
    $(".mainAreaFooterFullWidth").hide();
  }
});

function showOldContent() {
  if ($("#readterms").is(':checked')) {
    $(".mainareaFullWidth").html (mainareaContent );
    $(".mainAreaFooterFullWidth").show();
  }
} 

function validateAgreed() {
  if ($("#readterms").is(':checked'))
    $("#nextButton").attr("disabled", false).css("cursor","pointer");
  else
    $("#nextButton").attr("disabled", true).css("cursor","default");
}	

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));    // change 24 to your desired no of hours to expire
    var expires = "; expires="+date.toGMTString();
  }
  else
    var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}
</script>
