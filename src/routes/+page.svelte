<script>
	let value = 'Hello world!';
	let message = value;
</script>

<h1>og:image generated by satori</h1>

<form on:submit|preventDefault={() => (message = value)}>
	<input bind:value />
	<button>Update message</button>
</form>

<img src="/og?message={message}" alt="" />
