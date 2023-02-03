<script>
    import "$lib/style/main.css"
    import logo from "$lib/images/whitelogo.png"
    import DarkMode from "$lib/store/dark.js";

    let dark
    DarkMode.subscribe((mode)=>{
        console.log(mode)
        dark = mode
    })

    function changeToDark(){
        DarkMode.set("dark")
    }
    function changeToBase(){
        DarkMode.set("base")
    }


</script>

<nav
        class:base={dark==="base"}
        class:dark={dark==="dark"}
>
    <div class="logo">
        <img src={logo} />
    </div>
    <div class="buttones">
        <button on:click={changeToBase}>
            Pagina Clara
        </button>
        <button on:click={changeToDark}>
            Pagina Escura
        </button>
    </div>
    <div class="links"
         class:whiteText={dark==="base"}
         class:baseText={dark==="dark"}
    >
        <div>
            <a href="/">Inicio</a>
        </div>
        <div>
            <a>Servicios</a>
        </div>
        <div>
            <a>Vantajas</a>
        </div>
        <div>
            <a href="/presupuesto">Presupuesto</a>
        </div>
        <div>
            <a>Asociación</a>
        </div>
    </div>
</nav>
<slot></slot>
<footer>
    <div>
        <div>
            <a>Inicio</a>
        </div>
        <div>
            <a>Servicios</a>
        </div>
        <div>
            <a>Vantajas</a>
        </div>
        <div>
            <a>Presupuesto</a>
        </div>
    </div>
    <div>
        Contato Info
    </div>
</footer>