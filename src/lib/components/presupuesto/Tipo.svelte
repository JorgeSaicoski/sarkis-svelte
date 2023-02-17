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
        <p>Nosotros vamos utilizar las mejores tecnologias para que tu puedas concentrar en crear el contenido.</p>
        <p>Tendras una pagina de administracición donde crearas categorias, paginas y tus "posts".</p>
    </div>
{:else if tipo==="catalago"}
    <div class="description">
        <p>Queres mostrar tu producto online pero no queres un eCommerce?</p>
        <p>Con un catalago online podrás mostrar todos tus productos y servicios a tus clientes.</p>
        <p>Para los que tengan interés en comprar, haberá un sector de contacto a donde poderás dejar tu telefono, email y/o ubicación.</p>
    </div>
{:else if tipo==="ecommerce"}
    <div class="description">
        <p>Queres vender online pero querés la libertad de cobrar como quieras?</p>
        <p>Integramos tu negocio con las plataformas mas utilizadas de Uruguay/Mundo.</p>
        <p>Pero, no te sacamos la posibilidad de cobrar en efectivo cuando el cliente vaya retirar.</p>
        <p>Tenes otra idea de cobranza? La podemos hacer como tu quieras.</p>
        <p>Tendras una pagina de administración para manejar contactos, productos a venda y otros.</p>
    </div>
{:else if tipo==="portfolio"}
    <div class="description">
        <p>Queres vender online pero querés la libertad de cobrar como quieras?</p>
    </div>
{:else}
{/if}
