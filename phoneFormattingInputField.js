/* 
**Description:
Include the javascript below the *Formatting Phones - Begin* comment below in the store.

This code is for uStore's HTML Generic dials to support formatting phone numbers at the time of the user input.  The idea is provide the user with the most accurate looking version of the text at the time of input.  If the phone format is critical to the client, then this needs to be used in conjunction with other validation or scripting such as formatting in uPlan.

*/

/*
**Example HTML Generic dial usage:
The callback function should match the second parameter of the setValPhone function.  The id names of the callback function, the inline function, and the input's id need to be unique for the product.

Callback Function set to:
passValuePhone1

Markup set to:
<ul><li><dl><dt class="dtiName"><span  class="FormLabel">#DIAL_DISPLAY_NAME#</span></dt><dd class="dtiValue" style="display:block;">

<INPUT TYPE="TEXT" class="FormField dtiStringTextBox" ID="myPhone1" VALUE="#DIAL_VALUE#" SIZE="30" MAXLENGTH="15" onchange="setThePhone1();return false;">

</dd></dl></li></ul>

<script type="text/javascript">
function setThePhone1() {
  setValPhone('myPhone1','passValuePhone1','formatPhonePeriods');
}
setThePhone1();
</script>

*/


/* Formatting Phones - Begin */
function formatPhoneParens(s) {
	return formatPhoneWithParams(s, "(", ") ", "-");
}
function formatPhoneDC(s) {
	return formatPhoneWithParams(s, "(", ") ", "-");
}
function formatPhonePeriods(s) {
	return formatPhoneWithParams(s, "", ".", ".");
}
function formatPhoneDashes(s) {
	return formatPhoneWithParams(s, "", "-", "-");
}
function formatPhoneSpaces(s) {
	return formatPhoneWithParams(s, "", " ", " ");
}
function formatPhoneNoFormat(s) {
	return s;
}

function formatPhoneWithParams(s, prefix, suffix, divider) {
	// regexp to remove all non-numeric
	s = s.replace(/[^\d]/g, "");
	if (s.length == 11 & s.charAt(0) == "1") {
		s = prefix + s.substring(1, 4) + suffix + s.substring(4, 7) + divider + s.substring(7, 11);
	} else if (s.length == 10) {
		s = prefix + s.substring(0, 3) + suffix + s.substring(3, 6) + divider + s.substring(6, 10);
	}
	return s;
}

function setValPhone(elemID, funcSet, funcFormat) {
	var myBox = document.getElementById(elemID);
	var myVal = eval(funcFormat + '( "' + myBox.value + '" );');
	if (myVal == undefined)
		myVal = '';

	if (myVal < ' ') {
		eval(funcSet + '("")');
	} else {
		eval(funcSet + '("' + myVal + '")');
	}
	myBox.value = myVal;
}

function setValPhoneWithPrefix(elemID, prefixElemID, funcSet, funcFormat) {
	var myBox = document.getElementById(elemID);
	var myPrefix = document.getElementById(prefixElemID);
	var myOrigVal = myBox.value;
	var myCurrentVal = cleanPhonePrefix(myBox, myPrefix);
	var myVal = eval(funcFormat + '( "' + myCurrentVal + '" );');
	if (myVal == undefined)
		myVal = '';
	var myPrefixVal = myPrefix.value;

	//now try to set the prefix
	for (i = 0; i < myPrefix.length; i++) {
		var tmpVal = myPrefix.options[i].value;
		if (tmpVal > '' && myOrigVal.match(tmpVal)) {
			myPrefixVal = tmpVal;
			myPrefix.options[i].selected = true;
		}
	}

	if (myVal < ' ') {
		eval(funcSet + '("")');
	} else {
		eval(funcSet + '("' + myPrefixVal + myVal + '")');
	}
	myBox.value = myVal;

}

function cleanPhonePrefix(elem, prefixElem) {
	var txtPhoneVal;
	try {
		if (elem != null) {
			txtPhoneVal = elem.value;
			for (i = 0; i < prefixElem.length; i++) {
				txtPhoneVal = txtPhoneVal.replace(prefixElem.options[i].value, '');
			}
		}
	} catch (err) {}
	return txtPhoneVal
}
/* Formatting Phones - End */