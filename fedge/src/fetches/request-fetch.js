import {useState , useEffect} from "react";
import {SetRequest} from "../services/request-services";

export function useSetRequest(userData){

    const [request, setRequest] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const getData = async () => {
            setLoading(true);
            const data = await SetRequest(userData);
            setRequest(data);
            setLoading(false);
        }
        getData();
    },[]);
    return [request, loading, error]
}

export function useCancelRequest(requestData){

    const [canceledReq, setCanceledReq] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const getData = async () => {
            setLoading(true);
            const data = await SetRequest(requestData);
            setCanceledReq(data);
            setLoading(false);
        }
        getData();
    },[]);
    return [canceledReq, loading, error]
}