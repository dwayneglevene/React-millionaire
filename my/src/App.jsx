// import logo from './logo.svg';
import './app.css';

function App() {

  const moneyPyramid = [
    {id:1, amount: "$ 100"},
    {id:2, amount: "$ 200"},
    {id:3, amount: "$ 300"},
    {id:4, amount: "$ 500"},
    {id:5, amount: "$ 1000"},
    {id:6, amount: "$ 2000"},
    {id:7, amount: "$ 4000"},
    {id:8, amount: "$ 4500"},
    {id:9, amount: "$ 5000"},
    {id:10, amount: "$ 5500"},
    {id:11, amount: "$ 6000"},
    {id:12, amount: "$ 6500"},
    {id:13, amount: "$ 7000"},
    {id:14, amount: "$ 7500"},
    {id:15, amount: "$ 8000"},

  ]
  return (
    <div className="app">


      <div className ="main">main
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">question and answers</div>


      </div>
      <div className ="pyramid">
        <div className="moneyList">
        <ul>
        {moneyPyramid.map((m) =>(
          <li className="moneyListItem">
          <span className="moneyListItemNumber">{m.id}</span>
          <span className="moneyListItemAmount">${m.amount}</span>
          </li>

      ))}

        </ul>
        </div>


      </div>
    </div>
  );
}

export default App;
