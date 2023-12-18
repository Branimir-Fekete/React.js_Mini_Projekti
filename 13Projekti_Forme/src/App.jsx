//ovdije su dvije komponente,
//Login je jednostavniji format, dok je Signup složeniji oblik

import Header from './components/Header.jsx';
import Login from './components/StateLogin.jsx';
//import Signup from './components/Signup.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <Signup /> */}
        <Login />
      </main>
    </>
  );
}

export default App;
