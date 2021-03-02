import './App.css';

import Signup from './containers/Users/Signup/Signup';
import Login from './containers/Users/Login/Login';

const App = () => {
  return (
    <div className="App">
      <Signup />
      <Login />
    </div>
  );
};

export default App;
