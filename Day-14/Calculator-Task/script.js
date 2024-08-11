const h1 = document.createElement("h1");
h1.setAttribute("id", "title");
const p = document.createElement("p");
p.setAttribute("id", "description");
const divContainer = document.createElement("div");
divContainer.setAttribute("class", "calculator");
divContainer.innerHTML = `
<div class="display">
        <input type="text" name="" id="result" value="" onkeydown="key(event)">
      </div>
      <div class="buttons">
        <table class="btn-table">
          <tr class="row">
            <td id="reset">
              <button id="clear" onclick="clrVal()">C</button>
            </td>
            <td id="erase">&#8592;</td>
            <td id="dot" onclick="calculate(event)">.</td>
            <td id="mod" onclick="calculate(event)">%</td>
          </tr>
          <tr class="row">
            <td id="seven">
              <button onclick="calculate(event)">7</button>
            </td>
            <td id="eight">
              <button onclick="calculate(event)">8</button>
            </td>
            <td id="nine">
              <button onclick="calculate(event)">9</button>
            </td>
            <td id="mul" onclick="calculate(event)">*</td>
          </tr>
          <tr class="row">
            <td id="four">
              <button onclick="calculate(event)">4</button>
            </td>
            <td id="five">
              <button onclick="calculate(event)">5</button>
            </td>
            <td id="six">
              <button onclick="calculate(event)">6</button>
            </td>
            <td id="div" onclick="calculate(event)">/</td>
          </tr>
          <tr class="row">
            <td>
              <button onclick="calculate(event)" id="1" >1</button>
            </td>
            <td>
              <button onclick="calculate(event)" id="2">2</button>
            </td>
            <td>
              <button onclick="calculate(event)" id="3">3</button>
            </td>
            <td>
              <button id="subtract" onclick="calculate(event)">-</button>
            </td>
          </tr>
          <tr class="row">
            <td id="zero" onclick="calculate(event)">0</td>
            <td id="d-zero" onclick="calculate(event)">00</td>
            <td>
              <button id="equal" onclick="calculate(event)">=</button>
            </td>
            <td>
              <button id="add" onclick="calculate(event)">+</button>
            </td>
          </tr>
        </table>
      </div>
`
document.body.append(h1, p, divContainer);

const result = document.querySelector(".display input");
function calculate(event){
    const callValue = event.target.textContent;
    if(callValue == "="){
        result.value = eval(result.value);
    }else if(callValue){
        result.value += callValue;
    }
    
    
}
function clrVal(){
    result.value = "";
}
function key(event){
    event.preventDefault();
    const key = event.key;
    if(key == "1" || key == "2" || key == "3" || key == "4" || key == "5" || key == "6" || key == "7" || key == "8" || key == "9" || key == "0" || key == "+" || key == "-" || key == "*" || key == "/" || key == "%" || key == "."){
        result.value += key;
    }
}