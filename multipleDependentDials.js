<script type="text/javascript">
var optionArr = new Array();

//Define an array of the required dependencies
//Parameter explanation: optionArr[0] =["Parent DUC ID", 0 (hide) or 1 (show), "Child DUC ID"];
//You will need to modify the examples below to set your parent/child dial user control ids and whether to show or hide the child
optionArr[0] =["Duc11490", 1, "#Dial_11486"];
optionArr[1] =["Duc11490", 1, "#Dial_11488"];
optionArr[2] =["Duc11646", 1, "#Dial_11647"];
optionArr[3] =["Duc11646", 0, "#Dial_11648"];

function setVisibility () {
  for (var i=0; i < optionArr.length; i++) {
    if ( $("#ctl00_cphMainContent_ucDialCustomization_" +optionArr[i][0] + "_OptionsListRadio_" +optionArr[i][1]).prop("checked")) {
			$(optionArr[i][2]).show();
    } else {
      $(optionArr[i][2]).hide();
      hideAllDependency (optionArr[i][2].replace ("#Dial_", "Duc"));
    }
  }
}

function hideAllDependency (ducName) {
  for (var i=0; i < optionArr.length; i++) {
    if ( optionArr[i][0] == ducName) {
      if ( $("#ctl00_cphMainContent_ucDialCustomization_" +optionArr[i][0] + "_OptionsListRadio_" +optionArr[i][1]).prop("checked")) {
        $("#ctl00_cphMainContent_ucDialCustomization_" +optionArr[i][0] + "_OptionsListRadio_" +optionArr[i][1]).prop("checked", false);
      }
      $(optionArr[i][2]).hide();
      hideAllDependency (optionArr[i][2].replace ("#Dial_", "Duc"));
    }
  }
}

$(document).ready(function(){
  setVisibility();
	$(":radio").click(function() {
    setVisibility();
  });
});

</script>
