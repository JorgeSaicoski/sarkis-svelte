<script>
    import Sobre from "$lib/components/Sobre.svelte";
    import Servicios from "$lib/components/Servicios.svelte";
    import Asociacion from "$lib/components/Asociacion.svelte";
    import Vantajas from "$lib/components/Vantajas.svelte";
    import {tweened} from "svelte/motion";

    let y, sobreH, servicioH,vantajasH,asociacionH

    const colors = [
        'rgb(0,138,189)',
        'rgb(0,31,94)',
        'rgb(78,78,94)'
    ];
    let i = 0
    const color = tweened(colors[i], {
        duration: 800,
    });
    function scroll(e){
        console.log(e.timeStamp)
        if(e.timeStamp%55===0){
            i===3?i=0:i++
            color.set("rgb(78,78,94)")
        }
    }

</script>

<svelte:window bind:scrollY={y} on:scroll={scroll}></svelte:window>
<section id="sobre"
         style="background-color: {$color}"
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

<style>

</style>

