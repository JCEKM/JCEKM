<script>
    //en svelte al aplicar un export, automaticamente lo convertimos en un componente
	export let name;
	let frase="";
    // para crear reactividad (es decir: que se ejecute de nuevo el algoritmo a cada cambio) en svelte se pone el simbolo $:
    $: igual= frase === "" ? 'escribe algo compa' : 'bien dicho'
</script>
<main>
	<h1>Bienvenido {name}!</h1>
    <p style="font-style: italic;">"{frase}"</p>
	<p>Escribe tu frase : </p><input bind:value={frase} placeholder="Ingresa la frase"/>
    <p>{igual}</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

   
    main{
		background-color: rgb(244, 207, 75);
	}
	 
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>