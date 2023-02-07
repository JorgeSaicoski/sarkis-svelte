<script>
    import Tipo from "$lib/components/presupuesto/Tipo.svelte";
    import Calculadora from "$lib/store/calculadora.js";



</script>

<svelte:head>
    <title>Calculadora de Presupuesto Web App</title>
</svelte:head>
<h1>Calculadora</h1>
{#if !$Calculadora.tipo}
    <Tipo></Tipo>
{:else}
    <h3>Terminó</h3>
{/if}