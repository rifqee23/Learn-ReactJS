function Article() {
    const name = 'Rifqi';
    const title = ["Tutorial ReactJS", "Tutorial NextJS", "Tutorial NodeJS"];
    return (
        <>
            <div>{name}</div>
            <div>
                {
                    title.map(title =>(
                        <div>{title}</div>
                    )
                ) 
                }
            </div>
        </>
    )
}

export default Article;