import { describe, test, expect, afterEach } from "vitest";

// import { theme } from './script-loja'

const sum = (p: number) => p;

describe("sum module", () => {
	afterEach(() => {

	})

  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1)).toBe(1);


  });
  // test("template loading message", () => {
  //   expect(sum(1)).toBe(1);

  //   expect(theme.getLoader('mensagem de exemplo')).toBe(`<div class="message">mensagem de exemplo</div>`)
  // });

	test('procurar texto array', () => {
		const list = [
			'Naruto',
			'DragonBallZ',
			'Fairy Tail'
		]

		expect(list).toContain('Naruto')
		expect(list).not.toContain('Nanatsu')
	})
});
