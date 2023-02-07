<script>
    import Tipo from "$lib/components/presupuesto/Tipo.svelte";
    import Calculadora from "$lib/store/calculadora.js";
    import Contact from "$lib/components/presupuesto/Contact.svelte";
    import ECommerce from "$lib/components/presupuesto/ECommerce.svelte";
    import Consultoria from "$lib/components/presupuesto/Consultoria.svelte";
    import Login from "$lib/components/presupuesto/Login.svelte";
    import DarkMode from "$lib/store/dark.js";

    let dark
    DarkMode.subscribe((mode)=>{
        dark = mode
    })



</script>

<svelte:head>
    <title>Calculadora de Presupuesto Web App</title>
</svelte:head>
<section class="calculadora"
         class:white={dark==="base"}
         class:base={dark==="dark"}
>
<h1>Calculadora</h1>
{#if !$Calculadora.tipo}
    <Tipo></Tipo>
{:else if $Calculadora.tipo === "blog" || $Calculadora.tipo === "catalago" || $Calculadora.tipo === "portfolio"}
    <Contact></Contact>
{:else if $Calculadora.tipo === "ecommerce" }
    {#if !$Calculadora.eCommerce}
        <ECommerce></ECommerce>
    {:else}
        <Login></Login>
    {/if}
{:else}
    <Consultoria></Consultoria>
{/if}
</section>