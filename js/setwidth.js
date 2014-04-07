function getVidWidth(element) {
	var eWidth;
	var rWidth;
	var eHeight;
	var nHeight;
	eWidth = jQuery(element).width();
	eHeight = jQuery(element).height();
	nHeight = eWidth / 1.77;

	if (nHeight > eHeight) {
		rWidth = eHeight * 1.77;
	} else{
		rWidth = eWidth;
	};
	
	return rWidth;
}

function getClockWidth(element) {
			var eWidth;
			var halfWidth;
			var rWidth;
			var eHeight;
			eWidth = jQuery(element).width();
			halfWidth = eWidth / 2;
			eHeight = jQuery(element).height();
		
			if (eHeight < halfWidth) {
				rWidth = eHeight;
			} 
			else{
				rWidth = halfWidth;
			};
	
			return rWidth;
		}