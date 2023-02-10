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
<svelte:head>
    <title>SARKIS DEV desarrollo web</title>
</svelte:head>

<section id="sobre"
         class:white={dark==="base"}
         class:base={dark==="dark"}
>
    <Sobre></Sobre>
</section>
<div class="call"
     class:base={dark==="base"}
     class:dark={dark==="dark"}
     class:darkText={dark==="base"}
     class:whiteText={dark==="dark"}
>
    <p class="presupuesto">Haga un <a href="/presupuesto"
                                      class:white={dark==="base"}
                                      class:base={dark==="dark"}
    >PRESUPUESTO</a> de tu aplicacion sin compromiso!</p>
    <p class="contact">Y decidas si deseas entrar en <a
            class:white={dark==="base"}
            class:base={dark==="dark"}
    >CONTACTO!</a></p>
</div>
<section id="servicios"
         class:white={dark==="base"}
         class:base={dark==="dark"}
>
    <Servicios></Servicios>
</section>
<section id="vantajas"
         class:white={dark==="base"}
         class:base={dark==="dark"}
>
    <Vantajas></Vantajas>
</section>
<section id="asociacion"
         class:white={dark==="base"}
         class:base={dark==="dark"}
>
    <Asociacion></Asociacion>
</section>



