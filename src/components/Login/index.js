import React, { useState } from 'react'
import styles from './Login.module.scss'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(JSON.stringify({ username, password }))
    // fetch('http://localhost/login/', { 
    //   body: JSON.stringify({ username, password }), 
    //   method: 'POST', 
    //   headers: {'content-type': 'application/json'}
    // })
  }
  return (
    <form className={styles.form}>
      <div>Login form</div>
      <div className={styles.input}>
        <input type="text" placeholder="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div className={styles.input}>
        <input type="password" placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div className={styles.submit}>
        <button type="submit" onClick={handleSubmit}>Sign in</button>
      </div>
    </form>
  )
}
