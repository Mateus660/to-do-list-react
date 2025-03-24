import React from "react";

function Todo() {

return (
    <div id="container">
        <div id="adtarefa">
            <input type="text" name="tarefa" id="colocar-tarefa" />
            <button type="submit" id="adicionar"><p>Adicionar</p></button>
        </div> 
        <div id="listatarefa">
            <h1>tarefas</h1>
        </div>
    </div> 
)


}

export default Todo