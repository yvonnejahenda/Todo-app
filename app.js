const form = document.querySelector('form')
const taskInput = document.querySelector('input[name=TaskName]')
const dateInput = document.querySelector('input[name=TaskDate]')
const ul = document.querySelector('ul')

form.onsubmit = function(e) {
	e.preventDefault()
	
	let taskTitle=taskInput.value

    let TaskDate = dateInput.value

	const li = document.createElement('li')

	li.textContent = taskTitle
	li.classList.add('list-group-item')
	li.classList.add('d-flex')
	li.classList.add('justify-content-between')
	li.classList.add('align-items-center')


    const span = document.createElement('span')
    span.textContent=TaskDate
    span.classList.add('badge')
    span.classList.add('badge-primary')
    span.classList.add('badge-pill')
     
     li.appendChild(span)
	ul.appendChild(li)
}
