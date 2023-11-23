import {useState , useEffect} from "react";
import {GetCabinets} from "../services/cabinet-services";

export function useFetchCabinets(){

    const [groups, setGroups] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const getData = async () => {
            setLoading(true);
            const data = await GetCabinets();
            setGroups(data);
            setLoading(false);
        }
        getData();
    },[]);
    return [groups, loading, error]
}