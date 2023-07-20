import './App.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TODOList from './TODOApp/TODOList';
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import MyComponent from './Example/MyComponent'
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';
import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navigation></Navigation>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <TODOList></TODOList>
            </Route>
            <Route path="/job">
              <MyComponent />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            {/* Quy định tham số ở đây là id (có thể tùy biến) */}
            <Route path="/user/:id">
              <DetailUser />
            </Route>
          </Switch>
        </header>

        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
