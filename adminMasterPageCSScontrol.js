<script type="text/javascript">
function addCSSRule(sheet, selector, rules, index) {
  if(sheet.insertRule) {
    sheet.insertRule(selector + "{" + rules + "}", index);
  } else {
    sheet.insertRule(selector, rules, index);
  }
}

var LoginName = document.getElementById('ctl00_cphHeader_ctl00_ActiveUserLabel');
var userNameToLock = 'user@company.com'; //set this to be the username you want to prevent access for
if(LoginName.innerHTML == userNameToLock) {                                 
  addCSSRule(document.styleSheets[0], ".HeaderCell.Orders", "display:none"); //this hides the orders tab button
  addCSSRule(document.styleSheets[0], ".HeaderCell.Users", "display:none"); //this hides the users tab button
  addCSSRule(document.styleSheets[0], ".HeaderCell.Reports", "display:none"); //this hides the reports tab button
  addCSSRule(document.styleSheets[0], ".productSetupOptionTile", "display:none !important"); //this hides all the 
     //setup tiles (pricing, properties, customization, inventory, recipeint list,  prepress, etc. 
     //Alternatively you can hide individual tiles by using the relevant id rather than the class.
}
</script>
