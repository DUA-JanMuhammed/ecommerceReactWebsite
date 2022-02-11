import './App.css';
// import { Provider } from "react-redux";
// import myStore from './redux/store'
import AppRouter from './rout/rout';





function App() {
  return (
    <div className="App">






      {/* <Provider store={myStore}> */}
        <AppRouter />

{/* 
      </Provider> */}
    </div>
  );
}

export default App;
