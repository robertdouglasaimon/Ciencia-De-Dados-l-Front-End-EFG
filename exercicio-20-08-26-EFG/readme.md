# 🛒 Sistema de Comunicação em E-commerce

![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)
![Arquitetura](https://img.shields.io/badge/Arquitetura-Backend-blue)
![Status](https://img.shields.io/badge/Projeto-Exercício-lightgrey)

## 📌 Informações do Projeto
- **Aluno:** Robert Douglas  
- **Professor:** Robson Souza  
- **Módulo:** Arquitetura de Sistemas Backend  
- **Instituição:** EFG/UFG Paulo Renato  
- **Horário:** Noturno  

---

## 🎯 Objetivo
Este projeto simula a **comunicação entre microsserviços** em um sistema de e-commerce.  
O foco é entender **quando usar comunicação síncrona ou assíncrona**, e como aplicar **REST, RabbitMQ e gRPC** em diferentes cenários.

---

## ⚙️ Estrutura do Exercício

### **1. Checkout (usuário espera resposta)**
- Estratégia: **Síncrona (REST)**  
- O usuário só recebe resposta após verificar estoque e pagamento.  

### **2. Notificação (não precisa esperar)**
- Estratégia: **Assíncrona (RabbitMQ)**  
- O pedido é colocado em uma fila, e outro serviço envia o e-mail.  

### **3. Relatório mensal (processo pesado)**
- Estratégia: **Batch assíncrono**  
- O relatório é processado em background, sem travar o sistema.  

### **4. Status interno (comunicação entre microsserviços)**
- Estratégia: **gRPC**  
- Comunicação rápida e tipada entre serviços internos.  

---

## 📂 Arquivos

- `etapa1_checkout.js` → Simulação do checkout (REST síncrono)  
- `etapa2_notificacao.js` → Simulação de notificação (RabbitMQ assíncrono)  
- `etapa3_relatorio.js` → Simulação de relatório mensal (batch assíncrono)  
- `etapa4_status.js` → Simulação de atualização de status (gRPC)  
- `ecommerce_fluxo.js` → Fluxo completo integrando todas as etapas  

---

## 🚀 Como executar

1. Instale o Node.js (versão 18 ou superior).  
2. Clone ou copie os arquivos para uma pasta.  
3. Execute cada etapa separada:  
```bash
   node etapa1_checkout.js
   node etapa2_notificacao.js
   node etapa3_relatorio.js
   node etapa4_status.js
```

4. Ou rode o fluxo completo:
```bash
    node ecommerce_fluxo.js
```

## ✅ Resultado esperado
Mensagens no console confirmando cada etapa do processo:
- Checkout → estoque e pagamento.
- Notificação → envio para fila.
- Relatório → processamento em background.
- Status → atualização interna.

## 📖 Aprendizado
Este exercício mostra que não existe resposta única correta.
O importante é argumentar com base nos trade-offs de:
- Acoplamento
- Latência
- Resiliência
- Complexidade operacional

E é isso, atividade concluida com sucesso (creio eu que ta tudo certo né KKKK)
Agita!

![Dancinha](/exercicio-20-08-26-EFG/dance-meme.gif)