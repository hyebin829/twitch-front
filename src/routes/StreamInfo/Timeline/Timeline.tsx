import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

import { useRecoil } from 'hooks/state'
import { getStream } from 'services/getStream'
import { StreamerState } from 'states'
import { IStreamInfo } from 'types/index'

import styles from './timeline.module.scss'

const Timeline = () => {
  const [, setFavoriteStreamer] = useRecoil(StreamerState)

  const params = useParams()
  const streamerId = params.id
  const selectedDate = params.date

  useEffect(() => {
    setFavoriteStreamer(streamerId)
  }, [setFavoriteStreamer, streamerId])

  const { data } = useQuery(
    ['getStreaminfo', streamerId, selectedDate],
    () => getStream(streamerId, selectedDate).then((res) => res.data),
    {
      refetchOnWindowFocus: true,
      cacheTime: 30 * 60 * 1000,
      enabled: !!streamerId,
    }
  )

  return (
    <ol className={styles.timelineWrapper}>
      {data?.length === 0 && (
        <div className={styles.noData}>
          자료가 없습니다. <br />
          스트리머 아이디 또는 날짜를 바르게 입력해주세요.
        </div>
      )}
      {data &&
        data.map((item: IStreamInfo) => (
          <li className={styles.timelineList} key={`${item.title}-${item.category}`}>
            <ul className={styles.streamInfo}>
              <li className={styles.category}>{item.category}</li>
              <li className={styles.title}>{item.title}</li>
              <li className={styles.start}>started at {item.createdAt}</li>
            </ul>
          </li>
        ))}
    </ol>
  )
}

export default Timeline
