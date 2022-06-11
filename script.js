/* Script */


let add_btn=document.getElementById('add_btn');
let todo_text=document.getElementById('todo_text');
let parent=document.getElementById('todos');
add_btn.addEventListener('click', create_todo);
function create_todo(){
	let new_todo=document.createElement('div');
	new_todo.innerHTML=todo_text.value;
	parent.appendChild(new_todo);
};

