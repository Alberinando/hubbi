import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './Router/Router';

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
