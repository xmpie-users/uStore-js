<script>
//Use this function to customize and target specific products in your store
//You can get product IDs from the uStore menu in the ID column

$(function() {
//Individual Product customizations
productCustomization(xmp.uStore.storeFrontParams.productId);

  //Product customization function
  //Takes the parameter product ID number and evaluates it with if statements
  function productCustomization(currentProduct){
    //IF product is equal to the ID1
    if (currentProduct == ###1){
      //Do something here for this product
    }
    
    //IF product is equal to the ID2
    if (currentProduct == ###2){
      //Do something here for another product
    }
   }
});

</script>
