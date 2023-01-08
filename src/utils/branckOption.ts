import { useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints({
  phone: 720,
  tablet: 940,
  laptop: 1280,
  desktop: 1500
})

/** 电脑设备 */
const isPC = breakpoints.greater('laptop')
console.log('isPC', isPC.value)
/** 平板设备 */
const isTablet = breakpoints.between('tablet', 'laptop')
console.log('isTablet', isTablet.value)

/** 大尺寸手机设备 */
const isMobile = breakpoints.smaller('tablet')
console.log('isMobile', isMobile.value)

/** 中小尺寸手机设备 */
const isPhone = breakpoints.smaller('phone')
console.log('phone', isPhone.value)

export default { isPC, isTablet, isMobile, isPhone }
export { isPC, isTablet, isMobile, isPhone }
