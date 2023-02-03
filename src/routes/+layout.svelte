<script>
    import "$lib/style/main.css"
    import logo from "$lib/images/whitelogo.png"
</script>

<nav>
    <div class="logo">
        <img src={logo} />
    </div>
    <button>
        Dark Mode
    </button>
    <div class="links">
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