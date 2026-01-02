function Article (props) {
    return  (
        <>
            <h3>{props.title}</h3>
            <small>
                date : {props.date}, {props.tags.join(", ")}
            </small>

        </>
    );
}

export default Article;