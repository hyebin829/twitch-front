import { MouseEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import store from 'store'
import styles from './favoriteList.module.scss'
import { FiTrash2 } from 'react-icons/fi'

const FavoriteList = () => {
  const favoriteList = store.get('twitch-favorite') ?? []
  const [list, setList] = useState(favoriteList)
  const today = dayjs().format('YYYY-MM-DD')

  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    setList(
      store.set(
        'twitch-favorite',
        favoriteList.filter((item: string) => item !== e.currentTarget.dataset.streamerId)
      )
    )
  }

  return (
    <div className={styles.favoriteListWrapper}>
      <h2>Favorite List</h2>
      {!favoriteList.length && <div className={styles.nothing}>즐겨찾는 스트리머가 없습니다.</div>}
      <ul className={styles.favoriteWrapper}>
        {list.map((item: string) => (
          <div key={item} className={styles.favorite}>
            <Link to={`/streaminfo/${item}/${today}`}>{item}</Link>
            <button type='button' onClick={handleDelete} data-streamer-id={item}>
              <FiTrash2 size={20} />
            </button>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default FavoriteList
