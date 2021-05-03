var app1 = new Vue({
	el: '#app-1',
	data: {
		message: 'Hi There!'
	}
});


var app2 = new Vue({
	el: '#app-2',
	data: {
		message: 'You loaded this helpful message on ' + new Date().toLocaleString()
	}
});


var app3 = new Vue({
	el: '#app-3',
	data: {
		seen: true
	}
});


var app4 = new Vue({
	el: '#app-4',
	data: {
		timetable: [
			{ task: 'Wake up' },
			{ task: 'Feel Free' },
			{ task: 'Do wanted deals' },
			{ task: 'Take a rest' },
			{ task: 'Brakefast' },
		]
	}
});


var app5 = new Vue({
	el: '#app-5',
	data: {
		message: 'D: egassem gnicnad--Hi There!--dancing message :D'
	},
	methods: {
		reverseMessage: function () {
			this.message = this.message.split('').reverse().join('')
		}
	}
});


var app6 = new Vue({
	el: '#app-6',
	data: {
		message: 'Hi There!'
	}
});
