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
        Menos de 1000 por mes
    </label>
    <label>
        <input type="radio" bind:group={customerTraffic} value="middle">
        Mas de 1000 y menos de 5000 acesos por mes
    </label>
    <label>
        <input type="radio" bind:group={customerTraffic} value="big">
        Mas 5000 acesos por mes
    </label>
    <button type="submit">Proximo</button>
</form>
<p>{customerTraffic}</p>