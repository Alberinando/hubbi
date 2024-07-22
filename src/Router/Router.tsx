import { Route, Routes } from "react-router-dom";
import Starships from "../Pages/Ships/Ships";
import Characters from "../Pages/Characters/Characters";
import CharacterDetails from "../Pages/Characters/CharacterDetails";
import StarshipDetails from "../Pages/Ships/StarshipDetails";
import PrivateRoute from "./PrivateRoute";
import Login from "../Pages/Login/Login";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute />}>
                <Route path="/" element={<Starships />} />
                <Route path="/characters" element={<Characters />} />
                <Route path="/characters/:id" element={<CharacterDetails />} />
                <Route path="/starships/:id" element={<StarshipDetails />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
