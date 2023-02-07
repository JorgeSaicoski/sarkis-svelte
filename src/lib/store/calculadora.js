import {writable} from "svelte/store";

const calculadora = () =>{
    const info ={
        tipo: null,
        contact: null,
        eCommerce: null,
        login: null,
        cloud: null,
        customerTraffic: null,
        complexity: null,
    }
    const { subscribe, set, update } = writable(info)

        init: ()=> {
            update(info => {
                info.tipo = false
                info.contact = false
                info.eCommerce = false
                return info
            })
        },
        setTipo: (tipo)=>{
            info.tipo= tipo
        },
        setContact: (contact)=>{
            info.contact= contact
        },

    return {
        subscribe,
        set,
        update,
        ...methods
    }
}


export default calculadora