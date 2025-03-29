import React from "react";

function Todo() {
    return (
        <div id="container">
            {/* Título centralizado no topo */}
            <h1 id="titulo" style={{ textAlign: "center", marginTop: "20px" }}>
                Lista de Tarefas
            </h1>

            {/* Área de entrada */}
            <div id="area-input" style={{ textAlign: "center", marginTop: "20px" }}>
                <input 
                    type="text" 
                    name="tarefas" 
                    id="inserir-tarefa" 
                    placeholder="Insira sua tarefa" 
                />
                <input type="submit" value="Adicionar" id="adicionar" />
            </div> 

            {/* Lista de tarefas */}
            <div id="lista-tarefas" style={{ margin: "20px auto", width: "50%", textAlign: "center" }}>
                <h2>Tarefas</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda minima qui dignissimos 
                    velit aut hic cumque animi maxime ea magnam.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempore dolor voluptate 
                    ipsam velit minima reprehenderit necessitatibus.
                </p>
            </div>
        </div>
    );
}

export default Todo;
