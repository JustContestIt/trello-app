const  Submission = (props) => {
    return (
        <div className="my-2">
            <div className="form-floating">
                <textarea 
                    className="form-control my-2 rounded"
                    placeholder="Leave a comment here" 
                    id="floatingTextarea"
                    onChange={props.onChange}
                ></textarea>
                <label htmlFor="floatingTextarea">Комментарии</label>
            </div>
            <button 
                className="btn btn-primary"
                onClick={props.onClick}
            >
                Добавить карточку
            </button>
        </div>
    )
}

export default Submission;
