<script>
    import "$lib/style/main.css"
    import logo from "$lib/images/whitelogo.png"
    import logoDark from "$lib/images/logo.png"
    import DarkMode from "$lib/store/dark.js";
    import darkmode from "$lib/images/favigreen.png"
    import bitcoin from "$lib/images/bitcoin.png"
    import uruguay from "$lib/images/uruguay-.png"
    import usa from "$lib/images/usa.png"

    let dark
    DarkMode.subscribe((mode)=>{
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
        class:whiteText={dark==="base"}
        class:baseText={dark==="dark"}
>
    <div class="paginas">
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
    <div class="content-media">
        <a href="mailto: jorge@sarkis.dev">jorge@sarkis.com</a>
        <a href="https://wa.me/09893309600">(+598)93-309-600</a>
        <a href="https://www.linkedin.com/in/jorge-saicoski/">GitHub</a>
        <a href="https://www.linkedin.com/in/jorge-saicoski/">LinkedIn</a>
    </div>

    <a target="_blank" href="https://icons8.com/">Icons by Icons8</a>
    <div class="payment"><p>Aceptamos <img src="{bitcoin}" alt="Bitcoin"><img src="{uruguay}" alt="Pesos Uruguayos"><img src="{usa}" alt="Dolares"></p></div>

</footer>

