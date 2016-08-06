$(document).ready(function() {
	$("#table_holder").hide();
	$("#calendar_holder").hide();
});
function SingleTableMode(){
	$("#table_holder").hide();
	$("#calendar_holder").hide();
	$("#large_table_holder").show();
};
function MatrixMode(){
	$("#large_table_holder").hide();
	$("#calendar_holder").hide();
	$("#table_holder").show();
};
function CalendarMode(){
	$("#large_table_holder").hide();
	$("#table_holder").hide();
	$("#calendar_holder").show();
	$('.responsive-calendar').responsiveCalendar({
	translateMonths: new Array(
		"Январь","Февраль","Март","Апрель",
		"Май","Июнь","Июль","Август",
		"Сентябрь","Октябрь","Ноябрь","Декабрь"
		),
	translateDays: new Array("pon","vto"),
	events: {
      "2016-08-28": {"number": 5, "badgeClass": "badge-warning", },
      "2016-07-26": {"number": 1, "badgeClass": "badge-warning", }, 
      "2016-07-03": {"number": 1, "badgeClass": "badge-error"}, 
	}});
};