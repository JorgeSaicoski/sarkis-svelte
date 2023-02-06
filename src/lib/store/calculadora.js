import {writable} from "svelte/store";

const Calculadora=writable({
    "tipo": null,
    "contact": null,
    "eCommerce": null,
    "cloud": null,
    "customerTraffic": null,
    "complexity": null
})

export default Calculadora