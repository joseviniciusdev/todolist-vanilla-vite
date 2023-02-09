import { test, expect } from "vitest";
import { disableButtonClick } from "../buttons/buttons";
import { JSDOM } from "jsdom";
const dom = new JSDOM();

test("add attr Disabled", () => {

	const dom = new JSDOM()
	global.document = dom.window.document
	// global.window = dom.window

	document.body.innerHTML = '<button id="button">event</button>';

	const button = document.querySelector<HTMLButtonElement>("#button");

	if (button) {
		disableButtonClick(button);
		button.click();
	}

	expect(document.body).toMatchSnapshot();
});
