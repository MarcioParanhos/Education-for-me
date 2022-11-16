import styles from './Ambiente.module.css'
import searchIcon from './procurar.svg'

// Hoks
import { useNavigate, Link} from 'react-router-dom'
import { useState } from 'react'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

// Components
import QuestDetail from '../../components/QuestDatail/QuestDetail'

const Ambiente = () => {

  const [query, setQuery] = useState("")
  const { documents: quests, loading } = useFetchDocuments("quests")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (query) {
      return navigate(`/search?q=${query}`)
    }
  }

  return (
    <div className={styles.ambiente}>
      <h1>Veja as frases mais recentes</h1>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input type="text" placeholder='Busque por tags...' onChange={(e) => setQuery(e.target.value)} />
        <button className={styles.btn}><img src={searchIcon} /></button>
      </form>
      <div className={styles.cards}>
        {loading && <p>Carregando...</p>}
        {quests && quests.map((quest) => <QuestDetail key={quest.id} quest={quest} />)}
        {quests && quests.length === 0 && (
          <div className={styles.noquests}>
            <p>Não foram encontradas Frases</p>
            <Link to="/quest/create">Criar Primeira Frase</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Ambiente