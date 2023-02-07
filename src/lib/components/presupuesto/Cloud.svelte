<script>
    import Calculadora from "$lib/store/calculadora.js";
    let cloud = $Calculadora.cloud



    function submitNext(){
        $Calculadora.cloud = cloud
    }







</script>
<form on:submit={submitNext}>
    <label>
        <input type="radio" bind:group={cloud} value="no">
        Tengo mi Cloud
    </label>
    <label>
        <input type="radio" bind:group={cloud} value="si">
        No tengo Cloud
    </label>
    <button type="submit">Proximo</button>
</form>
<p>{cloud}</p>