<script>
    import Calculadora from "$lib/store/calculadora.js";
    let eCommerce = "cart"



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
{#if eCommerce==="cart"}
    <div class="description">
        <p>Con un carrito tus clientes pueden guardar una lista de comprar y ordernar varios item de una sola vez.</p>
        <p>Así tu cliente puede comprar rapidamente y es posible poner algunas reglas como:</p>
        <p>Desabilitar algunos servicios de acuerdo con la demanda/estoque.</p>
        <p>Esperar confirmación de la administración para la compra.</p>
        <p>Descuentos por pago en efectivo o por alguna promo en específico.</p>
        <p>Alguna otra regla que queras poner.</p>
    </div>
{:else if eCommerce==="chat"}
    <div class="description">
        <p>Si tenes un producto que la producción es conforme la demanda, quiza sea mejor un chat.</p>
        <p>Así el cliente podrá decir sus demandas en directo y permite que hagas un prosupuesto en tiempo real.</p>
        <p>Funcionaria exactamente como una tienda fisica pero online.</p>
    </div>
{/if}