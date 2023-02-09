
export const pokemon =  () => fetch('https://pokeapi.co/api/v2/pokemon').then((success) => {
	return success.json()
})
