import styles from './Layout.module.css'

// eslint-disable-next-line react/prop-types
function Layout ({ children }) {
  return (
      <div className={styles.container}>
         { children }
      </div>
  )
}

export { Layout }
