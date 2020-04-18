var d = new Date();
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
var n = d.getDate();
var t = n-1;
var day="Today";
var yesday="Yesterday";
if(d.getDay()==0){
	n=n-2;
	day="Friday";
}
if(d.getDay()==6){
	n=n-1;
	day="Friday";
}
if(d.getDay()-1==0){
	t=t-2;
	yesday="Friday";
}
if(d.getDay()-1==6){
	t=t-1;
	yesday="Friday";
}
var str='>'+n+'<';
var regex = new RegExp(str, "g");
var str2='>'+t+'<';
var regex2 = new RegExp(str2, "g");
var month=monthNames[d.getMonth()];
console.log(n);
	$('body').find('p:eq( 0 )').remove();
	$('body').find('h2:eq( 0 )').remove();
	$('body').find('p:eq( 0 )').remove();
	$('body').find('h2:eq( 0 )').remove();
	$('td').find('span:eq( 0 )').addClass("date");
	$("table").find('tr:eq( 0 )').find('span').removeClass("date");
	$("table").removeAttr("style");
	$("td").replaceWith(function(){
		return this.outerHTML.replace("<td", '<div class="col-md"').replace("</td", "</div")
	});
	$("tr").replaceWith(function(){
		return this.outerHTML.replace("<tr", '<div class="row"').replace("</tr", "</div")
	});
	$("table").replaceWith(function(){
		return this.outerHTML.replace('<table border="1" cellpadding="2" cellspacing="2"', '<div class="container-fluid"').replace("</table", "</div")
	});
	$('h1:contains('+month+')').nextAll(".container-fluid").eq(0).addClass('month');
	document.getElementsByClassName("month")[0].innerHTML = document.getElementsByClassName("month")[0].innerHTML.replace(regex, 'id="today">'+n+'<');
	document.getElementsByClassName("month")[0].innerHTML = document.getElementsByClassName("month")[0].innerHTML.replace(regex2, 'id="yesterday">'+n+'<');
	$("body").find('tr:eq( 0 )').find('span').removeClass("date");
	$(".col-md").click(function () {
                        $(this).toggleClass("box-clicked");
                    });
	$(".col-md a").click(function(e) { e.stopPropagation(); });
		$("#today").parent("div").addClass('todaybox');
		$("#yesterday").parent("div").addClass('yesterdaybox');
		$('body').prepend('<div class="row"><div class="col-lg"><h1><span>'+day+'</span></h1><div id="copytoday"></div></div><div class="col-lg"><h1 class="h1less"><span>'+yesday+'</span></h1><div id="copyyesterday"></div></div></div>');
		$(function(){
  var $button = $('.todaybox').clone();
  var $button2 = $('.yesterdaybox').clone();
  $('#copytoday').html($button);
  $('#copyyesterday').html($button2);
});