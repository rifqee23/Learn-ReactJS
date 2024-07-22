import '../App.css'

function Article(props) {
    
    return (
        <>
            <h3 className="title">{props.title}</h3>
            <small>Date : {props.date}, tags : {props.tags.join(", ")}</small>
            
        </>
    )
}

export default Article;