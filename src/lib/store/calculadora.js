import {writable} from "svelte/store";



const Calculadora=writable({
    tipo: null,
    contact: null,
    eCommerce: null,
    consultoria: null,
    login: null,
    cloud: null,
    customerTraffic: null
})

export default Calculadora