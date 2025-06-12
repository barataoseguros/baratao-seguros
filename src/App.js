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
    // Simula uma cotação básica:
    const base = 1800;
    const idadeCarro = 2025 - parseInt(form.ano);
    const fatorUso = form.uso === "Comercial" ? 1.4 : form.uso === "Aluguel" ? 1.7 : 1;
    const preco = base * Math.max(0.4, 1 - idadeCarro * 0.06) * fatorUso;
    setResultado(`Olá ${form.nome}, sua cotação estimada é R$ ${preco.toFixed(2)}`);
  }

  return (
    <div style={{ maxWidth: 600, margin: "auto", fontFamily: "Arial, sans-serif", padding: 20 }}>
      <header style={{ textAlign: "center", marginBottom: 40 }}>
        <img src="/logo-baratao.png" alt="Baratão Seguros" style={{ maxWidth: 180, marginBottom: 10 }} />
        <h1>Cotação de Seguro de Carro</h1>
      </header>

      {passo === 1 && (
        <div>
          <h2>Seus dados</h2>
          <input
            name="nome"
            placeholder="Nome completo"
            value={form.nome}
            onChange={handleChange}
            style={{ width: "100%", padding: 10, marginBottom: 10 }}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            style={{ width: "100%", padding: 10, marginBottom: 10 }}
          />
          <input
            name="telefone"
            placeholder="Telefone"
            value={form.telefone}
            onChange={handleChange}
            style={{ width: "100%", padding: 10, marginBottom: 10 }}
          />
          <button onClick={avancar} style={{ padding: 15, width: "100%", backgroundColor: "#007bff", color: "#fff", fontSize: 18, border: "none", cursor: "pointer" }}>
            Próximo
          </button>
        </div>
      )}

      {passo === 2 && (
        <div>
          <h2>Dados do veículo</h2>
          <select name="marca" value={form.marca} onChange={handleChange} style={{ width: "100%", padding: 10, marginBottom: 10 }}>
            <option value="">Selecione a marca</option>
            {marcas.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
          <input
            name="modelo"
            placeholder="Modelo"
            value={form.modelo}
            onChange={handleChange}
            style={{ width: "100%", padding: 10, marginBottom: 10 }}
          />
          <input
            name="ano"
            type="number"
            placeholder="Ano"
            value={form.ano}
            onChange={handleChange}
            min="1980"
            max="2025"
            style={{ width: "100%", padding: 10, marginBottom: 10 }}
          />
          <input
            name="cep"
            placeholder="CEP (somente números)"
            value={form.cep}
            onChange={handleChange}
            maxLength={8}
            style={{ width: "100%", padding: 10, marginBottom: 10 }}
          />
          <select name="uso" value={form.uso} onChange={handleChange} style={{ width: "100%", padding: 10, marginBottom: 10 }}>
            <option value="">Uso do veículo</option>
            {usos.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button onClick={voltar} style={{ padding: 15, width: "48%", backgroundColor: "#6c757d", color: "#fff", border: "none", cursor: "pointer" }}>
              Voltar
            </button>
            <button onClick={avancar} style={{ padding: 15, width: "48%", backgroundColor: "#007bff", color: "#fff", border: "none", cursor: "pointer" }}>
              Próximo
            </button>
          </div>
        </div>
      )}

      {passo === 3 && (
        <div style={{ textAlign: "center" }}>
          <h2>Confirmação</h2>
          <p>Nome: {form.nome}</p>
          <p>Email: {form.email}</p>
          <p>Telefone: {form.telefone}</p>
          <p>Marca: {form.marca}</p>
          <p>Modelo: {form.modelo}</p>
          <p>Ano: {form.ano}</p>
          <p>CEP: {form.cep}</p>
          <p>Uso: {form.uso}</p>

          <button onClick={calcularCotacao} style={{ marginTop: 20, padding: 15, width: "100%", backgroundColor: "#28a745", color: "#fff", border: "none", cursor: "pointer", fontSize: 18 }}>
            Calcular Cotação
          </button>

          {resultado && <p style={{ marginTop: 20, fontWeight: "bold", fontSize: 20 }}>{resultado}</p>}

          <button onClick={voltar} style={{ marginTop: 15, padding: 10, width: "100%", backgroundColor: "#6c757d", color: "#fff", border: "none", cursor: "pointer" }}>
            Voltar
          </button>
        </div>
      )}
    </div>
  );
}