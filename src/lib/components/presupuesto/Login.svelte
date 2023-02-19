<script>
    import Calculadora from "$lib/store/calculadora.js";
    let login = "cliente"



    function submitNext(){
        $Calculadora.login = login
    }







</script>
<form on:submit={submitNext}>
    <label>
        <input type="radio" bind:group={login} value=false>
        Sin login
    </label>
    <label>
        <input type="radio" bind:group={login} value="cliente">
        Clientes
    </label>
    <label>
        <input type="radio" bind:group={login} value="completo">
        Con permisos
    </label>
    <button type="submit">Proximo</button>
</form>
{#if login==="cliente"}
    <div class="description">
        <p>Necesitas que tus clientes guarden informacion y la recupere facilmente despues?</p>
        <p>Con un sistema de login es posible que ellos se queden registrado y puenda acompañar sus pedidos/carritos/información</p>
    </div>
{:else if login==="completo"}
    <div class="description">
        <p>Necesitas de un login para tu equipo?</p>
        <p>Con permisos es posible crear un login de cliente y varios de empleado, uno para cada role.</p>
        <p>Así podras dar aceso apenas a lo que el usuario necesita ver.</p>
    </div>
{:else}
    <div class="description">
        <p>Se tu aplicacion necesita apenas de un login para administración, esta es la opción correcta.</p>
    </div>
{/if}