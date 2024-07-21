import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../Services/API";
import Character from "../Interfaces/CharactersTypes";

const CharacterDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [character, setCharacter] = useState<Character | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await api.get(`/people/${id}`);
                setCharacter(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data: ", error);
                setLoading(false);
            }
        };

        fetchCharacter();
    }, [id]);

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen bg-gray-200">Loading...</div>;
    }

    if (!character) {
        return <div className="flex justify-center items-center min-h-screen bg-gray-200">Character not found</div>;
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200 dark:bg-gray-900 p-10">
            <div className="bg-white dark:bg-gray-300 p-6 rounded-lg shadow-md w-full max-w-lg">
                <h1 className="text-2xl font-bold mb-4">Character Details</h1>
                <div className="text-lg space-y-2">
                    <p><strong>Name:</strong> {character.name}</p>
                    <p><strong>Height:</strong> {character.height}</p>
                    <p><strong>Mass:</strong> {character.mass}</p>
                    <p><strong>Hair Color:</strong> {character.hair_color}</p>
                    <p><strong>Skin Color:</strong> {character.skin_color}</p>
                    <p><strong>Eye Color:</strong> {character.eye_color}</p>
                    <p><strong>Birth Year:</strong> {character.birth_year}</p>
                    <p><strong>Gender:</strong> {character.gender}</p>
                </div>
            </div>
        </div>
    );
}

export default CharacterDetails;
