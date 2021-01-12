import React from 'react';
import ReactDOM from 'react-dom';
import { Textfit } from 'react-textfit';
import Tex2SVG from "react-hook-mathjax";

function App() {
  const [inputValue, setInputValue] = React.useState(
    "G_{\\mu\\nu} + \\Lambda g_{\\mu\\nu} = \\kappa T_{\\mu\\nu}",
  );

  return (
    <div className="App">
      <header className="App-header">
        <h3>React Hook MathJax</h3>
        <input
          type="text"
          defaultValue={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />

        <div className="tex-container" style={{background:"grey", width:"100px"}}>
          <Tex2SVG class="tex" tabindex={-1} latex={inputValue} style={{border:"1px"}}/>
        </div>
      </header>
    </div>
  );
}

export default App;

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
