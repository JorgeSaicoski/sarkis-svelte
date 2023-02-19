<script>
    import Calculadora from "$lib/store/calculadora.js";
    let contact = "midia"



    function submitNext(){
        $Calculadora.contact = contact
    }







</script>
<form on:submit={submitNext}>
    <label>
        <input type="radio" bind:group={contact} value="midia">
        Redes sociales
    </label>
    <label>
        <input type="radio" bind:group={contact} value="dataBase">
        A dentro del website
    </label>
    <label>
        <input type="radio" bind:group={contact} value="none">
        Sin Contacto
    </label>
    <button type="submit">Proximo</button>
</form>
{#if contact==="midia"}
    <div class="description">
        <p>Agregamos tus redes sociales a tu web-site para que tu cliente pueda encontrarte.</p>
        <p>Esta opción es simples y la desarrollamos rapidamente.</p>
    </div>
{:else if contact==="dataBase"}
    <div class="description">
        <p>Necesitas de un formulario de contacto a dentro de tu website?</p>
        <p>Lo creamos y agregamos una pagina de administración para que puedas acompañarlos.</p>
    </div>
{/if}