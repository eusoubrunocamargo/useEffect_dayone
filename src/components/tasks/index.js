import { useEffect, useRef, useState } from 'react';
import MyTasks from '../mytasks';
import Notify from '../notify';
import '../tasks/style.css';

export default function Tasks({ taskstate }) {

    const textRef = useRef(null);
    const [myTaskState, setMyTaskState] = useState(false);
    const [myTaskList, setMyTaskList] = useState([]);
    const [showNotify, setShowNotify] = useState(false);

    useEffect(() => {
        if (myTaskList.length > 0) {
            setShowNotify(true);
        }
    }, [myTaskList])

    if (taskstate) {

        const handleSubmit = (event) => {
            event.preventDefault();
            event.target.reset();
        }

        const handleTaskList = () => {
            setMyTaskList(
                [...myTaskList,
                textRef.current.value]);
        }

        return (

            <>
                <div className='tasks_container'>

                    <form
                        onSubmit={handleSubmit}
                        id='send_task'>

                        <textarea
                            ref={textRef}
                            form='send_task'
                            className='tasks_textarea'
                            name='text_area'
                            placeholder={'Type your task...'}
                        >
                        </textarea>

                        <div className='btn_container'>

                            <button
                                onClick={() => handleTaskList()}
                                form='send_task'
                                className='btn_submit_task'
                                type='submit'>
                                create task
                            </button>

                            <button
                                onClick={() => setMyTaskState(!myTaskState)}
                                className='btn_submit_task'
                                type='button'>
                                my tasks
                            </button>

                        </div>

                    </form>

                </div>

                <MyTasks
                    myTaskState={myTaskState}
                    myTaskList={myTaskList}
                    setMyTaskList={setMyTaskList}
                />

                <Notify
                    show={showNotify}
                    notShow={() => setShowNotify(false)} />

            </>

        )
    }

}
