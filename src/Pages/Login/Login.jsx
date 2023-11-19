import { Layout } from '../../Components/Layout/Layout'
import styles from './Login.module.css'

function Login () {
    return (
        <Layout>
            <h1 className={`${styles.title}`}>Login</h1>
        </Layout>
    )
}

export { Login }