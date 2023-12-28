var startDate = new Date("2023-12-25");
var endDate   = new Date();
var seconds = (endDate.getTime() - startDate.getTime()) / 1000;
var minutes = seconds / 60;
var hours = seconds / 3600;
var days = seconds / 86400;

document.getElementById("uptime-timer").innerHTML = Math.floor(days) + " days, " + (Math.floor(hours) % 24) + " hours, " + (Math.floor(minutes) % 60) + " minutes";