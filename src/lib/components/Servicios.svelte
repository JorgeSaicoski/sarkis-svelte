<script>
    import DarkMode from "$lib/store/dark.js";

    let dark
    DarkMode.subscribe((mode)=>{
        dark = mode
    })


</script>

<h2>Servicios</h2>
<div class="container">
    <div class="hiddenLeft"
            class:base={dark==="base"}
            class:dark={dark==="dark"}
    >
        <h3>Creación de Portfolio Web</h3>
        <p>Eres profesional y necesitas mostrar tu trabajo?</p>
        <p>Te ayudamos a crear un portfolio online. Con el podrás crear un portfolio que sea facil de mantener actualizado.</p>
    </div>
    <div class="activeLeft"
            class:base={dark==="base"}
            class:dark={dark==="dark"}
    >
        <h3>Aplicaciones Web y Mobile</h3>
        <p>Necesitas de una aplicacion para tu negocio?</p>
        <p>Controle de estoque, formularios de controle, plataforma de clases...</p>
        <p>Te ayudamos a planear, crear y implementar la aplicacion.</p>
    </div>
    <div class="activeRigth"
            class:base={dark==="base"}
            class:dark={dark==="dark"}
    >
        <h3>Despliegue de Aplicaciones</h3>
        <p></p>
    </div>
    <div class="hiddenRigth"
            class:base={dark==="base"}
            class:dark={dark==="dark"}
    >
        <h3>Desarrollo de Empreendedorismo</h3>
        <p></p>
    </div>
    <div class="hiddenLeft"
            class:base={dark==="base"}
            class:dark={dark==="dark"}
    >
        <h3>eCommerce</h3>
        <p></p>
    </div>
</div>



