import Vue from 'vue';

import axios from 'axios';

const path = '../assets/MiracleNikkiJp_items.json';


module.exports = new Vue({
	el: '#store',
	data: {
		list: []
	},
	created() {
		axios.get('../assets/MiracleNikkiJp_items.json')
		.then(response => {
			this.list = response.data;
		})
		.catch(error => {
			console.log(error);
		});
	},
});