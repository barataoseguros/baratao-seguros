import React, { useState } from "react";

export default function App() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    marca: "",
    modelo: "",
    ano: "",
    cep: "",
    uso: "",
  });

  const [passo, setPasso] = useState(1);
  const [resultado, setResultado] = useState(null);

  const marcas = ["Ford", "Chevrolet", "Volkswagen", "Honda", "Toyota"];
  const usos = ["Particular", "Comercial", "Aluguel"];

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validarPasso1() {
    return form.nome && form.email && form.telefone;
  }

  function validarPasso2() {
    return form.marca && form.modelo && form.ano && form.cep && form.uso;
  }

  function avancar() {
    if (passo === 1 && !validarPasso1()) {
      alert("Preencha seus dados pessoais corretamente.");
      return;
    }
    if (passo === 2 && !validarPasso2()) {
      alert("Preencha todos os dados do veículo.");
      return;
    }
    setPasso(passo + 1);
  }

  function voltar() {
    setPasso(passo - 1);
  }

  function calcularCotacao() {
    const base = 1800;
    const idadeCarro = 2025 - parseInt(form.ano);
    const fatorUso = form.uso === "Comercial" ? 1.4 : form.uso === "Aluguel" ? 1.7 : 1;
    const preco = base * Math.max(0.4, 1 - idadeCarro * 0.06) * fatorUso;
    setResultado(`Olá ${form.nome}, sua cotação estimada é R$ ${preco.toFixed(2)}`);
  }

  return (
    <div style={{ maxWidth: 600, margin: "auto", fontFamily: "Arial, sans-serif", padding: 20 }}>
      {/* restante do JSX */}
      {/* ... seu código */}
    </div>
  );
}
