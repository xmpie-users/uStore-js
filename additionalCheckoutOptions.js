	<script>
  //This function is called and looks from the OrderFinalStep page of uStore.
  //Use this if you want to add a custom field to your checkout that will show in Special Instructions
  //It uses a custom dropdown that is prepended to the special instructions
  //Even if the user comes back to the product, it separates out the special instructions and the custom field
  //This using jQuery pretty heavily, so your theme will need to call it (if it doesn't already)
  
  checkoutOptions();
  //This function hides the checkout button until a cost center is selected
	//and merges what is selected in the cost center into the Special Instructions
	//submitted when purchases a product.
	function checkoutOptions(){
		if (window.location.href.indexOf("OrderFinalStep.aspx") > -1) {
      //Checkout button ID
			$checkoutButton = $('#ctl00_cphMainContentFooter_WizardStepsNextPrev1_ButtonFinish');
			$checkoutButton.fadeOut();

			//If the user is editing the product, it ensures the cost center part of the Special Instructions is
			//left out. This causes problems if the user uses ' ~|~ ', but this is unlikely 
			try{
				$splitUp = $('textarea').val().split(" ~|~ ");
				$('textarea').val($splitUp[1]);
			}
			catch(e){
				console.log("Can't find the text box",e);
			}
			
			//Finds the appropriate Dial to prepend to
      //This is optional, but I wanted the location to be right above the special instructions
      //The dial prepend can be just about anywhere
			$dialToPre = $('.FormLabel:contains("Special Instructions")').parent().parent().parent().parent().parent();
			
			//Prepends the dropdown box to the Dial giving the selections options
			$dialToPre.prepend('Please select your custom note <span style=" color:red;">(Required)</span>: <select id="customSelect"><option></option><option>Custom 1</option><option>Custom 2</option><option>Custom 3</option></select>');

			//Whenever the cost center is changed from blank to something, fade in the checkout button
			//If it ever goes back to blank, also fadeOut the checkout button
			$('#costCenterSelect').on('change', function(){
				if ($(this).val() != ""){
					$checkoutButton.fadeIn();
				}
				else{
					$checkoutButton.fadeOut('fast');
				}
			});

			//When the checkout button is clicked, fade out most of the checkout screen and put
			//the customSelect value into the special instructions box to submit both.
      //**Another option you could do is create a separate box from the special instructions one
      //and hide the original then merge the two (customSelect and new special instructions) into the
      //hidden original one**
			$checkoutButton.on('click', function(){
				$('#tblOrderFinalStepContent').hide();//Optional, but it hides the box from showing the new content in the box
        //Gets the con
				$customInfo = $('#customSelect').val();
				$specialInstructions = $('textarea').val(); //textarea works unless you add ANOTHER textarea on the page
        //If the instructions contain something send both the customInfo and original Special Instructions
				if ($specialInstructions != ""){
					$('textarea').val($customInfo  + " ~|~ " + $specialInstructions);
				}
        //Otherwise, just send the customInfo (in this case, the customInfo we were using was required)
				else{
					$('textarea').val($customInfo);
				}

			});

		}
	}
  </script>
