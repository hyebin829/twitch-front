import SelectDate from './Calendar'
import Timeline from './Timeline/Timeline'

import styles from './streamInfo.module.scss'

const StreamInfo = () => {
  return (
    <div className={styles.streamInfoWrapper}>
      <SelectDate />
      <Timeline />
    </div>
  )
}

export default StreamInfo
