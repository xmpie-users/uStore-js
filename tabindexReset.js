$(function () {
	var tabindex = 1;
	$('input,select').each(function () {
		if (this.type != "hidden") {
			var $input = $(this);
			$input.attr("tabindex", tabindex);
			tabindex++;
		}
	});
});
