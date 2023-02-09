import { describe, expect, it } from "vitest";
import fetchApi from "../helpers/fetchApi";

describe('Consumindo API sem instancia', () => {
	it('O método Get deve retorna uma promise com o response com o status e data', async () => {
		const response = await fetchApi().get('https://pokeapi.co/api/v2/pokemon')

		expect(response).toHaveProperty('code')
		expect(response).toHaveProperty('data')
	})

	// it('Deve retornar erro ao passar uma rota invalida com status 404', async () => {
	// 	const response = await fetchApi().get('http://localhost/api/v2/pokemon')

	// 	expect(response.code).toContainEqual(404)
	// })
})
