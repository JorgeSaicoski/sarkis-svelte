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
<div>
    <p>Haga un <a href="/presupuesto">PRESUPUESTO</a> de tu aplicacion sin compromiso!</p>
    <p>Y decidas si deseas entrar en <a>contacto!</a></p>
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



