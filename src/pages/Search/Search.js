import styles from './Search.module.css'

// hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useQuery } from '../../hooks/useQuery'

//components
import QuestDetail from '../../components/QuestDatail/QuestDetail'
import { Link } from 'react-router-dom'

const Search = () => {
    const query = useQuery()
    const search = query.get("q")

    const { documents: quests } = useFetchDocuments("quests", search)

    return (
        <div className={styles.search_container}>
            <h2>Resultado de sua Busca</h2>
            <div className={styles.quests_cards}>
                {quests && quests.length === 0 && (
                    <div className={styles.noquests}>
                        <p>Não foram encontradas Frases</p>
                        <Link to="/quest/create">Criar Primeira Frase</Link>
                    </div>
                )}
                {quests && quests.map((quest) => (
                    <QuestDetail key={quest.id} quest={quest} />
                ))}
            </div>
        </div>
    )
}

export default Search