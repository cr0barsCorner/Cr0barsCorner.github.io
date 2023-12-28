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

var total_visitors = 69420;

function updateCounter()
{
	var arrayOfDigits = Array.from(String(total_visitors), Number);
	arrayOfDigits.reverse();
	
	for (let i = 0; i < counter_ids.length; i++)
		document.getElementById(counter_ids[i]).src = sprite_path + value_sprites[arrayOfDigits[i]];
	
	for (let i = 0; i < 7 - arrayOfDigits.length; i++)
		document.getElementById(counter_ids[counter_ids.length - 1 - i]).src = sprite_path + value_sprites[0];
}

function requrestVisitorCount()
{}

updateCounter()