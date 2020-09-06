$(document).ready(function(){
	$('#cls').change(function(){

		var x = $('#cls').val();
		if (x == '1') {
			//$('.fs').hide();
			//$('#ds').css("display", "none !important");
			// alert('hello');
			$('.fs').attr('style', 'display : none !important');
			$('#de').attr('style', 'display : block !important');
			$('#df').attr('style', 'display : block !important');
			$('#dj').attr('style', 'display : block !important');
		}
		if (x == '2') {
			$('.fs').attr('style', 'display : none !important');
			$('#da').attr('style', 'display : block !important');
			$('#dg').attr('style', 'display : block !important');
			$('#dh').attr('style', 'display : block !important');
			$('#di').attr('style', 'display : block !important');
			$('#dl').attr('style', 'display : block !important');
		}
		if (x == '3') {
			$('.fs').attr('style', 'display : none !important');
			$('#db').attr('style', 'display : block !important');
			$('#dk').attr('style', 'display : block !important');
			//$('#dc').attr('style', 'display : block !important');
			//$('#dd').attr('style', 'display : block !important');
		}
		if (x == '4') {
			$('.fs').attr('style', 'display : none !important');
			$('#dc').attr('style', 'display : block !important');
		}
		// if (x == '5') {
		// 	$('.fs').attr('style', 'display : none !important');
			
		// }
		// if (x == '6') {
		// 	$('.fs').attr('style', 'display : none !important');
			
			
		// }
		else{
			$('.none').show();
		}
		//$('#').css("display", "block");

	});
});