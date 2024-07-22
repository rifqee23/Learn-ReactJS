function Article(props) {
    
    return (
        <>
            <div>{props.name}</div>
            <div>
                {
                    props.title.map(title =>(
                        <div>- {title}</div>
                    )
                    ) 
                }
            </div>
        </>
    )
}

export default Article;