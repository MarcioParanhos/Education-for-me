import styles from './Post.module.css'

//Hooks
import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'

const Post = () => {

    const { id } = useParams()
    const { document: quest, loading } = useFetchDocument("quests", id)

    return (
        <div>
            {loading && <p>Carregando post...</p>}
            {quest && (
                <div className={styles.post_container}>
                    <h1>{quest.title}</h1>
                    <h2>{quest.body}</h2>
                    <h4>{quest.createdBy}</h4>
                    <div className={styles.tag}>
                        {quest.tagsArray.map((tag) => (
                            <p key={tag}>
                                <span>#</span>
                                {tag}
                            </p>
                        ))}
                    </div>

                </div>
            )}
        </div>
    )
}

export default Post