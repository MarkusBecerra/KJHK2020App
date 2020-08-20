import { useEffect, useState } from "react";
// import { useCamera } from '@ionic/react-hooks/camera';
// import { useFilesystem, base64FromPath } from '@ionic/react-hooks/filesystem';
// import { useStorage } from '@ionic/react-hooks/storage';
// import { isPlatform } from '@ionic/react';
// import { CameraResultType, CameraSource, CameraPhoto, Capacitor, FilesystemDirectory } from "@capacitor/core";

export function useLogsRetriever() {

    const [logs, setLogs ] = useState<Log[]>([]);
    const [currentDate, setCurrentDate ] = useState<string>();

    useEffect(()=> {

        
        // function api<T>(url: string): Promise<T> {
        //     return fetch(url)
        //         .then(response => {
        //             if (!response.ok) {
        //                 throw new Error(response.statusText)
        //             }
        //             return response.json() as Promise<{ data: T }>
        //         })
        //         .then(data => {
        //             return data.data
        //         })
        // }

        function loadLogs<T>(url: string): Promise<T> {
            return fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.statusText)
                    }
                    return response.json() as Promise<T>
                });
        }

        async function getDate(): Promise<MusicLogs> {
            const data = await loadLogs<MusicLogs>('http://kjhk.org/web/app_resources/appMusicLogs.php?day=0');
            const m_currentDate = data.date;
            setCurrentDate(m_currentDate.toString());
            return data;
        }

        async function parseLogs(): Promise<MusicLogs> {
            const data = await loadLogs<MusicLogs>('http://kjhk.org/web/app_resources/appMusicLogs.php?day=0');
            let logArr:Log[] = [];
            for(let i = 0; i < data.logs.length; i++ ) {
                const Log = { Artist: data.logs[i].Artist, Album: data.logs[i].Album, Song: data.logs[i].Song, Entry_Date: data.logs[i].Entry_Date }
                logArr.push(Log);                
            }
            setLogs(logArr);

            return data;

        }
        
        getDate();
        parseLogs();

    },[]);

    return {logs, currentDate};

}


export interface MusicLogs {
    date: Date;
    logs: Log[];
}

export interface Log {
    Artist: string;
    Album: string;
    Song: string;
    Entry_Date: string;
}