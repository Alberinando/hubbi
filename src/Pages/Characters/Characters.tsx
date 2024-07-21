import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../Services/API";
import Character from "../Interfaces/CharactersTypes";

function Characters() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await api.get('/people');
                setCharacters(response.data.results);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data: ", error);
                setLoading(false);
            }
        };

        fetchCharacters();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200 dark:bg-gray-900 p-10">
            <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 w-96">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-4 py-2">Name</th>
                        <th scope="col" className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {characters.map((character, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-4 py-2">{character.name}</td>
                            <td className="px-4 py-2">
                                <Link to={`/characters/${index + 1}`} className="text-blue-500 hover:underline">
                                    Details
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Characters;
