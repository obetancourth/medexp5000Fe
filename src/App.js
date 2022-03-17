import { Provider } from 'react-redux';
import './App.css';

import store from './Store';
import Splash from './Components/Views/Splash';
import Signin from './Components/Views/SigninPage';

function App() {
  return (
    <Provider store={store}>
      <Signin></Signin>
    </Provider>
  );
}

export default App;
