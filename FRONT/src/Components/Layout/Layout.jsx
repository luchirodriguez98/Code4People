import styles from './Layout.module.css'

// eslint-disable-next-line react/prop-types
function Layout ({ children }) {
  const imageToRender = () => {
    if (location.pathname === '/') {
      return `${styles.backgroundHome}`
    } else if (location.pathname === '/quienes-somos') {
      return `${styles.backgroundQuienesSomos}`
    }
  }

  return (
      <div className={`${styles.container} ${imageToRender()}`}>
         { children }
      </div>
  )
}

export { Layout }
