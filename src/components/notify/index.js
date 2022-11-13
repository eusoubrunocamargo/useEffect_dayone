import { useEffect } from 'react';
import '../notify/style.css';

export default function Notify({ show, notShow }) {

    useEffect(() => {
        if (show) {
            setTimeout(() => {
                notShow();
            }, 1800);
        }
    }, [show, notShow]);

    if (show) {
        return (
            <div className='container_notify'>
                <span>Your task was sucessfully added!</span>
            </div>
        )
    }
}