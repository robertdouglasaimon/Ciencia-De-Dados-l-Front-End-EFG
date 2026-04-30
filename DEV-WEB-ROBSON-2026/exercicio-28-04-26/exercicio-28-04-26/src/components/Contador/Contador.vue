<script setup>
    import {ref} from 'Vue';
    import './Contador.css'

    function incrementar () {
        contador.value++;
    } 

    function decrementar() {
        contador.value--;
    }

    function zerar() {
        contador.value = 0;
    }
    
</script>

<template>
    <h2>{{contador}}</h2>
    <div class="botoes">
        <button @click="contador">
            Incrementar
        </button>

        <button @click="contador">
            Decrementar
        </button>

        <button @click="contador">
            Zerar
        </button>
    </div>
</template>