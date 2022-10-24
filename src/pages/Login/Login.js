import styles from './Login.module.css'
import img_login from './login.svg'
import { NavLink, Navigate } from 'react-router-dom'

import { useState, useEffect } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication';

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const { login, error: authError, loading } = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")

    const user = {
      email,
      password
    }

    const res = await login(user)

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
          <NavLink to={'/'}><img className={styles.img_login} src={img_login} alt="" /></NavLink>
        </div>
        <div className={styles.form_container}>
          <h2>Entrar</h2>
          <p>Faça Login para ultilizar o sistema</p>
          <form onSubmit={handleSubmit}>
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
            <p className={styles.teste}>Não possui uma conta ? <NavLink to={'/register'}>Registre-se aqui!</NavLink></p>
            {!loading && <button className={styles.form_btn} type='submit'>Acessar</button>}
            {loading && <button className={styles.form_btn} disabled type='submit'>Aguarde...</button>}
            {error && <p className={styles.error}>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login