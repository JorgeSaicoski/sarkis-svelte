<script>
    import Calculadora from "$lib/store/calculadora.js";
    let consultoria = $Calculadora.consultoria



    function submitNext(){
        $Calculadora.consultoria = consultoria
    }







</script>
<form on:submit={submitNext}>
    <label>
        <input type="radio" bind:group={consultoria} value="logo">
        Logo + Website
    </label>
    <label>
        <input type="radio" bind:group={consultoria} value="app">
        Aplicacion Online
    </label>
    <label>
        <input type="radio" bind:group={consultoria} value="adm">
        Administrativo
    </label>
    <button type="submit">Proximo</button>
</form>
<p>{consultoria}</p>