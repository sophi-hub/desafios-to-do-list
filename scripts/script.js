document.getElementById("form-login").addEventListener("submit", e => {
    e.preventDefault();
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const resultado = usuario === "admin" && senha === "1234" 
      ? "Login bem-sucedido!" 
      : "Usuário ou senha inválidos.";
    document.getElementById("login-result").textContent = resultado;
  });
  

  document.getElementById("form-desconto").addEventListener("submit", e => {
    e.preventDefault();
    const valor = parseFloat(document.getElementById("valor").value);
    const desconto = valor > 100 ? valor * 0.1 : valor * 0.05;
    document.getElementById("desconto-result").textContent = 
      `Desconto aplicado: R$ ${desconto.toFixed(2)}. Valor final: R$ ${(valor - desconto).toFixed(2)}`;
  });
  

  document.getElementById("form-pares").addEventListener("submit", e => {
    e.preventDefault();
    const numeros = document.getElementById("numeros").value
      .split(",")
      .map(n => parseInt(n.trim()))
      .filter(n => !isNaN(n));
    const pares = numeros.filter(n => n % 2 === 0);
    document.getElementById("pares-result").textContent = `Números pares: ${pares.join(", ")}`;
  });
  

  const tarefas = [];
  document.getElementById("form-tarefa").addEventListener("submit", e => {
    e.preventDefault();
    const descricao = document.getElementById("descricao").value;
    const id = Date.now();
    tarefas.push({ id, descricao, concluida: false });
    atualizarLista();
  });
  
  function atualizarLista() {
    const lista = document.getElementById("lista-tarefas");
    lista.innerHTML = "";
    tarefas.forEach(t => {
      const item = document.createElement("li");
      item.innerHTML = `
        <span class="${t.concluida ? "completed" : ""}">${t.descricao}</span>
        <button onclick="marcarConcluida(${t.id})">${t.concluida ? "Desfazer" : "Concluir"}</button>
        <button onclick="removerTarefa(${t.id})">Remover</button>
      `;
      lista.appendChild(item);
    });
  }
  
  function marcarConcluida(id) {
    const tarefa = tarefas.find(t => t.id === id);
    tarefa.concluida = !tarefa.concluida;
    atualizarLista();
  }
  
  function removerTarefa(id) {
    const index = tarefas.findIndex(t => t.id === id);
    tarefas.splice(index, 1);
    atualizarLista();
  }
  