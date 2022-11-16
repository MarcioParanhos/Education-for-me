import styles from './Search.module.css'
import { NavLink } from 'react-router-dom'
import seta_esquerda from './seta-para-a-esquerda.svg'

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
            <div className={styles.top_title}>
                <h2>Resultado de sua Busca</h2>
                <NavLink className={styles.nav_link} to={'/'}>
                    <button className={styles.btn}>
                        <img src={seta_esquerda} alt="" srcset="" />
                        Voltar
                    </button>
                </NavLink>

            </div>
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