<script>
    import DarkMode from "$lib/store/dark.js";

    let dark
    DarkMode.subscribe((mode)=>{
        dark = mode
    })
</script>
<div class="title">
    <h3>Tenga su aplicacion desarrolada por una equipe especializadad en empreendedorismo.</h3>
    <p>Como el tero, el centinela del pampa, estamos siempre atento a las necesidades de nuestros clientes y a las nuevas tecnologias.</p>
</div>
<h2 class="sub-title">OBJETIVOS</h2>
<div class="left"
     class:baseText={dark==="base"}
     class:whiteText={dark==="dark"}
>
    <p>Creamos la aplicación que se encaja con su negocio. Nuestros softwares respetan el flujo normal de tu negocio, el se adapta a ti y no tu a el.</p>
    <p>Buscamos dar la mejor experiencia posible en el proceso de creacion y en la utilizacion de nuestros productos. Queremos nuestros clientes felices y satisfechos.</p>
</div>
<div class="rigth dark whiteText baseDraw">
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
    <h3 class="sub-title">Valores:</h3>
    <div class="texto">
        <h3>Flexibilidad</h3>
        <p>Tenemos nuestros servicios base. Pero, siempre estamos abierto en realizar un nuevo servicio que pueda ayudar nuestro cliente a algun objetivo especifico.</p>
        <p>Ademas, si hubier alguna alteracion pontual en algun proyecto despues de la entrega, estaremos disponible a estudiarlo y, si posible, alterar.</p>
    </div>
    <div class="texto">
        <h3>Pasion</h3>
        <p>Trabajamos con motivacion y pasion por lo que hacemos. El minimo trabajo va tener la misma gana y energia que un trabajo complejo.</p>
        <p>Nuestros proyectos son hechos en conjunto con el cliente. Por eso es importante que todos esteen motivados para que se tenga el mejor producto final.</p>
    </div>
    <div class="texto">
        <h3>Liberdad del cliente</h3>
        <p>Entiendemos que las relaciones pueden tener fin. Y una relacion comercial no es excepción. Por eso nuestros proyectos siempre estan preparados para que el cliente siga sin nosostros</p>
        <p>Los codigos son "abiertos" y puedes contactar otro profesional o empresa para despegar la aplicación. Como el tero, nuestro codigo es libre.</p>
    </div>
</div>
