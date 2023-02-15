<script>
    import Calculadora from "$lib/store/calculadora.js";
    let cloud = "no"



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
{#if cloud==="no"}
    <h4>Tenes tu propria nuven.</h4>
    <p>Si ya tenes nuven y ya puedes despegar tu aplicacion entregamos apenas tu software.</p>
    <p>Esta opcion tambien vale para si no tenes pero vas alquilar con otra empresa/profesional.</p>
{:else}
    <h4>Sarkis Dev va despegar tu aplicación.</h4>
    <p>Si no tenes o no queres envolverte con la estructura de desplegue de tu aplicación, te ayudamos.</p>
    <p>Creamos el software y dejamos despegado en un servidor 24/7.</p>
    <p>Asi mismo tenes que hacer algunos pasos, para que puedas tener el poder de controlar tu dominio.</p>
    <p>Posibilitando que puedas cerrar el servicio con nosotros sin burocracias.</p>
{/if}