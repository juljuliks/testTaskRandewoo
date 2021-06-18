const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

class MovingObject {
	constructor(name) {
		this.id = this.getId();
		this.name = name;
		this.timeAndCoordinates = this.getUpdatedTimeAndCoordinates();
	}

	getId() {
		return +Math.random().toString(10).substr(2, 9);
	}

	getRandomDegrees(min, max) {
		return +(Math.random() * (max - min) + min).toFixed(6);
	}

	coordinateGenerator() {
		return `${this.getRandomDegrees(0, 90)}°, ${this.getRandomDegrees(0, 180)}°`;
	}

	generateTimeAndCoordinates() {
		let timeAndCoordinates = [];
		const numOfListItems = Math.floor(Math.random() * 100);
		for (let i = 0; i < numOfListItems; i++) {
			timeAndCoordinates.push({ timestamp: this.getTimestamp(), coordinates: this.coordinateGenerator() });
		}
		return timeAndCoordinates;
	}

	getUpdatedTimeAndCoordinates() {
		let timeAndCoordinates = this.generateTimeAndCoordinates();
		setInterval(() => {
			timeAndCoordinates.unshift(...this.generateTimeAndCoordinates());
		}, 60000);
		return timeAndCoordinates;
	}

	getTimestamp() {
		const getPrefixedNum = (num) => (num < 10 ? '0' + num : num);
		const date = new Date();
		const OSIDate = {
			year: date.getFullYear(),
			month: getPrefixedNum(date.getMonth() + 1),
			day: getPrefixedNum(date.getDate()),
			hours: getPrefixedNum(date.getHours()),
			minutes: getPrefixedNum(date.getMinutes()),
			seconds: getPrefixedNum(date.getSeconds()),
			getDate() {
				return `${this.year}-${this.month}-${this.day}T${this.hours}:${this.minutes}:${this.seconds}`;
			},
		};
		return OSIDate.getDate();
	}
}
const movingObjects = [new MovingObject('MovingObject_1'), new MovingObject('MovingObject_2'), new MovingObject('MovingObject_3')];

const clearTable = () => {
	document.querySelector('tbody').innerHTML = '';
};

const renderInfo = (obj) => {
	obj.timeAndCoordinates.forEach((el, i) => {
		const tr = document.createElement('tr');
		tr.innerHTML = `<td>${i + 1}</td>
                    <td>${obj.id}</td>
                    <td>${obj.name}</td>
                    <td>${el.timestamp}</td>
                    <td>${el.coordinates}</td>
                    `;
		document.querySelector('tbody').appendChild(tr);
	});
};

const renderAllObjectsInfo = () => {
	movingObjects.forEach((el) => {
		renderInfo(el);
	});
};

const generateDelay = () => Math.floor(Math.random() * 5 + 4) * 1000;

const getAndRenderData = (el) => {
	axios.get('/objects').then((response) => {
		clearTable();
		renderInfo(response.data[el]);
	});
};

document.addEventListener('DOMContentLoaded', function () {
	renderAllObjectsInfo();
	document.querySelector('select').addEventListener('change', (e) => {
		const mock = new MockAdapter(axios, { delayResponse: generateDelay() });
		mock.onGet('/objects').reply(200, movingObjects);
		getAndRenderData(e.target.value);
		setInterval(() => {
			getAndRenderData(e.target.value);
		}, 60000);
	});
});

module.exports = { MovingObject, generateDelay };
