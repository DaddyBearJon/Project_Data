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
