import { Dimensions } from 'react-native'

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window')

export const hp = (percentage: number) => {
  return (Math.round((percentage * deviceHeight) / 100)).toString()
}

export const wp = (percentage: number) => {
  return (Math.round((percentage * deviceWidth) / 100)).toString()
}
