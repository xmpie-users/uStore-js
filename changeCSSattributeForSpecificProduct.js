<script type="text/javascript">
  $(document).ready(function(){
    var pageTitle = document.title;
    if (pageTitle = "YOUR TITLE") //change to the title of your product's page
    {
      //change to the id or class of the object you want to change, and set the requied css attribute
      $("#contentArea").css("background","url(/uStore/Imags/skinName/image.jpg) no-repeat 0 0");
    } else {
      $("#contentArea").css("background-color","#ffffff");
    }
});
</script>
