import styled from 'styled-components'

const Button = styled.input`
  width: 50px;
  height: 200px;
  margin: auto;
  background-color: ${props => props.color};
`

function PowerButton(props) {
  return <Button type="button" color={props.color} onClick={() => powerButtonPressed()}/>
}

function powerButtonPressed() {
  
}

export default PowerButton