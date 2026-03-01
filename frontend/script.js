const API_URL = "http://localhost:3000/usuarios";

const form = document.getElementById("user-form");
const lista = document.getElementById("lista-usuarios");
const mensagem = document.getElementById("mensagem");

// ===============================
// CARREGAR USUÁRIOS
// ===============================
async function carregarUsuarios() {
  lista.innerHTML = "";
  mensagem.textContent = "";

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Erro na requisição");
    }

    const usuarios = await response.json();

    usuarios.forEach(user => {
      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td>${user.nome}</td>
        <td>${user.email}</td>
        <td>
          <button onclick="deletarUsuario('${user.id}')">
            Excluir
          </button>
        </td>
      `;

      lista.appendChild(tr);
    });

  } catch (error) {
    mensagem.textContent = "Erro ao carregar usuários";
    console.error("Erro:", error);
  }
}

// ===============================
// CADASTRAR USUÁRIO
// ===============================
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  mensagem.textContent = "";

  const nome = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const idade = document.getElementById("idade")?.value || 0;

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ nome, email, idade })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Erro ao cadastrar");
    }

    mensagem.textContent = "Usuário cadastrado com sucesso!";
    form.reset();

    carregarUsuarios(); // 🔥 Atualiza lista automaticamente

  } catch (error) {
    mensagem.textContent = error.message;
    console.error("Erro:", error);
  }
});

// ===============================
// DELETAR USUÁRIO
// ===============================
async function deletarUsuario(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    });

    if (!response.ok) {
      throw new Error("Erro ao deletar");
    }

    carregarUsuarios();

  } catch (error) {
    mensagem.textContent = "Erro ao deletar usuário";
    console.error("Erro:", error);
  }
}

// ===============================
// CARREGA AUTOMATICAMENTE AO ABRIR
// ===============================
carregarUsuarios();