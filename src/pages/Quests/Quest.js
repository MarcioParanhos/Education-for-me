import styles from './Quest.module.css'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// Responsavel por definir qual usuario ira fazer a pergunta
import { useInsertDocument } from '../../hooks/useInsertDocument'
import { onAuthStateChanged } from "firebase/auth";
import { useAuthentication } from '../../hooks/useAuthentication'

const Quest = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState("");

    const [user, setUser] = useState(undefined);
    const { auth } = useAuthentication();
  
    // const loadingUser = user === undefined;
  
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        setUser(user);
      });
    }, [auth]);
    

    const {insertDocument, response} = useInsertDocument("quests")

    const navigate = useNavigate()

  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormError("");
  
      // create tags array
      const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase())
  
      // check values

      if (!title || !tags || !body) {
        setFormError("Por favor preencha todos os campos!")
      }

      if(formError) return;
  
      insertDocument({
        title,
        body,
        tagsArray,
        uid: user.uid,
        createdBy: user.displayName
      })
  
      // redirect to home page
      navigate ("/ambiente")
    };

    return (
        <div className={styles.form_container}>
            <h2>Poste uma ou varias frases</h2>
            <p>Faça uma Pegunta e compartilhe suas duvidas</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Titulo:</span>
                    <input
                        type="text"
                        name='title' required
                        placeholder='Pense em um bom titulo'
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </label>
                <label>
                    <span>Conteúdo:</span>
                    <textarea
                        name="body" required
                        placeholder='Insira o conteudo da sua frase'
                        rows="8"
                        onChange={(e) => setBody(e.target.value)}
                        value={body}
                    ></textarea>
                </label>
                <label>
                    <span>Tags:</span>
                    <input
                        type="text"
                        name='tags' required
                        placeholder='insira as tags separadas por virgula. Exemplo: Amor, Reflexão'
                        onChange={(e) => setTags(e.target.value)}
                        value={tags}
                    />
                </label>
                {!response.loading && <button className={styles.form_btn}>Postar</button>}
                {response.loading && (<button className={styles.form_btn} disabled>Aguarde...</button>)}
                {response.error && <p className={styles.error}>{response.error}</p>}
                {formError && <p className={styles.error}>{formError}</p>}
            </form>
        </div>
    )
}

export default Quest