<script>
    import DarkMode from "$lib/store/dark.js";
    import logo from "$lib/images/favicon.png"

    let dark
    DarkMode.subscribe((mode)=>{
        dark = mode
    })
    let position = 1
    function activePosition(n){
        position = n
        console.log(n)
    }




</script>

<h2>Servicios</h2>
<div class="container">
    <button class="previous"><img src="{logo}"></button>
    <button class="next"><img src="{logo}"></button>
    <div
            class:activeLeft={position===1}
            class:activeRigth={position===2}
            class:hiddenRigth={position===3}
            class:hiddenLeft={position!==1&&position!==2&&position!==3}
            class:base={dark==="base"}
            class:dark={dark==="dark"}
    >
        <h3>Creación de Portfolio Web</h3>
        <p>Eres profesional y necesitas mostrar tu trabajo?</p>
        <p>Te ayudamos a crear un portfolio online.</p>
    </div>
    <div
            class:activeLeft={position===2}
            class:activeRigth={position===3}
            class:hiddenRigth={position===4}
            class:hiddenLeft={position!==2&&position!==3&&position!==4}
            class:base={dark==="base"}
            class:dark={dark==="dark"}
    >
        <h3>Aplicaciones Web y Mobile</h3>
        <p>Necesitas de una aplicacion para tu negocio?</p>
        <p>Controle de estoque, formularios de controle, plataforma de clases...</p>
        <p>Te ayudamos a planear, crear y implementar la aplicacion.</p>
    </div>
    <div
            class:activeLeft={position===3}
            class:activeRigth={position===4}
            class:hiddenRigth={position===5}
            class:hiddenLeft={position!==5&&position!==3&&position!==4}
            class:base={dark==="base"}
            class:dark={dark==="dark"}
    >
        <h3>Despliegue de Aplicaciones</h3>
        <p></p>
    </div>
    <div
            class:activeLeft={position===4}
            class:activeRigth={position===5}
            class:hiddenRigth={position===1}
            class:hiddenLeft={position!==1&&position!==5&&position!==4}
            class:base={dark==="base"}
            class:dark={dark==="dark"}
    >
        <h3>Desarrollo de Empreendedorismo</h3>
        <p></p>
    </div>
    <div
            class:activeLeft={position===5}
            class:activeRigth={position===1}
            class:hiddenRigth={position===2}
            class:hiddenLeft={position!==5&&position!==1&&position!==2}
            class:base={dark==="base"}
            class:dark={dark==="dark"}
    >
        <h3>eCommerce</h3>
        <p></p>
    </div>
</div>


<button  on:click={()=>{activePosition(1)}}>1</button>
<button on:click={()=>{activePosition(2)}}>2</button>
<button on:click={()=>{activePosition(3)}}>3</button>
<button on:click={()=>{activePosition(4)}}>4</button>
<button on:click={()=>{activePosition(5)}}>5</button>



