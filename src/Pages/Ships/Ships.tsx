import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../Services/API";
import Starship from "../Interfaces/StarshipsTypes";

function Starships() {
    const [starships, setStarships] = useState<Starship[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStarships = async () => {
            try {
                const response = await api.get('/starships');
                setStarships(response.data.results);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data: ", error);
                setLoading(false);
            }
        };

        fetchStarships();
    }, []);

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen bg-gray-200 dark:bg-gray-900">Loading...</div>;
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
                    {starships.map((starships, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-4 py-2">{starships.name}</td>
                            <td className="px-4 py-2">
                                <Link to={`/starships/${index + 2}`} className="text-blue-500 hover:underline">
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

export default Starships;
