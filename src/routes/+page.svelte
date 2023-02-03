<script>
    import Sobre from "$lib/components/Sobre.svelte";
    import Servicios from "$lib/components/Servicios.svelte";
    import Asociacion from "$lib/components/Asociacion.svelte";
    import Vantajas from "$lib/components/Vantajas.svelte";
    import DarkMode from "$lib/store/dark.js";

    let dark
    DarkMode.subscribe((mode)=>{
        dark = mode
    })


</script>

<section id="sobre"
         class:white={dark==="base"}
         class:base={dark==="dark"}
>
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



