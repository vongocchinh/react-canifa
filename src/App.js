import { BrowserRouter as Router } from "react-router-dom";
import RouterUI from "./router/RouterUI";
import FooterContainer from "./container/Footer/Footer";
import HeaderContainer from "./container/Header/Header";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.min.css";
import 'animate.css/animate.compat.css'
function App() {
  return (
    <>
      <div className="app-container">
        <ReactNotification />
      </div>
      <Router>
        <div className="img-container">
          <div>
            <HeaderContainer />
            <RouterUI />
          </div>
        </div>
        <FooterContainer />
      </Router>
    </>
  );
}

export default App;
