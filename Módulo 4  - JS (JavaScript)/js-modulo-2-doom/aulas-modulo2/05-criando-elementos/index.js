function addInput() {
  const ul = document.getElementById("inputs");
  const newLi = document.createElement("li");

  newLi.className = "list-item";
  newLi.innerText = "Novo input: ";

  const newInput = document.createElement("input");
  newInput.type = "text";
  newInput.type = "text";
  newInput.name = "input";

  newLi.appendChild(newInput); //<= Ordem de Hierarquia
  // <li>
  //    <input type= "type" name="input">
  // </li>
  ul.appendChild(newLi); //<= Ordem de Hierarquia
  /*
    
    <ul>
        <li>
            <input type= "type" name="input">
        </li>
    </ul>

  */
}
