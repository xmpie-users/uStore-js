<script>
//This function is useful for hiding/showing certain Campaign Dials based on a previous Campaign Dial.
//In particular, this uses a dropdown value as the trigger to show a dial that has been hidden.

//This extensively using jQuery, so be sure your theme is using it. If not, look up how to incorporate it into your
//uStore. If you are unfamiliar, just know that IDs are denoted with a # and classes a . (period) and must be inside
//"" or ''.

//EXAMPLE: A dropdown has choices about a business card. If the user selects a particular location, you want another
//option box (Oakland, Downtown, Shadyside, etc.) for them to fill out on the card. The location dropdown (or text) 
//needs to be Pittsburgh (or PITT) for the other option to appear. The following code shows this example.
$(function() {

  //What triggers the function; This ID has to be the ACTUAL dropdown box, but just it's container
  $triggerSelect = $('#idOfLocationDropdown'); //Should be something like #ctl00...DropDownList
  
  //What dial to show/hide
  $hiddenDial = $('#idOfTheDial'); //Should be something like #Dial_####
  
  //Function that triggers on when $triggerSelect is changed. It then controls the visibility of the $hiddenDial when
  //the $trigger select is equal to "PITT" (Just put the condition of when you want the hidden dial to appear where "PITT" is)
  dropdownTrigger($triggerSelect,$hiddenDial,"PITT");
  
  //Noted, you can chain these together if you want multiple dials to be hidden/appear on certain conditions
  //EXAMPLE: dropdownTrigger($triggerSelect,$hiddenDial2,"CHI");
      
  //The dropdown fadeIn and fadeOut function based on a trigger and a value.
	//Trigger is the dropdown that triggers the change
	//Hidden is the dial that needs to be hidden from view and set to appear again after when the trigger 
  //value equals the parameter val (hidden value = val)
	function dropdownTrigger(trigger,hidden,val) {
		//Hides to ensure it is hidden if the val changes
		hidden.hide();
		//triggers this function on change
		trigger.change(function(){
			//Fade Out hidden parameter
			hidden.fadeOut();
			//If the trigger value is equal to the parameter value, fade in the hidden dial
			if(trigger.val() == val){
				hidden.fadeIn();
			}
		});
	}
});

</script>
