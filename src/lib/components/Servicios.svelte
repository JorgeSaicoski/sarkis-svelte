<script>
    import DarkMode from "$lib/store/dark.js";
    import logo from "$lib/images/favicon.png"

    let dark
    DarkMode.subscribe((mode)=>{
        dark = mode
    })
    let position = 1
    function activePosition(n){
        if (position !== n){
            next()
            setTimeout(() => {
                activePosition(n)
            }, 300)
        }
    }
    function next(){
        if (position < 5){
            position ++
        } else {
            position = 1
        }
    }
    function previous(){
        if (position > 1){
            position --
        } else {
            position = 5
        }
    }




</script>

<h2>Servicios</h2>
<div class="container"
     class:whiteText={dark==="base"}
     class:baseText={dark==="dark"}
>
    <span class="background"
          class:dark={dark==="base"}
          class:white={dark==="dark"}
    ></span>
    <button class="previous" on:click={previous}><img src="{logo}"></button>
    <button class="next" on:click={next}><img src="{logo}"></button>
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
        <p>Tenes una aplicacion y necesitas ayuda para despegarla?</p>
        <p>Te ayudamos a dejar tu app online con las mejores herramientas disponibles.</p>
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
        <p>Queres empreender o ya tiene una empresa y necesitas ayuda para crecer?</p>
        <p>Ayudamos a analisar el mercado y tu producto. Ademas de crear una app especifica para ti.</p>
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

<div class="buttones">
    <button on:click={()=>{activePosition(1)}}
            class:white={dark==="base"}
            class:dark={dark==="dark"}
            class:darkText={dark==="base"}
            class:whiteText={dark==="dark"}
    ><p>Portfolio</p><span
            class:dark={dark==="base"}
            class:white={dark==="dark"}
    ></span>
        <span class="span-text"
                class:whiteText={dark==="base"}
                class:darkText={dark==="dark"}
        >Conocer</span>
    </button>
    <button on:click={()=>{activePosition(2)}}
            class:white={dark==="base"}
            class:dark={dark==="dark"}
            class:darkText={dark==="base"}
            class:whiteText={dark==="dark"}
    ><p>Aplicaciones</p><span
            class:dark={dark==="base"}
            class:white={dark==="dark"}
    ></span>
        <span class="span-text"
              class:whiteText={dark==="base"}
              class:darkText={dark==="dark"}
        >Conocer</span>
    </button>
    <button on:click={()=>{activePosition(3)}}
            class:white={dark==="base"}
            class:dark={dark==="dark"}
            class:darkText={dark==="base"}
            class:whiteText={dark==="dark"}
    ><p>Despliegue</p><span
            class:dark={dark==="base"}
            class:white={dark==="dark"}
    ></span>
        <span class="span-text"
              class:whiteText={dark==="base"}
              class:darkText={dark==="dark"}
        >Conocer</span>
    </button>
    <button on:click={()=>{activePosition(4)}}
            class:white={dark==="base"}
            class:dark={dark==="dark"}
            class:darkText={dark==="base"}
            class:whiteText={dark==="dark"}
    ><p>Empreendedorismo</p><span
            class:dark={dark==="base"}
            class:white={dark==="dark"}
    ></span>
        <span class="span-text"
              class:whiteText={dark==="base"}
              class:darkText={dark==="dark"}
        >Conocer</span>
    </button>
    <button on:click={()=>{activePosition(5)}}
            class:white={dark==="base"}
            class:dark={dark==="dark"}
            class:darkText={dark==="base"}
            class:whiteText={dark==="dark"}
    ><p>eCommerce</p><span
            class:dark={dark==="base"}
            class:white={dark==="dark"}
    ></span>
        <span class="span-text"
              class:whiteText={dark==="base"}
              class:darkText={dark==="dark"}
        >Conocer</span>
    </button>
</div>




