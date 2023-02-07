<script>
    import Tipo from "$lib/components/presupuesto/Tipo.svelte";
    import Calculadora from "$lib/store/calculadora.js";

    Calculadora.subscribe(e=>{
        console.log(e)
        console.log(Calculadora)
    })




</script>

<svelte:head>
    <title>Calculadora de Presupuesto Web App</title>
</svelte:head>
<h1>Calculadora</h1>
<Tipo></Tipo>