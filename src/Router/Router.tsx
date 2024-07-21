import { Route, Routes as Switch } from "react-router-dom";
import Starships from '../Pages/Ships/Ships';
import Characters from "../Pages/Characters/Characters";
import CharacterDetails from "../Pages/Characters/CharacterDetails";
import Navbar from '../Components/Navbar';
import StarshipDetails from "../Pages/Ships/StarshipDetails";

const AppRoutes = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path="/" element={<Starships />} />
                <Route path="/characters" element={<Characters />} />
                <Route path="/characters/:id" element={<CharacterDetails />} />
                <Route path="/starships/:id" element={<StarshipDetails />} />
            </Switch>
        </>
    );
};

export default AppRoutes;
