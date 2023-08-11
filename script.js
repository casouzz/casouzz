$(document).ready(function () {
  $("#garanta-btn").click(function () {
      var email = $("#email").val();
      if (email !== "") {
          alert("Vaga garantida para o e-mail: " + email);
      } else {
          alert("Por favor, insira um e-mail válido.");
      }
      
      // Adicione a classe de animação "animate__bounce" ao botão de garanta-vaga
      $("#garanta-btn").addClass("animate__animated animate__bounce");
      
      // Remova a classe de animação após a animação terminar
      setTimeout(function () {
          $("#garanta-btn").removeClass("animate__animated animate__bounce");
      }, 1000); // Aguarde 1 segundo antes de remover a classe
  });

  $("#cyberseguranca-btn").click(function () {
      alert("Você escolheu o curso de Cyber Segurança.");
      
      // Adicione a classe de animação "animate__pulse" ao botão de Cyber Segurança
      $("#cyberseguranca-btn").addClass("animate__animated animate__pulse");
      
      // Remova a classe de animação após a animação terminar
      setTimeout(function () {
          $("#cyberseguranca-btn").removeClass("animate__animated animate__pulse");
      }, 1000); // Aguarde 1 segundo antes de remover a classe
  });

  $("#desenvolvimentoweb-btn").click(function () {
      alert("Você escolheu o curso de Desenvolvimento Web.");
      
      // Adicione a classe de animação "animate__pulse" ao botão de Desenvolvimento Web
      $("#desenvolvimentoweb-btn").addClass("animate__animated animate__pulse");
      
      // Remova a classe de animação após a animação terminar
      setTimeout(function () {
          $("#desenvolvimentoweb-btn").removeClass("animate__animated animate__pulse");
      }, 1000); // Aguarde 1 segundo antes de remover a classe
  });
});
