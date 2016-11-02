var divBtnUpdateThumbnailsName = "#ctl00_cphMainContent_ucDialCustomization_btnUpdateThumbnails";
var divBtnUpdateThumbnailsExists = false;
var refreshInterval = 4000; //4000ms = 4 seconds
var timeouts = []; //keep track of our timers so that we can cancel them at will

function setupWait(timeInterval) {
    wait(
        function() {
            if (divBtnUpdateThumbnailsExists) {
                document.location.href = $(divBtnUpdateThumbnailsName).attr("href");
            }
        },
        timeInterval
	);
}

//this is a helper function used to delay the callback for x milliseconds.
var wait = function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
        timeouts.push(timer);
    }
}();

//function to cancel Refresh Preview timers when link is clicked
function waitCancel() {
    for (var i = 0; i < timeouts.length; i++) {
        clearTimeout(timeouts[i]);
    }
    timeouts = []; //quick reset of the timer array
}

//reset the additional onclick method to cancel the timers
$(document).ajaxStart(function() {
    if (divBtnUpdateThumbnailsExists) { //make sure to cancel our onblur timers if 
        $(divBtnUpdateThumbnailsName).on("click", waitCancel);
    }
});

$("document").ready(function() {
    //see if the thumbnail div exists
    divBtnUpdateThumbnailsExists = $(divBtnUpdateThumbnailsName).length > 0;

    // only if there is a link to "update thumbnail" on the page
    if (divBtnUpdateThumbnailsExists) {
        //set form input tags keyup event to refresh the preview after refresh interval
        $("input").keyup(function() {
            setupWait(refreshInterval);
        });
        //set form input tags onchange event to refresh the preview after refresh interval
        $(".Duc[dialid] [tabindex]").change(function() {
            setupWait(refreshInterval);
        });
    }
});


