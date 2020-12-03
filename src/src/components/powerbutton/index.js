import styled from 'styled-components'

const Button = styled.input`
  width: 50px;
  height: 200px;
  margin: auto;
  background-color: ${props => props.fgColor};
`

function PowerButton(props) {
  return <Button type="button" fgColor={props.fgColor} onClick={() => powerButtonPressed()}/>
}

function powerButtonPressed() {
  window.plugins.flashlight.available(isAvailable => {
    if (isAvailable) {
      window.plugins.flashlight.toggle()
    } else {
      alert("Flashlight not available on this device")
    }
  })
}

export default PowerButton