import { axios } from 'hooks/worker'

export const getStream = (streamerId: string | undefined, pickedDate: string | undefined) =>
  axios.get(`https://timelinetwitch.link/api/streaminfo/${streamerId}/${pickedDate}`)

export const getOnAirDay = (streamerId: string | undefined) =>
  axios.get(`https://timelinetwitch.link/api/onairday/${streamerId}`)
