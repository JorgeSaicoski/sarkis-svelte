<script>
    import Calculadora from "$lib/store/calculadora.js";
    let eCommerce



    function submitNext(){
        $Calculadora.eCommerce = eCommerce
    }







</script>
<form on:submit={submitNext}>
    <label>
        <input type="radio" bind:group={eCommerce} value="cart">
        Carrito
    </label>
    <label>
        <input type="radio" bind:group={eCommerce} value="chat">
        Con chat
    </label>
    <button type="submit">Proximo</button>
</form>
<p>{eCommerce}</p>