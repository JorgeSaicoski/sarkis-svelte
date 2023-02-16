<script>
    import DarkMode from "$lib/store/dark.js";
    import wozcode from "$lib/images/wozcode.png";
    import devdropper from "$lib/images/devdropper.png";
    import jorge from "$lib/images/jorge.png";

    let dark
    DarkMode.subscribe((mode)=>{
        dark = mode
    })
</script>
<h2 class="baseText darkDraw"
        class:base={dark==="base"}
        class:white={dark==="dark"}
>Asociacion</h2>
<div class="container">
    <div class="card"
         class:base={dark==="base"}
         class:dark={dark==="dark"}
         class:baseText={dark==="dark"}
         class:whiteText={dark==="base"}
    >
        <h3
            class:dark={dark==="base"}
            class:base={dark==="dark"}
        >Wozcode</h3>
        <img src="{wozcode}">
        <div class="description">
            <p>Wozcode es una empresa de creacion de SaaS a medida.</p>
            <p>Compartimos desarrolladores y experiencias con esta gran empresa.</p>
        </div>
        <a href="https://wozcode.com/">Visitar</a>
    </div>
    <div class="card"
         class:base={dark==="base"}
         class:dark={dark==="dark"}
         class:baseText={dark==="dark"}
         class:whiteText={dark==="base"}
    >
        <h3
            class:dark={dark==="base"}
            class:base={dark==="dark"}
        >Dev Dropper</h3>
        <img src="{devdropper}">
        <div class="description">
            <p>Dev Dropper es una empresa de creacion de pequeños codigos.</p>
            <p>Así pueden crear complejos softwares rapidamente y con calidad, ya que estan pre-armados.</p>
            <p>Desarrollamos nuestros softwares en conjunto.</p>
        </div>
        <a href="https://devdropper.com/">Visitar</a>
    </div>
    <div class="card"
         class:base={dark==="base"}
         class:dark={dark==="dark"}
         class:baseText={dark==="dark"}
         class:whiteText={dark==="base"}
    >
        <h3
            class:dark={dark==="base"}
            class:base={dark==="dark"}
        >Jorge Adriano</h3>
        <img src="{jorge}">
        <div class="description">
            <p>Jorge Adriano es el creador de Sarkis Dev.</p>
            <p>Graduado en administracción, fue tutor de materias de finanzas, hoy trabaja con desarrollo web.</p>
            <p>Todavia utiliza sus conocimientos de administraccion para gestionar Sarkis Dev.</p>
        </div>
        <a href="https://jorgeadriano.com/">Visitar</a>
    </div>
</div>