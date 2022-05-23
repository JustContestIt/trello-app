import { useState } from "react";

const  Submission = (props) => {
    const [body, setBody] = useState('')

    const handleSubmit = event => {
        
    }

    return (
        <div className="px-2 py-2">
            <div className="form-floating">
                <textarea 
                    className="form-control mt-2 rounded-1" 
                    placeholder="Leave a comment here" 
                    id="floatingTextarea2"
                    onChange={props.onChange}
                ></textarea>
                <label htmlFor="floatingTextarea2">Комментарии</label>
            </div>
            <button 
                className="btn btn-primary mt-2" 
                onClick={props.onClick}
            >
                Добавить карточку
            </button>
        </div>
    )
}

export default Submission;
