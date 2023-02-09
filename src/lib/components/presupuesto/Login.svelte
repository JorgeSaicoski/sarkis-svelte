<script>
    import Calculadora from "$lib/store/calculadora.js";
    let login = $Calculadora.login



    function submitNext(){
        $Calculadora.login = login
    }







</script>
<form on:submit={submitNext}>
    <label>
        <input type="radio" bind:group={login} value=false>
        Sin login
    </label>
    <label>
        <input type="radio" bind:group={login} value="cliente">
        Clientes
    </label>
    <label>
        <input type="radio" bind:group={login} value="completo">
        Con permisos
    </label>
    <button type="submit">Proximo</button>
</form>
<p>{login}</p>