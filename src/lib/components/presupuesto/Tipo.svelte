<script>
    import calculadora from "$lib/store/calculadora.js";
    let tipo



    function submitNext(){
        calculadora.setTipo(tipo)
    }







</script>
<form on:submit={submitNext}>
    <label>
        <input type="radio" bind:group={tipo} value="blog">
        Blog
    </label>
    <label>
        <input type="radio" bind:group={tipo} value="ecommerce">
        eCommerce
    </label>
    <label>
        <input type="radio" bind:group={tipo} value="portfolio">
        Portfolio
    </label>
    <label>
        <input type="radio" bind:group={tipo} value="otro">
        Otro
    </label>
    <button type="submit">Proximo</button>
</form>
<p>{tipo}</p>