/* Script */


let add_btn=document.getElementById('add_btn');
let clear_btn=document.getElementById('clear_btn');

let todo_text=document.getElementById('todo_text');
let parent=document.getElementById('todos');

/* Add new todo*/
add_btn.addEventListener('click', create_todo);
function create_todo(){
	let new_todo=document.createElement('div');
	new_todo.innerHTML=todo_text.value;
	new_todo.classList.add('new_todo');
	parent.appendChild(new_todo);
	
	let remove = document.createElement('button');
	remove.classList.add('remove_btn');
	remove.innerHTML = 'delete';
	new_todo.appendChild(remove);
	
	remove.addEventListener('click', function(event) {
		new_todo.parentElement.removeChild(new_todo);
		event.preventDefault();
	});
};


/* Clear todo */
clear_btn.addEventListener('click', clear_todo);
function clear_todo(){
	todo_text.value="";
}