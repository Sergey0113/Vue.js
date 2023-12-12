Vue.createApp({
	data() {
		return {
			valueinput: '',
			needDoList: [],
			completeList:[]
		};
	},
	methods: {
		handlyInput (event){
			this.valueinput = event.target.value;
		},
		addTask () {
			if(this.valueinput === ''){return};
			this.needDoList.push({
				title: this.valueinput,
				id: Math.random()
			});
			this.valueinput = '';
		},
		doCheck (index, type) {
			if(type === 'need') {
				const completeMask = this.needDoList.splice(index, 1);
				this.completeList.push(...completeMask);
			}
			else {
				const noCompleteMask = this.completeList.splice(index, 1);
				this.needDoList.push(...noCompleteMask);
			}
		},
		removeMask (index, type) {
			const toDoList = type === 'need' ? this.needDoList : this.completeList;
			toDoList.splice(index, 1);
		}
	}
}).mount('#app');
