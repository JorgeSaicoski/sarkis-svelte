<script>
    import Calculadora from "$lib/store/calculadora.js";
    let tipo = "blog"



    function submitNext(){
        $Calculadora.tipo = tipo
    }







</script>
<form on:submit={submitNext}>
    <label>
        <input type="radio" bind:group={tipo} value="blog">
        Blog
    </label>
    <label>
        <input type="radio" bind:group={tipo} value="catalago">
        Catalago
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
        <input type="radio" bind:group={tipo} value="completo">
        Consultoria
    </label>
    <label>
        <input type="radio" bind:group={tipo} value="otro">
        Otro
    </label>
    <button type="submit">Proximo</button>
</form>
{#if tipo==="blog"}
    <div class="description">
        <p>Queres crear contenido con imagenes o informaciones sobre tu negocio?</p>
        <p>La creacion de un blog te ayudará a mantener tus clientes actualizados.</p>
    </div>
{:else if tipo==="catalago"}
{:else if tipo==="ecommerce"}
{:else if tipo==="portfolio"}
{:else if tipo==="completo"}
{:else}
{/if}
