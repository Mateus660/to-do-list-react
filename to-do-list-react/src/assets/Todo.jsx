import React, { useState, useEffect } from "react";

function Todo() {
    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState("");

    useEffect(() => {
        // Carregar tarefas do localStorage ao iniciar
        const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas")) || [];
        setTarefas(tarefasSalvas);
    }, []);

    useEffect(() => {
        // Atualizar localStorage sempre que tarefas forem alteradas
        localStorage.setItem("tarefas", JSON.stringify(tarefas));
    }, [tarefas]);

    const adicionarTarefa = () => {
        if (novaTarefa.trim() === "") return;
        const novasTarefas = [...tarefas, novaTarefa];
        setTarefas(novasTarefas);
        setNovaTarefa("");
    };

    return (
        <div id="container" style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
            {/* Título centralizado no topo */}
            <h1 id="titulo" style={{ textAlign: "center", marginBottom: "20px" }}>
                Lista de Tarefas
            </h1>

            {/* Área de entrada */}
            <div id="area-input" style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
                <input 
                    type="text" 
                    name="tarefas" 
                    id="inserir-tarefa" 
                    placeholder="Insira sua tarefa" 
                    value={novaTarefa}
                    onChange={(e) => setNovaTarefa(e.target.value)}
                    style={{ padding: "10px", width: "70%", border: "1px solid #ccc", borderRadius: "5px" }}
                />
                <input 
                    type="submit" 
                    value="Adicionar" 
                    id="adicionar" 
                    onClick={adicionarTarefa} 
                    style={{ padding: "10px 20px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
                />
            </div> 

            {/* Lista de tarefas */}
            <div id="lista-tarefas" style={{ textAlign: "center", borderTop: "1px solid #ccc", paddingTop: "20px" }}>
                <h2>Tarefas</h2>
                {tarefas.length === 0 ? (
                    <p>Nenhuma tarefa adicionada.</p>
                ) : (
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        {tarefas.map((tarefa, index) => (
                            <li key={index} style={{ backgroundColor: "#f8f9fa", padding: "10px", margin: "5px 0", borderRadius: "5px" }}>{tarefa}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Todo