<script>
    import Calculadora from "$lib/store/calculadora.js";
    let contact



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
        <input type="radio" bind:group={contact} value="dataBase">
        Sin Contacto
    </label>
    <button type="submit">Proximo</button>
</form>
<p>{contact}</p>