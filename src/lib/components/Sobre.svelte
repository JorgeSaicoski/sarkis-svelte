<script>
    import DarkMode from "$lib/store/dark.js";
    import approval from "$lib/images/approval2.png"
    import coin from "$lib/images/coin.png"

    let dark
    DarkMode.subscribe((mode)=>{
        dark = mode
    })

    let y
    let x
    function handleMousemove(e){
        x = e.clientX
        y = -e.clientY
    }

</script>
<div class="title">
    <h3>Tenga su aplicacion desarrolada por una equipe especializadad en empreendedorismo.</h3>
    <p>Como el tero, el centinela del pampa, estamos siempre atento a las necesidades de nuestros clientes y a las nuevas tecnologias.</p>
</div>
<a href="/presupuesto"><button>Presupuesto</button></a><a href="/presupuesto"><button>Contacto</button></a>
<h2 class="sub-title baseDraw"
    class:whiteText={dark==="base"}
    class:baseText={dark==="dark"}
    class:base={dark==="base"}
    class:dark={dark==="dark"}
    on:mousemove={handleMousemove}
    style="  background-position-x: {x}px;
  background-position-y: {y}px;
"
>OBJETIVOS</h2>
<div class="left"
     class:darkText={dark==="base"}
     class:whiteText={dark==="dark"}
>
    <p><img src="{approval}"> En nuestra equipe hay especialistas en empreendedorismo, te ayudamos a organizar la idea de tu negocio y desarrollar la mejor aplicacion para el.</p>
    <p><img src="{coin}"> Sabremos o cuan valioso es la plata y el tiempo de nuestros cliente. Por eso, buscamos las mejores soluciones y en mas curto plazo posible.</p>
</div>
<div class="rigth">
    <div class="mision">
        <h3>Misión:</h3>
        <p>Desarollar aplicaciones para ayudar empresas y empleados a alcanzaren sus objetivos.</p>
    </div>
    <div class="vision">
        <h3>Visión</h3>
        <p>Tener una base de clientes que permita alquilar los mejores servidores.</p>
    </div>
</div>
<div class="valores">
    <h2
            class:base={dark==="base"}
            class:white={dark==="dark"}
            class:whiteText={dark==="base"}
            class:baseText={dark==="dark"}
    >Valores:</h2>
    <div class="texto"
         class:base={dark==="base"}
         class:dark={dark==="dark"}
         class:whiteText={dark==="base"}
         class:baseText={dark==="dark"}
    >
        <h3>Flexibilidad</h3>
        <p>Tenemos nuestros servicios base. Pero, siempre estamos abierto en realizar un nuevo servicio que pueda ayudar nuestro cliente a algun objetivo especifico.</p>
        <p>Ademas, si hubier alguna alteracion pontual en algun proyecto despues de la entrega, estaremos disponible a estudiarlo y, si posible, alterar.</p>
    </div>
    <div class="texto"
         class:base={dark==="base"}
         class:dark={dark==="dark"}
         class:whiteText={dark==="base"}
         class:baseText={dark==="dark"}
    >
        <h3>Pasion</h3>
        <p>Trabajamos con motivacion y pasion por lo que hacemos. El minimo trabajo va tener la misma gana y energia que un trabajo complejo.</p>
        <p>Nuestros proyectos son hechos en conjunto con el cliente. Por eso es importante que todos esteen motivados para que se tenga el mejor producto final.</p>
    </div>
    <div class="texto"
         class:base={dark==="base"}
         class:dark={dark==="dark"}
         class:whiteText={dark==="base"}
         class:baseText={dark==="dark"}
    >
        <h3>Liberdad del cliente</h3>
        <p>Entiendemos que las relaciones pueden tener fin. Y una relacion comercial no es excepción. Por eso nuestros proyectos siempre estan preparados para que el cliente siga sin nosostros</p>
        <p>Los codigos son "abiertos" y puedes contactar otro profesional o empresa para despegar la aplicación. Como el tero, nuestro codigo es libre.</p>
    </div>
</div>
