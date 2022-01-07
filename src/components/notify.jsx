import React, { useEffect, useState } from 'react'

export default function UserNotify({ title, body }) {
    const [notify, setNotify] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
          setNotify(false)
        }, 3000)
        
        return () => clearTimeout(timer)
    }, [])

    return notify ? (
        <div className="text-center py-4 lg:px-4">
            <div className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
                <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">Notif</span>
                <div className="px-1">
                    <p className="font-bold mr-2 text-left">{ title }</p>
                    <p className="font-light mr-2 text-left">{ body }</p>
                </div>
            </div>
        </div>
    ) : null
}