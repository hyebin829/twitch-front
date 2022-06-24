import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'

import styles from './searchInput.module.scss'
import { FiSearch } from 'react-icons/fi'

const SearchInput = () => {
  const navigate = useNavigate()
  const [streamer, setStreamer] = useState('')
  const [isBlank, setIsBlank] = useState(false)

  const today = dayjs().format('YYYY-MM-DD')

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setStreamer(e.currentTarget.value.trim())
    setIsBlank(false)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!streamer.trim()) setIsBlank(true)
    else {
      navigate(`/streaminfo/${streamer}/${today}`)
    }
  }

  const handleButtonSubmit = () => {
    if (!streamer.trim()) setIsBlank(true)
    else {
      navigate(`/streaminfo/${streamer}/${today}`)
    }
  }

  return (
    <div className={styles.formWrapper}>
      <form action='submit' onSubmit={handleSubmit}>
        <div className={styles.formText}>
          Search
          <br /> Streaming
          <br /> Information
        </div>
        <label htmlFor='streamerId' />
        <div className={styles.searchInputWrapper}>
          <input
            type='text'
            className={styles.searchInput}
            id='streamerId'
            value={streamer}
            onChange={handleInput}
            placeholder='streamer id'
          />
          <button type='submit' className={styles.searchButton} onClick={handleButtonSubmit}>
            <FiSearch size={20} />
          </button>
        </div>
      </form>
      {isBlank && <div className={styles.invalidValue}>스트리머 아이디를 입력해주세요.</div>}
    </div>
  )
}

export default SearchInput
