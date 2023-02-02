<script>
    import { scale, fly} from 'svelte/transition';
    import { quintOut } from "svelte/easing";
</script>

<h2
        transition:scale={{ delay: 250, duration: 300, easing: quintOut }}

>Servicios</h2>
<div
        in:fly={{x:-500, delay:500}}
        out:fly={{x:500}}
>
    <h3>Creación de Portfolio Web</h3>
    <p>Eres profesional y necesitas mostrar tu trabajo?</p>
    <p>Te ayudamos a crear un portfolio online. Con el podrás crear un portfolio que sea facil de mantener actualizado.</p>
    <p>Por padron, hacemos una pagina con una lista de proyectos/productos categorizadas de la manera que el cliente elija, con paginas de detalles y un sector para contactar.</p>
</div>
<div
        in:fly={{y:-500,delay:750}}
        out:fly={{x:-500}}>
    <h3>Aplicaciones Web y Mobile</h3>
    <p>Necesitas de una aplicacion para tu negocio?</p>
    <p>Controle de estoque, formularios de controle, plataforma de clases...</p>
    <p>Te ayudamos a planear, crear y implementar la aplicacion.</p>
</div>
<div
        in:fly={{x:500, delay:1000}}
        out:fly={{x:-500}}
>
    <h3>Despliegue de Aplicaciones</h3>
    <p></p>
</div>
<div
        in:fly={{y:500, delay:1250}}
        out:fly={{x:-500}}
>
    <h3>Desarrollo de Empreendedorismo</h3>
    <p></p>
</div>


