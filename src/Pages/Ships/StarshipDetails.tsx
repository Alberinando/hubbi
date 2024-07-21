import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../Services/API";
import Starship from "../Interfaces/StarshipsTypes";

const StarshipDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [starship, setStarship] = useState<Starship | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStarship = async () => {
            try {
                const response = await api.get(`/starships/${id}`);
                setStarship(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data: ", error);
                setLoading(false);
            }
        };

        fetchStarship();
    }, [id]);

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen bg-gray-200 dark:bg-gray-900">Loading...</div>;
    }

    if (!starship) {
        return <div className="flex justify-center items-center min-h-screen bg-gray-200 dark:bg-gray-900">Starship not found</div>;
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200 dark:bg-gray-900 p-10">
            <div className="bg-white dark:bg-gray-300 p-6 rounded-lg shadow-md w-full max-w-lg">
            <h1 className="text-2xl font-bold mb-4">Starship Details</h1>
                <p><strong>Name:</strong> {starship.name}</p>
                <p><strong>Model:</strong> {starship.model}</p>
                <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
                <p><strong>Cost in Credits:</strong> {starship.cost_in_credits}</p>
                <p><strong>Length:</strong> {starship.length}</p>
                <p><strong>Max Atmosphering Speed:</strong> {starship.max_atmosphering_speed}</p>
                <p><strong>Crew:</strong> {starship.crew}</p>
                <p><strong>Passengers:</strong> {starship.passengers}</p>
                <p><strong>Cargo Capacity:</strong> {starship.cargo_capacity}</p>
                <p><strong>Consumables:</strong> {starship.consumables}</p>
                <p><strong>Hyperdrive Rating:</strong> {starship.hyperdrive_rating}</p>
                <p><strong>MGLT:</strong> {starship.MGLT}</p>
                <p><strong>Starship Class:</strong> {starship.starship_class}</p>
            </div>
        </div>
    );
}

export default StarshipDetails;
