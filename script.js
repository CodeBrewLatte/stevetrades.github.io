const secondDOM = document.getElementById('seconds')
const minuteDOM = document.getElementById('minutes')
const hourDOM = document.getElementById('hours')
const dayDOM = document.getElementById('days')
const yearDOM = document.getElementById('years')
const yearSpanDOM = document.getElementById('year-span')


const inception = '4 April 2020'

const countDown = () => {
	const inceptionDate = new Date(inception)
	const currentDate = new Date()

	timeUse = (currentDate - inceptionDate) / 1000

	let seconds = Math.floor(timeUse) % 60;
	let minutes = Math.floor(timeUse/60)  % 60;
	let hours = Math.floor(timeUse/3600)  % 24;
	let days = Math.floor(timeUse/3600/24)  % 24;
	let years = Math.floor(timeUse/3600/24/365)  % 10;

	
	secondDOM.innerHTML = seconds
	minuteDOM.innerHTML = minutes
	hourDOM.innerHTML = hours
	dayDOM.innerHTML = days

	if(years == 1){
		yearSpanDOM.innerHTML = "year"
	}

	yearDOM.innerHTML = years
	

}

countDown()

setInterval(countDown, 1000)
