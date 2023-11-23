import {useState , useEffect} from "react";
import {GetTemp} from "../services/modules-services";

export function useFetchTemps(userData){

    const [temps, setTemps] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const getData = async () => {
            setLoading(true);
            const data = await GetTemp(userData);
            setTemps(data);
            setLoading(false);
        }
        getData();
    },[]);
    return [temps, loading, error]
}