<script>
    import Calculadora from "$lib/store/calculadora.js";
    let customerTraffic = $Calculadora.customerTraffic



    function submitNext(){
        $Calculadora.customerTraffic = customerTraffic
    }







</script>
<form on:submit={submitNext}>
    <label>
        <input type="radio" bind:group={customerTraffic} value="small">
        Menos de 5000 por mes
    </label>
    <label>
        <input type="radio" bind:group={customerTraffic} value="middle">
        Mas de 5000 y menos de 10000 acesos por mes
    </label>
    <label>
        <input type="radio" bind:group={customerTraffic} value="big">
        Mas 10000 acesos por mes
    </label>
    <button type="submit">Proximo</button>
</form>
<div class="description">
    <p>Con la cantidad de acesos podremos tener una idea de cuanto va custar para mantener tu website en la internet.</p>
</div>