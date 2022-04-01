//import socketIO from "socket.io-client";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Join from './component/Join/Join';

//const ENDPOINT = 'http://localhost:4500/';
//const socket = socketIO(ENDPOINT , { transports:['websocket']});

function App() {

  // socket.on("connect", () => {

  // })
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Join} />
        <Route path="/chat" />
      </Router>
    </div>
  );
}

export default App;
