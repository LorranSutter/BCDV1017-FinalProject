import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import styles from './styles.module.css'
import Room from './room';

const Rooms = () => {

    const [rooms, setRooms] = useState([]);


    useEffect(() => {
        document.body.style.backgroundColor = "#e5e5e5";
        document.body.style.minWidth = "350px";        

        try {
            api.get('rooms', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
                //   'withCredentials':true
            }).then(res => {
                setRooms(res.data.roomsList);
            })
        } catch (error) {
            alert('Fail to login! Try again.');
        }

    }, []);

    return (
        <>
            <header className={styles.header_container}>
                <div className={styles.avatar_container}>
                    <div className={styles.username_container}>
                        <h2>Username</h2>
                        {/* TODO href="/" */}
                        <a href="#" id="change-username">
                            <button>Change Username</button>
                        </a>
                    </div>
                    <div className={styles.avatar}>
                        <img src="#" alt="avatar" id="avatarImg" />
                    </div>
                </div>
            </header>
            <main className={styles.rooms_container}>
                <ul className={styles.rooms_list}>
                    {rooms.map(room => (
                        <Room key={room._id} name={room.name}></Room>
                    ))}
                </ul>
            </main>
        </>
    );
}

export default Rooms;