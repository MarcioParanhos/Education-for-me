import styles from "./QuestDetail.module.css"

import { Link } from "react-router-dom"


const QuestDetail = ({ quest }) => {
  return (
    <div className={styles.quests_container}>
      <div className={styles.card_quests}>
        <h2>{quest.title}</h2>
        <hr></hr>
        <p>Postado por <span>{quest.createdBy}</span></p>
        <div className={styles.tags}>
          {quest.tagsArray.map((tag) => (
            <p key={tag}>{tag}</p>
          ))}
        </div>
        <Link to={`/quests/${quest.id}`}>ver conteudo</Link>
      </div>
    </div>
  )
}

export default QuestDetail