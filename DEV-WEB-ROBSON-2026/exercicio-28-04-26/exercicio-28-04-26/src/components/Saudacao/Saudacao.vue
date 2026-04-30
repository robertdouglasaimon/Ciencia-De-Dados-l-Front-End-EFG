<script setup>
import './Saudacao.css'

  defineProps({
    nome: {
      type: String,
      required: true
    },
    texto: {
        type: String,
        required: true
    }

  })
</script>


<template>
  <div class="saudacao">
    <h1>Olá, {{nome}}</h1>
    <p>{{texto}}</p>
  </div>
</template>
