import '../mytasks/style.css';

export default function MyTasks({ myTaskState, myTaskList, setMyTaskList }) {

    const handleRemoveTask = (event) => {
        myTaskList.splice(event.target.parentElement.id, 1);
        setMyTaskList([...myTaskList]);
    }

    if (myTaskState) {

        let index = -1;

        return (
            <div className='mytask_container'>
                <ul className='task_list'>
                    {myTaskList.map(item => {
                        const date = new Date();
                        const brDate = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }).format(date);
                        index++;
                        return (
                            <li id={index} key={index} className='task_item'>
                                <div className='task_date_container'>{item}<br />
                                    <span className='date_style'>{String(brDate)}</span></div>
                                <button className='btn_remove_task'
                                    onClick={(event) => { handleRemoveTask(event) }}>
                                    remove
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div >
        )
    }
}