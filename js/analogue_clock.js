			function update_clock(cwidth, now)
				{
					/*var now = new Date(); */
					var hours = now.getHours();
					var minutes = now.getMinutes();
					var seconds = now.getSeconds();
					hour_hand.rotate(30*hours+(minutes/2.5), cwidth/2, cwidth/2);
					minute_hand.rotate(6*minutes, cwidth/2, cwidth/2);
					second_hand.rotate(6*seconds, cwidth/2, cwidth/2);
				}

			function draw_clock(cwidth, fillColor, strokeColor, pinColor, hourHandColor, minuteHandColor, secondHandColor, now)
				{
					canvas = Raphael("clock_id",cwidth, cwidth);
					var clock = canvas.circle(cwidth*0.5,cwidth*0.5,cwidth*0.475);
					clock.attr({"fill":fillColor,"stroke":strokeColor,"stroke-width":cwidth*0.02});
					var hour_sign;
					for(i=0;i<12;i++)
						{
							var start_x = cwidth*.5+Math.round((cwidth*.4)*Math.cos(30*i*Math.PI/180));
							var start_y = cwidth*.5+Math.round((cwidth*.4)*Math.sin(30*i*Math.PI/180));
							var end_x = cwidth*.5+Math.round((cwidth*.45)*Math.cos(30*i*Math.PI/180));
							var end_y = cwidth*.5+Math.round((cwidth*.45)*Math.sin(30*i*Math.PI/180));
							hour_sign = canvas.path("M"+start_x+" "+start_y+"L"+end_x+" "+end_y);
						}
					hour_hand = canvas.path("M" + cwidth*.5 + " " + cwidth*.5 + "L" + cwidth*.5 + " " + (cwidth*.25) + "");
					hour_hand.attr({stroke: hourHandColor, "stroke-width": cwidth*.03});
					minute_hand = canvas.path("M" + cwidth*.5 + " " + cwidth*.5 + "L" + cwidth*.5 + " " + (cwidth*.2) + "");
					minute_hand.attr({stroke: minuteHandColor, "stroke-width": cwidth*.02});
					second_hand = canvas.path("M" + cwidth*.5 + " " + (cwidth*.55) + "L" + cwidth*.5 + " " + (cwidth*.125) + "");
					second_hand.attr({stroke: secondHandColor, "stroke-width": cwidth*.01});
					var pin = canvas.circle(cwidth*.5, cwidth*.5, cwidth*.025);
					pin.attr("fill", pinColor);
					update_clock(cwidth, now);
					setInterval("update_clock("+cwidth+")",1000);
				}