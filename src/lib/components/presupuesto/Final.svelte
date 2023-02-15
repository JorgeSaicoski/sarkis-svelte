<script>
    import Calculadora from "$lib/store/calculadora.js";

    let month
    let initial
    let stacks = []
    let obs = []

    if ($Calculadora.tipo === "portfolio" || $Calculadora.tipo === "blog"){
        stacks.push("Django")
        initial = 50
        if ($Calculadora.contact !== "dataBase"){
            obs.push("Con Django la creacion de una area de contacto es muy facil. Aconsejamos que pongas las dos opciones, contacto a dentro del website y por redes sociales.")
        }
    } else if ($Calculadora.tipo === "catalago"){
        stacks.push("Svelte")
        initial = 30
        if ($Calculadora.contact === "dataBase"){
            stacks.push("NodeJS")
            initial = 60
        }
    } else if ($Calculadora.tipo === "ecommerce") {
        if ($Calculadora.eCommerce === "cart"){
            stacks.push("Svelte", "Nodejs", "Django")
            obs.push("Debemos estudiar si es mejor trabajar con Django y crear una aplicacion rapida y segura. O se debemos buscar una solucion con NodeJS y crear una aplicacion mas especifica.")
            initial = 100
        } else{
            stacks.push("Svelte", "Nodejs")
            obs.push("Una aplicacion con chat podra quedar un poco mas completa. Necesitando mas estrutura de cloud y mas tiempo de desarrollo.")
            initial = 150
        }
        if ($Calculadora.login && $Calculadora.login === "cliente"){
            initial += 30
        }
        if ($Calculadora.login && $Calculadora.login === "completo"){
            initial += 100
        }
    } else{
        if ($Calculadora.consultoria === "app"){
            initial = 100
            stacks.push("Svelte", "Nodejs", "Django", "Angular", "React")
        }
    }

    if ($Calculadora.cloud === "si"){
        month = 30
        if ($Calculadora.customerTraffic === "middle"){
            month = 60
        } else if ($Calculadora.customerTraffic === "big"){
            month = null
            obs.push("Debemos estudiar el caso para saber la mejor solucion estructural.")
        }
    }
    function resetCalculadora(){
        Calculadora.set({
            tipo: null,
            contact: null,
            eCommerce: null,
            consultoria: null,
            login: null,
            cloud: null,
            customerTraffic: null
        })
    }



</script>


<div>
    <div class="presupuesto-value">
        <p>La prevision del costo para produccion de tu aplicacion es {initial} USD</p>
        {#if month}
            <p>Y el valor de manutencion es {month} USD</p>
        {/if}
    </div>
    <h3>Tecnologias que vamos utilizar:</h3>
    {#each stacks as stack, i}
        {#if stack==="Svelte"}
            <h2>SvelteJS</h2>
            <p>Esta es una herramienta moderna y con recursos que permiten un rapido desarrollo con muchas funcionalidad.</p>
            <p>Es una herramienta de FrontEnd completa y aconsejada para aplicaciones con pocas paginas.</p>
        {/if}
        {#if stack==="Angular"}
            <h2>AngularJS</h2>
            <p>Una herramienta perfecta para grandes proyectos. Mantenida por Google y siempre bien actualizada.</p>
            <p>Angular tiene una organización de código que permite escalar facilmente. Aconsejado para aplicaciones que puedan crecer.</p>
        {/if}
        {#if stack==="React"}
            <h2>ReactJS</h2>
            <p>Como Angular es una herramienta para proyectos mayores.</p>
            <p>Es mas utilizado que Angular y tambien tiene una alta escalabilidad.</p>
            <p>Aconsejado para aplicaciones que puedan crecer.</p>
        {/if}
        {#if stack==="Nodejs"}
            <h2>NodeJS</h2>
            <p>NodeJS es un backend moderno a donde se puede crear una aplicacion escalable y altamente costumizable.</p>
            <p>Es posible crear una pagina de manutencion donde el cliente pueda alterar la información del website.</p>
            <p>Tambien se puede crear aplicaciones menores, como por ejemplo, una mensajareria.</p>
        {/if}
        {#if stack==="Django"}
            <h2>Django</h2>
            <p>Django es una tecnologia completa, Front y Backend. Funciona con Python que es una de las lenguages mas modernas.</p>
            <p>Django es muy aconsejable para proyectos que necesites de permisos. Por ejemplo, por menor que sea el proyecto el viene con una area de administracción.</p>
            <p>Así, es posible que el cliente agregué productos, portfolios y hasta paginas. Sin necesitar de la ayudar del programador.</p>
            <p>Django solo es una gran herramienta. Pero es mas poderosa con una tecnologia de FrontEnd.</p>
        {/if}
    {/each}
    <button on:click={resetCalculadora}>Nuevo Calculo</button>
</div>