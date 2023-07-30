#!/usr/bin/env node
import React from "react";
import { render } from "ink";
import meow from "meow";
import App from "./app.js";

const helpMessage = `
Usage
	$ my-ink-cli

Options
	--name  Your name

Examples
	$ my-ink-cli --name=Jane
	Hello, Jane
`

const options = {
	importMeta: import.meta,
	flags: {
		name: {
			type: "string",
		},
	},
} as const

const cli = meow(helpMessage, options);

render(<App name={cli.flags.name} />);
