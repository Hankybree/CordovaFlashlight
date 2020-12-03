import { PowerButton, Theme } from './components'
import styled from 'styled-components'
import { useState } from 'react'

const Background = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => props.bgColor};
`

function App() {
  const [theme, setTheme] = useState({ bgColor: 'blue', fgColor: 'aqua' })
  return (
    <Background bgColor={theme.bgColor}>
      <PowerButton fgColor={theme.fgColor} />
      <Theme setTheme={setTheme} />
    </Background>
  )
}

export default App
