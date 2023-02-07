<script>
    import Tipo from "$lib/components/presupuesto/Tipo.svelte";
    import calculadora from "$lib/store/calculadora.js";

    $:console.log(calculadora)




</script>

<svelte:head>
    <title>Calculadora de Presupuesto Web App</title>
</svelte:head>
<h1>Calculadora</h1>
<Tipo></Tipo>