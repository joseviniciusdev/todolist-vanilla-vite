import { describe, it, expect, beforeEach } from "vitest";

import { state, task, remove, changeStatus, setTemplate, submitForm } from '../todolist'
import { JSDOM } from "jsdom";
import { mockState } from "./mock/state";

describe('Tudo list', () => {
	it('Deve remover a tarefa do carrinho retornando um Array vazio', () => {
		let state: state[] = mockState
		remove(10)
		expect(state).not.toHaveLength
	})

	it('Deve alterar o status de "finish" da tarefa para "true"', () => {
		let state: state[] = mockState
		changeStatus(10)
		expect(state[0].finish).toEqual(false)
	})

	it('Deve retornar nova template', () => {
		let state: state[] = mockState

		const templateTasks = state.map(item => task(item.name, item.id, item.finish)).join('')

		expect(templateTasks).toMatchSnapshot()
	})
})

describe('Tudo list events DOM', () => {
	beforeEach(() => {
		const dom = new JSDOM()
		global.document = dom.window.document
		document.body.innerHTML = '<div id="app"></div>'
	})

	it('Deve adicionar a template inicial', () => {
		expect(document.body).toMatchSnapshot()
	})

	it('Deve fazer o fluxo de tarefas', () => {
		setTemplate()
		submitForm()

		document.querySelector('input')!.value = 'New Task'
		document.querySelector('button')!.click()
		expect(document.body).toMatchSnapshot()
		// expect()
		document.querySelector<HTMLButtonElement>('[data-finish]')!.click()
		expect(document.body).toMatchSnapshot()
		document.querySelector<HTMLButtonElement>('[data-remove]')!.click()
		expect(document.body).toMatchSnapshot()
	})
})
