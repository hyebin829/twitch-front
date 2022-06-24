import { useState } from 'react'
import { useParams } from 'react-router-dom'

import store from 'store'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const FavoriteButton = () => {
  const params = useParams()
  const { id } = params

  const favoriteList = store.get('twitch-favorite') ?? store.set('twitch-favorite', [])
  const isInclude = favoriteList?.includes(id)
  const [isFavorite, setIsFavorite] = useState(isInclude)

  const handleFavorite = () => {
    isFavorite
      ? store.set(
          'twitch-favorite',
          favoriteList.filter((item: string) => item !== id)
        )
      : store.set('twitch-favorite', favoriteList.concat(id))
    setIsFavorite((prev: boolean) => !prev)
  }

  return (
    <div>
      <button type='button' onClick={handleFavorite} aria-label='favorite button'>
        {isFavorite ? <AiFillStar size={23} /> : <AiOutlineStar size={23} />}
      </button>
    </div>
  )
}

export default FavoriteButton
