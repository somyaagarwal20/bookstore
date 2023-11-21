
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import SignUp from './SignUp';
// import SignIn from './SignIn';


import { BrowserRouter } from "react-router-dom";
import Header from './Header';
import PublicRouter from './PublicRouter';


function App() {
  return (
   <>
      <Header />
      <BrowserRouter>
        <PublicRouter />
      </BrowserRouter>
      
      </>
//       <div>
     
// <SignUp />
//       </div>
    



  )
}


export default App;
