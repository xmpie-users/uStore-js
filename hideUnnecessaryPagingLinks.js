<script type="text/javascript">
// Hide paging links if only one page
$(window).load (function () {
  if ($("#pager1").length || $("#pager2").length) {
    if(($("#result").html().length==0) || (!$("#pager1").find(".prev").attr("href") && !$("#pager1").find(".next").attr("href")) || (!$("#pager2").find(".prev").attr("href") && !$("#pager2").find(".next").attr("href"))) {
      $("#pager1").hide();
      $("#pager2").hide();
    }
  }    
});
</script>
