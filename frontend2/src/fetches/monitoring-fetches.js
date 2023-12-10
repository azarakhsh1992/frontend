import {useState , useEffect} from "react";
import {SetRequest} from "../services/request-services";
import {GetHistoryDoor, GetHistoryEnergy, GetHistoryTemp} from "../services/monitoring-services";


export function useHistoryTemp(QrCode){

    const [historyTemp, setHistoryTemp] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const getData = async () => {
            setLoading(true);
            const data = await GetHistoryTemp(QrCode);
            setHistoryTemp(data);
            setLoading(false);
        }
        getData();
    },[]);
    return [historyTemp, loading, error]
}

export function useHistoryEnergy(QrCode){

    const [historyEnergy, setHistoryEnergy] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const getData = async () => {
            setLoading(true);
            const data = await GetHistoryEnergy(QrCode);
            setHistoryEnergy(data);
            setLoading(false);
        }
        getData();
    },[]);
    return [historyEnergy, loading, error]
}

export function useHistoryDoor(QrCode){

    const [historyEnergy, setHistoryEnergy] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const getData = async () => {
            setLoading(true);
            const data = await GetHistoryDoor(QrCode);
            setHistoryEnergy(data);
            setLoading(false);
        }
        getData();
    },[]);
    return [historyEnergy, loading, error]
}