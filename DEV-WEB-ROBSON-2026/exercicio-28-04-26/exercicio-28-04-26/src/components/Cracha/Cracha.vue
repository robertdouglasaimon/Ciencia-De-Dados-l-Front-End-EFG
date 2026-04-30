<script setup>
    import './Cracha.css'
    
    defineProps({
        foto: {
        type: String,
        required: true
        },
        nome: {
        type: String,
        required: true
        },
        departamento: {
        type: String,
        required: true
        },
        funcionalidade: {
        type: String,
        required: true
        }
    })
</script>

<template>
  <div class="cracha">
    <img :src="foto" alt="Foto do crachá" />
    <p>{{ nome }}</p>
    <p>{{ departamento }}</p>
    <p>{{ funcionalidade }}</p>
  </div>
</template>