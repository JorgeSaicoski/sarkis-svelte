<script>
    import Calculadora from "$lib/store/calculadora.js";
    let consultoria = $Calculadora.consultoria



    function submitNext(){
        $Calculadora.consultoria = consultoria
    }







</script>
<form on:submit={submitNext}>
    <label>
        <input type="radio" bind:group={consultoria} value="app">
        Aplicacion Online
    </label>
    <button type="submit">Proximo</button>
</form>
<p>{consultoria}</p>