import { compile } from 'mdsvex';

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
	const transformed = await compile(`
    # Hello from mdsvex

> This is a quote

\`\`\`bash
npm install
\`\`\`

foo bar baz
`);
	return {
		content: transformed.code
			.replace(/>{@html `<code class="language-/g, '><code class="language-')
			.replace(/<\/code>`}<\/pre>/g, '</code></pre>')
	};
};
