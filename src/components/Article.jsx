const NewArticle = ({isNew})=>{
    return isNew && <span>ini artikel Baru!!</span>
}

const ArticleNew =()=>{
    return <span>ini baru!!</span>
}

function Article (props) {
    return  (
        <>
            <h3>{props.title}</h3>
            <small>
                date : {props.date}, {props.tags.join(", ")}
            </small>
            <NewArticle isNew={props.isNew}/>
            {props.isNew && <ArticleNew/>}
        </>
    );
}

export default Article;