import './App.css';
import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import NewCakeContainer from './components/NewCakeContainer'
import {Provider} from 'react-redux'
import store from './redux/Store'

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <CakeContainer />
      <HooksCakeContainer />
      <IceCreamContainer />
      <NewCakeContainer />
    </div>
    </Provider>
  );
}

export default App;
