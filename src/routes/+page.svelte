<script>
    import Sobre from "$lib/components/Sobre.svelte";
    import Servicios from "$lib/components/Servicios.svelte";
    import Asociacion from "$lib/components/Asociacion.svelte";
    import Vantajas from "$lib/components/Vantajas.svelte";

    let isOn=false;


    let y, sobreH, servicioH,vantajasH,asociacionH



</script>

<svelte:window bind:scrollY={y} on:scroll={scroll}></svelte:window>
<section id="sobre"
         bind:clientHeight={sobreH}
>
    {#if y<sobreH}
    <Sobre></Sobre>
    {/if}
</section>
<section id="servicios"
         bind:clientHeight={servicioH}
>
    {#if y>(servicioH-(sobreH*0.75))}
    <Servicios></Servicios>
    {/if}
</section>
<section id="vantajas"
         bind:clientHeight={vantajasH}
>
    {#if y>(vantajasH-(servicioH*0.75))}
    <Vantajas></Vantajas>
    {/if}
</section>
<section id="asociacion"
         bind:clientHeight={vantajasH}
>
    {#if y>(asociacionH-(servicioH*0.75))}
    <Asociacion></Asociacion>
    {/if}
</section>



