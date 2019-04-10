import memoize from 'memoize-one'

const emSize = '16px'
const retinaCalc = 1.5

const px2rem = pxVal => `${pxVal / emSize.replace(/px/g, '')}rem`

const hiDPIpx = pxVal => `${pxVal * retinaCalc}px`

export const memoHiDPI = memoize(hiDPIpx)
export const memoPx2Rem = memoize(px2rem)
