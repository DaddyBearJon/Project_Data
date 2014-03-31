// add proxy callback method to parent window for iplayer.episode.addLastPlayed()/updateNowNext() functions
if (!window.iplayer) {
	var iplayer = function() {

		// iplayerIsParent() checks if popup has access to functions in parent window
		function iplayerIsParent() { return (window.opener && window.opener.iplayer && window.opener.iplayer.episode); }

		return {
			episode: {
				addLastPlayed: function(pid,vPid) {

					if (!iplayerIsParent()) return;
					window.opener.iplayer.episode.addLastPlayed(pid,vPid);
				},

				updateNowNext: function(json) {

					if (!iplayerIsParent()) return;
					window.opener.iplayer.episode.updateNowNext(json);
				}
			}
		};
	}();
}

window.onload = function() {

	if (!window.opener || !window.opener.embeddedMedia) return;
	window.opener.embeddedMedia.console.notifyParent(self);
};
var popDetail;
function updatePlayer(detail) {

	popDetail = detail;
	// we use a timeout here to avoid a broswer crash when async LocalConnection methods occur
	setTimeout("load()", 1 );
}	

function load ()
{
	var emp = new embeddedMedia.Player(),
		paramRegexp = /([^?=&]+)(=([^&]*))?/g;

	emp.setDomId("emp1");

	emp.setWidth(popDetail.width);
	emp.setHeight(popDetail.height);

	// set width/height of centering container element
	function halfNegDim(d) { return (-1 * Math.floor(d / 2)) + "px"; }
	var el = document.getElementById("content");
	if (el) {
		el.style.width = popDetail.width + "px";
		el.style.height = popDetail.height + "px";
		el.style.marginLeft = halfNegDim(popDetail.width);
		el.style.top = halfNegDim(popDetail.height);
	}

	emp.set("config_settings_showPopoutButton","false");
	emp.set("config_settings_showPopoutCta","false");
	emp.set("config_settings_showFooter","true");
	emp.set("config_settings_autoPlay","true");

	// add additional emp paramters
	while (true) {
		var match = paramRegexp.exec(popDetail.params);
		if (!match) break;
		emp.set(match[1],match[3] || "");
	}

	emp.write();
}

