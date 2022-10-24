import styles from './Register.module.css';
import img_register from './register.svg'
import { NavLink} from 'react-router-dom'

import { useState, useEffect } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication';


const Register = () => {

  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const { createUser, error: authError, loading } = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")

    const user = {
      displayName,
      email,
      password
    }

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais!")
      return
    }

    const res = await createUser(user)

    console.log(res)
  }

  useEffect(() => {

    if (authError) {
      setError(authError)
    }

  }, [authError])

  return (
    <div className={styles.container} >
      <div className={styles.container_content}>
        <div>
          <NavLink to={'/'}><img className={styles.img_register} src={img_register} alt="" /></NavLink>
        </div>
        <div className={styles.form_container}>
          <h2>Cadastre-se</h2>
          
          <form onSubmit={handleSubmit}>
            <label>
              Nome
              <input
                type="text"
                name='displayName'
                required
                placeholder='Nome do Usuario'
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </label>
            <label>
              E-mail
              <input
                type="email"
                name='email'
                required
                placeholder='E-mail do Usuario'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Senha
              <input
                type="password"
                name='password'
                required
                placeholder='Insira sua senha'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <label>
              Confirmação de Senha
              <input
                type="password"
                name='confirmPassword'
                required
                placeholder='Confirme sua senha'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>
            <p>Já possui uma conta ? <NavLink to={'/login'}>Faça o login!</NavLink></p>
           {!loading && <button className={styles.form_btn} type='submit'>Cadastrar</button>}
           {loading && <button className={styles.form_btn} disabled type='submit'>Aguarde...</button>}
           {error && <p className={styles.error}>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register