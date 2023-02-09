const fetchApi = () => ({
	headers: {},
	get: (url: string) => new Promise((resolve, reject) => {
		fetch(url).then((response) => {
			if (response.ok) return response.json()

			reject({status: 404})
		}).then(response => {
			resolve({
				data: response,
				code: 200
			})
		})
	})
	,
	post() {},
	delete() {},
});

/*
Métodos

Get, Post, Delete, Put,

Criar um objeto que consiga definir cabeçalhos e URL da api

Definir instancia para setar rotas e cabeçalhos
*/

export default fetchApi;
