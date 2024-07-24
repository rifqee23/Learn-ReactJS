import "../App.css";
import { useContext } from "react";
import { GlobalContext } from "../context";

// component article status
const ArticleStatus = ({ isNew }) => isNew && <span>-- Baru !!</span>;

// component new article
const NewArticle = () => <span> -- Baru !!!</span>;

function Article(props) {
  const user = useContext(GlobalContext);

  return (
    <>
      <h3 className="title">{props.title}</h3>
      <small>
        Date : {props.date}, tags : {props.tags.join(", ")}
        {/* {props.isNew ? " --Baru " : "lama"} */}
        {/* {props.isNew && " --Baru "} */}
        <ArticleStatus isNew={props.isNew} /> {/*Pengecekan didalam component*/}
        {/* {props.isNew && <NewArticle />} Pengecekan diluar component */}
      </small>
      <div>
        <small>Ditulis oleh {user.username}</small>
      </div>
    </>
  );
}

export default Article;
