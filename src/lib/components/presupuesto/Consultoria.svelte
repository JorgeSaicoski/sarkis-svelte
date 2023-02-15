<script>
    import Calculadora from "$lib/store/calculadora.js";
    let consultoria = "app"



    function submitNext(){
        $Calculadora.consultoria = consultoria
    }







</script>
<form on:submit={submitNext}>
    <label>
        <input type="radio" bind:group={consultoria} value="app">
        Aplicacion Online
    </label>
    <button type="submit">Proximo</button>
</form>
<h4>Creamos tu app</h4>
<p>Si tenes alguna idea de app que pueda ayudar tu empreendimento te ayudamos a concretizarla.</p>
<p>No dudes en entrar en contacto para hablar mas sobre tu idea.</p>