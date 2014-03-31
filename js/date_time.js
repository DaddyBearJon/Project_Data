function date_time(date_id, time_id)
{
        date = new Date();
        year = date.getFullYear();
        month = date.getMonth();
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
        d = date.getDate();
        day = date.getDay();
        days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
        h = date.getHours();
        var x = "th";
        if(h<10)
        {
                h = "0"+h;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
        
        
		switch (d)
			{
				case 1:
				case 21:
				case 31:
  					x="st";
  					break;
				case 2:
				case 22:
  					x="nd";
  					break;
				case 3:
				case 23:
  					x="rd";
  					break;
				default:
  					x="th";
  					break;
			}
        
        result_date = ''+days[day]+', '+months[month]+' '+d+x+' '+year+' ';
       /* result_time = ''+h+':'+m+':'+s; */
        document.getElementById(date_id).innerHTML = result_date;
       /* document.getElementById(time_id).innerHTML = result_time;*/
        setInterval('date_time("'+date_id+'", "'+time_id+'");','1000');
        return true;
}