import styles from './header.module.scss'
import { IoLogoTwitch, IoMdSunny, IoMdMoon } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useRecoil } from 'hooks/state'
import { ThemeState } from 'states'
import store from 'store'

const Header = () => {
  const [theme, setTheme] = useRecoil(ThemeState)

  const handleThemeClick = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    store.set('timeline-theme', newTheme)
    document.documentElement.setAttribute('timeline-theme', newTheme)
  }

  return (
    <header className={styles.header}>
      <h1>
        <Link to='/'>
          Timeline
          <IoLogoTwitch size={25} className={styles.logo} />
        </Link>
      </h1>
      <button onClick={handleThemeClick} className={styles.themeIcon} type='button'>
        {theme === 'light' ? <IoMdSunny size={25} /> : <IoMdMoon size={25} />}
      </button>
    </header>
  )
}

export default Header
