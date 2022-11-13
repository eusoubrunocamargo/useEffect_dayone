import '../notes/style.css';

export default function Notes({ notestate }) {

    if (notestate) {
        return (

            <>
                <div className='notes_container'>
                    <textarea className='notes_textarea' name='text_area' placeholder={'Type your note...'}></textarea>
                </div>
            </>

        )
    }

}
