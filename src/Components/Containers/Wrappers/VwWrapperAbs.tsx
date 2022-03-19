import styled from 'styled-components'
import { background_z, background_z_decorator } from '../zIndex'

const VwAbsWrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: ${background_z_decorator};
`

export default VwAbsWrapper
