import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './Router/Router'; // Assumindo que Routes.js está no mesmo diretório

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
