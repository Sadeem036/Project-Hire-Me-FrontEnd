import React from 'react'
import style from '@/components/example/example.module.css'
export default function ExampleBar() {
    return (
        <div className={style.container}>
            <aside>
                <p> Menu </p>
                <a >
                    Notifications
                </a>
                <a >
                    Reviews
                </a>
                <a >
                    Complaints
                </a>
                <a >
                    Profile-Settings
                </a>
                <a >
                    Log-Out
                </a>
            </aside>
        </div>
    )
}
