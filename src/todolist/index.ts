const setTemplate = () => {
	document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
	<div class="tudo">
		<form class="area-input" data-submit>
			<input required data-input placeholder="Nova tarefa">
			<button>Adicionar</button>
		</form>
		<div class="list" data-tudo-tasks>
		</div>
	</div>
`;
}

export type state = {
	id: number,
	name: string,
	finish: boolean
}

export let state: state[] = []

let idInteraction = 0

const task = (name: string, id: number, finish: boolean) => `<div class="task ${finish ? 'finish' : ''}" >
<span class="name">${name}</span>
<div class="button" data-finish data-task="${id}" role="button">${finish ? 'Reativar' : 'Finalizar'}</div>
<div class="button" data-remove data-task="${id}" role="button">Remover</div>
</div>`

const remove = (id: number) => {
	state = state.filter(item => item.id !== id)

	return state

}

const changeStatus = (id: number) => {
	state = state.map(item => {
		if (item.id == id) {
			const a = item
			a.finish = !a.finish
			return a
		}

		return item
	})

	return state
}

const addEventRemove = () => {
	document.querySelectorAll('[data-remove]').forEach(item => {
		item.addEventListener('click', () => {
			remove(Number(item.getAttribute('data-task')))
			listTasks(state)
		})
	})
}

const addEventFinish = () => {
	document.querySelectorAll('[data-finish]').forEach(item => {
		item.addEventListener('click', () => {
			changeStatus(Number(item.getAttribute('data-task')))
			listTasks(state)
		})
	})
}

const listTasks = (state: state[]) => {

	const template = state.map(item => task(item.name, item.id, item.finish)).join('')
	document.querySelector('[data-tudo-tasks]')!.innerHTML = template
	addEventRemove()
	addEventFinish()
}

const appendTask = (state: state[], name: string):void =>  {
	idInteraction += 1

	state.push({
		id: idInteraction,
		name,
		finish: false
	})

	listTasks(state)
}

const submitForm = () => {
	document.querySelector<HTMLFormElement>('[data-submit]')!.addEventListener('submit', (e) => {
		e.preventDefault()
		const inputTask = document.querySelector<HTMLInputElement>('[data-input]')!

		const { value: name } = inputTask
		inputTask.value = ''

		if (name.trim()) {
			appendTask(state, name)
		}
	})
}

export {
	task,
	setTemplate,
	submitForm,
	remove,
	changeStatus,
	// events
	listTasks
}
