const greeting = new Date();
const time = greeting.getHours();
const daye = greeting.getDay(0);
const year = greeting.getFullYear();
const num = greeting.getDate();
let monthe = greeting.getMonth();
monthe++;
const a = document.getElementById("greeting");
//const b = document.getElementById("date");
switch(daye) {
	case 0 :
	day = "Sunday";
	break;

	case 1 :
	day = "Monday"
	break;

	case 2 :
	day = "Tuesday"
	break;

	case 3 :
	day = "Wednesday"
	break;

	case 4 :
	day = "Thursady"
	break;

	case 5 :
	day = "Friday"
	break;

	case 6 :
	day = "Saturday"
	break;
}
switch(monthe) {
	case 1 :
	month = "January"
	break;

	case 2 :
	month = "February"
	break;

	case 3 :
	month = "March"
	break;

	case 4 :
	month = "April"
	break;

	case 5 :
	month = "May"
	break;

	case 6 :
	month = "June"
	break;

	case 7 :
	month = "July"
	break;

	case 8 :
	month = "August"
	break;

	case 9 :
	month = "September"
	break;

	case 10 :
	month = "October"
	break;

	case 11 :
	month = "November"
	break;

	case 12 :
	month = "December"
	break;
}

//b.innerHTML = day + " " + num + " " + month + " " + year;

if (time == 1 && time < 12) {
	a.innerHTML = `<i class="fa fa-coffee"></i> Good Morning <i class="fa fa-coffee"></i>`;
}
else if (time == 12) {
	a.innerHTML = `<i class="fa fa-sun-o"></i> Hey, It"s Noon <i class="fa fa-sun-o"></i>`;
}
else if (time > 12 && time < 17) {
	a.innerHTML = `<i class="fa fa-cutlery"></i> Hey, It"s Afternoon <i class="fa fa-cutlery"></i>`;
}
else if (time == 17 && time < 21) {
	a.innerHTML = `<i class="fa fa-gamepad"></i> Hey, It"s Evening <i class="fa fa-gamepad"></i>`;
}
else if (time >= 21 && time <= 24) {
	a.innerHTML = `<i class="fa fa-hotel"></i> Good Night <i class="fa fa-hotel"></i>`;
}
