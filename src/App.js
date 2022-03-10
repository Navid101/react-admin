import Home from "./pages/home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import List from "./pages/list/List";
import New from "./pages/new/New";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home></Home>}></Route>  
            <Route path="login" element={<Login></Login>}></Route>  
            <Route path="users">
              <Route index element={<List></List>}></Route>  
              <Route path=":userId" element={<Single></Single>}></Route>  
              <Route path="new" element={<New></New>}></Route>  
            </Route>
            <Route path="products">
              <Route index element={<List></List>}></Route>  
              <Route path=":productId" element={<Single></Single>}></Route>  
              <Route path="new" element={<New></New>}></Route>  
            </Route>   
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
