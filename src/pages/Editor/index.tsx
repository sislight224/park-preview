import { Suspense } from 'react'
import styled from 'styled-components'
import { Loader } from '../../components/Loader'
import Panel from '../../components/Panel'
import Scene from '../../components/Scene'

const Wrapper = styled.div`
    position: relative;
`

export const Editor = () => {
    return (
        <Wrapper className='w-full h-full flex'>
            <Suspense 
                fallback={<Loader />}
            >
                <Panel />
                <Scene />
            </Suspense>
        </Wrapper>
    )
}

export default Editor