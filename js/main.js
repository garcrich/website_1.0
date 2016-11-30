$(document).ready(function() {
		$(function() {
			$('#showPhoneNav').click(function() {
				$("#phoneNav").slideToggle("fast")
		}); //end of myNav
	}); // end showPhonNav

	$(function(){ /* on document load */
	    $('img').click(function(){ /* click handler for images */
	        if($(this).attr('src') === 'img/head_foot/ham_icon.png'){ /* check source */
	            $(this).attr('src','img/head_foot/x_out.png'); /* change source */
	        }
	        else if ($(this).attr('src') === 'img/head_foot/x_out.png') {
	            $(this).attr('src','img/head_foot/ham_icon.png'); /* change source */
	        }
	    });
	});
}); //end of ready