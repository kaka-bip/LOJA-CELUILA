    function enviarNome() {
      var nome = document.getElementById("nomeUsuario").value;

      if (nome.trim() !== "") {
        document.getElementById("fala").innerText = "Olá " + nome + ", seja bem-vindo(a)!";
      } else {
        document.getElementById("fala").innerText = "Por favor, digite seu nome.";
      }
    }