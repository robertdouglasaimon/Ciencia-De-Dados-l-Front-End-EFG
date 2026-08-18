<script setup>
  import Contador from './components/Contador/Contador.vue';
  import Cracha from './components/Cracha/Cracha.vue'
  import Saudacao from './components/Saudacao/Saudacao.vue';
</script>

<template>
  <Saudacao nome="Robert" texto="Esse é um exercicio feito em VUE!"/>
  <Cracha
    foto="https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=320&txt_altura=240&extensao=png&fundo_r=0.1836327463388443&fundo_g=0.3756103515625&fundo_b=0.367544065628733&texto_r=0&texto_g=0&texto_b=0&texto=Gerador%20Imagem%20%234Devs&tamanho_fonte=10"
    nome="Robert"
    departamento="Departamento de Tecnologia"
    funcionalidade="Desenvolvedor Web"
  />
  <Contador />
</template>
