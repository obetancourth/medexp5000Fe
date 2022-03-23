import { Provider } from 'react-redux';
import './App.css';

import store from './Store';
import Splash from './Components/Views/Splash';
import Signin from './Components/Views/SigninPage';
import Todo from './Components/Views/Todo/TodoPage';

function App() {
  return (
    <Provider store={store}>
      <Todo></Todo>
    </Provider>
  );
}

export default App;
