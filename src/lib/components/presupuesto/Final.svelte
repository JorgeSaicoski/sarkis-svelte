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



</script>


<div>
    <p>Valor para el desarrollo del product: {initial}</p>
</div>