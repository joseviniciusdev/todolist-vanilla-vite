import { expect, it } from "vitest";
import { pokemon } from "../components/api/get-pokemon";

it('has pokemons in API', async () => {
	const a = await pokemon()
	expect(a).toHaveLength
})
