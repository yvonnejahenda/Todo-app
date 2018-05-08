var app = new Vue({
  el: '#app',
  data: {
    todos:[
    "My first to do item",
    "My second to do item"
    ],
    item:'To do item'
  },
  methods:{
 addTodo(){
 	this.todos.push(this.item)
 	this.item='';
 }  	
  }
})
