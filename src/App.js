
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Components/Main';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
