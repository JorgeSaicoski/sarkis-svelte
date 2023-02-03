<script>
    import "$lib/style/main.css"
    import logo from "$lib/images/whitelogo.png"
    import logoDark from "$lib/images/logo.png"
    import DarkMode from "$lib/store/dark.js";
    import darkmode from "$lib/images/favigreen.png"

    let dark
    DarkMode.subscribe((mode)=>{
        console.log(mode)
        dark = mode
    })
    let darkCheck = false
    function changeMode() {
        if (darkCheck){
            DarkMode.set("base")

        }else{
            DarkMode.set("dark")
        }
    }

</script>

<nav
        class:base={dark==="base"}
        class:dark={dark==="dark"}
>
    <div class="logo">
        {#if darkCheck}
            <img src={logoDark} />
        {:else}
            <img src={logo} />
        {/if}
    </div>
    <div class="buttones">
        <input type="checkbox" id="dark-mode" on:change={changeMode} bind:checked={darkCheck}>
        <label for="dark-mode" class="dark-mode-label">
            <img src="{darkmode}">
        </label>
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
<footer
        class:base={dark==="base"}
        class:dark={dark==="dark"}
>
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

