import { NavLink, useParams } from 'react-router-dom'
import cx from 'classnames'
import styles from './GNB.module.scss'
import { FiHome, FiStar, FiList } from 'react-icons/fi'

const GNB = () => {
  const params = useParams()
  const streamerId = params?.id
  const selectedDate = params?.date

  return (
    <nav className={styles.gnb}>
      <ul>
        <li>
          <NavLink to='/' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            <p>홈</p>
            <span>
              <FiHome size={23} />
            </span>
          </NavLink>
        </li>
        <li>
          {streamerId ? (
            <NavLink
              to={`/streaminfo/${streamerId}/${selectedDate}`}
              className={({ isActive }) => cx({ [styles.isActive]: isActive })}
            >
              <p>검색결과</p>
              <span>
                <FiList size={23} />
              </span>
            </NavLink>
          ) : (
            <NavLink to='/streaminfo/requireid' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
              <p>검색결과</p>
              <span>
                <FiList size={23} />
              </span>
            </NavLink>
          )}
        </li>
        <li>
          <NavLink to='/favorites' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            <p>즐겨찾기</p>
            <span>
              <FiStar size={23} />
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default GNB
