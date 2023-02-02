<script>
    import Sobre from "$lib/components/Sobre.svelte";
    import Servicios from "$lib/components/Servicios.svelte";
    import Asociacion from "$lib/components/Asociacion.svelte";
    import Vantajas from "$lib/components/Vantajas.svelte";
    let y


</script>

<svelte:window bind:scrollY={y}></svelte:window>
<section id="sobre">
    <Sobre></Sobre>
</section>
<section id="servicios">
    <Servicios></Servicios>
</section>
<section id="vantajas">
    <Vantajas></Vantajas>
</section>
<section id="asociacion">
    <Asociacion></Asociacion>
</section>
