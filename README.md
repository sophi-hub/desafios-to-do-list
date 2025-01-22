# 🚀 Desafios de Programação em JavaScript com HTML e CSS

Este projeto implementa uma série de desafios de programação usando **JavaScript**, **HTML** e **CSS**, com foco em boas práticas de código, acessibilidade e SEO. Cada desafio demonstra conceitos como operadores lógicos, funções, arrays, objetos e funções callback.

---

## **Desafios Implementados**

### 1. 🔒 **Validação de Login**
- **Descrição:**  
  Um formulário simples que valida um usuário e senha. Apenas o login "admin" e a senha "1234" são considerados válidos.
- **Tecnologias Utilizadas:**  
  - JavaScript (validação com operadores lógicos `AND` e `OR`)
  - HTML (formulário semântico com `<form>` e `<input>`)
  - CSS (estilização do formulário e botão)
- **Boas Práticas:**  
  - ✅ Validação no lado do cliente para melhorar a experiência do usuário.  
  - ✅ Utilização de `aria-live` para garantir que mensagens de erro ou sucesso sejam anunciadas por leitores de tela.

---

### 2. 💸 **Cálculo de Desconto Progressivo**
- **Descrição:**  
  Calcula o desconto aplicado em um produto com base no valor informado:  
  - 10% para valores acima de R$100.  
  - 5% para valores iguais ou menores que R$100.  
- **Tecnologias Utilizadas:**  
  - JavaScript (uso de operador ternário para lógica condicional)
  - HTML (formulário semântico com rótulos claros)
  - CSS (estilização minimalista e responsiva)
- **Boas Práticas:**  
  - ✅ Exibição clara do resultado do cálculo.  
  - ✅ Uso de campos numéricos (`<input type="number">`) para entrada de valores, evitando erros de formato.

---

### 3. 🔢 **Filtrando Números Pares**
- **Descrição:**  
  Recebe uma lista de números separados por vírgulas e exibe apenas os números pares.  
- **Tecnologias Utilizadas:**  
  - JavaScript (uso de `Array.map()`, `Array.filter()` e funções callback)
  - HTML (formulário para entrada de dados)
  - CSS (design limpo para facilitar a leitura dos resultados)
- **Boas Práticas:**  
  - ✅ Validação de entrada para evitar valores inválidos.  
  - ✅ Uso de métodos funcionais do JavaScript para processamento limpo e eficiente de arrays.

---

### 4. ✅ **Gerenciador de Tarefas**
- **Descrição:**  
  Um simples gerenciador de tarefas que permite adicionar, marcar como concluídas e remover tarefas.
- **Tecnologias Utilizadas:**  
  - JavaScript (manipulação do DOM, objetos e eventos)
  - HTML (estrutura com `<ul>` e `<li>` para lista de tarefas)
  - CSS (estilização com classes para tarefas concluídas e botões de ação)
- **Boas Práticas:**  
  - ✅ Separação de responsabilidades com funções dedicadas para cada ação.  
  - ✅ Uso de IDs únicos (`Date.now()`) para identificar tarefas.  
  - ✅ Inclusão de estilos visuais para indicar tarefas concluídas (`text-decoration: line-through`).

---

## **Tecnologias Utilizadas** 🛠️
- **HTML:** Estrutura semântica com tags como `<header>`, `<main>`, `<section>`, `<form>` e `<footer>`.  
- **CSS:** Design responsivo e limpo, com foco em acessibilidade visual.  
- **JavaScript:**  
  - Manipulação do DOM para interatividade.  
  - Utilização de funções modernas como `map()`, `filter()` e callbacks.  
  - Uso de operadores lógicos e ternários para lógica condicional eficiente.

---

## **Boas Práticas Adotadas** 🌟
1. **Acessibilidade:** ♿  
   - Utilização de `aria-live` para mensagens dinâmicas.  
   - Uso de rótulos (`<label>`) associados aos campos de entrada.  

2. **SEO:** 🔍  
   - Títulos e descrições claros no `<head>`.  
   - Tags semânticas para melhorar o ranqueamento nos motores de busca.  

3. **Código Limpo:** 🧹  
   - Funções pequenas e reutilizáveis.  
   - Nomes de variáveis e funções descritivos.  
   - Uso de templates dinâmicos para evitar repetição de código.  

4. **Responsividade:** 📱  
   - Layout adaptável em diferentes dispositivos.  
   - Botões e campos de entrada fáceis de usar em telas menores.

---

## **Como Executar o Projeto** 🖥️
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/desafios-programacao.git
   ```
2. Navegue até o diretório do projeto:
  ```bash
  cd seu-repositorio
  ```
3. Abra o arquivo `index.html` em seu navegador.




