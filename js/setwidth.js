function setSize(element) {
	var eWidth;
	var rWidth;
	var eHeight;
	var nHeight;
	eWidth = $(element).width();
	eHeight = $(element).height();
	nHeight = eWidth / 1.77;

	if (nHeight > eHeight) {
		rWidth = eHeight * 1.77;
	} else{
		rWidth = eWidth;
	};
	
	return rWidth;
}

function setSizeClock(element) {
			var eWidth;
			var halfWidth;
			var rWidth;
			var eHeight;
			eWidth = $(element).width();
			halfWidth = eWidth / 2;
			eHeight = $(element).height();
		
			if (eHeight < halfWidth) {
				rWidth = eHeight;
			} 
			else{
				rWidth = halfWidth;
			};
	
			return rWidth;
		}