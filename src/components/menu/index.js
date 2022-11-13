import { useState } from 'react';
import '../menu/style.css';
import Notes from '../notes';
import Tasks from '../tasks'

export default function Menu() {

    const [state, setState] = useState(false);
    const [taskState, setTaskState] = useState(false);

    return (
        <>
            <div className='menu_container'>

                <button
                    onClick={() => { setState(!state) }}>
                    Notes
                </button>

                <button
                    onClick={() => { setTaskState(!taskState) }}
                >Tasks</button>

            </div >

            <Notes notestate={state} />
            <Tasks taskstate={taskState} />

        </>
    )

}


