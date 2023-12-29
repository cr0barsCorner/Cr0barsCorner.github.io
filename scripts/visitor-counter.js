const sprite_path = "resources/catgirl-counter/";
const value_sprites = [
	"counter-0.png",
	"counter-1.png",
	"counter-2.png",
	"counter-3.png",
	"counter-4.png",
	"counter-5.png",
	"counter-6.png",
	"counter-7.png",
	"counter-8.png",
	"counter-9.png"
];
const counter_ids = [
	"counter-one",
	"counter-ten",
	"counter-hundred",
	"counter-thousand",
	"counter-ten-thousand",
	"counter-hundred-thousand",
	"counter-million"
];
const API_target = "https://website-backend-auok.onrender.com/api?";

var total_visitors = 0;
var total_pageviews = 0;

function updateCatgirlCounter(value)
{
	var arrayOfDigits = Array.from(String(value), Number);
	arrayOfDigits.reverse();
	
	for (let i = 0; i < counter_ids.length; i++)
		document.getElementById(counter_ids[i]).src = sprite_path + value_sprites[arrayOfDigits[i]];
	
	for (let i = 0; i < 7 - arrayOfDigits.length; i++)
		document.getElementById(counter_ids[counter_ids.length - 1 - i]).src = sprite_path + value_sprites[0];
}

async function updateServerCounter(type)
{
	const response = await fetch(API_target + type);
	const data = await response.json();
	total_visitors = Number(data.visits);
	total_pageviews = Number(data.views);
	updateCatgirlCounter(total_visitors);
}

function mainActionOnPageLoad()
{
	if (sessionStorage.getItem('visit') === null) // new visit and page view
		updateServerCounter('type=visit-view');
	else // just page view
		updateServerCounter('type=view');
		
	sessionStorage.setItem('visit', 'true');
}

mainActionOnPageLoad();