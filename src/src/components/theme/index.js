import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: auto;
`
const Select = styled.select`
  height: 50px;
  margin-bottom: 20px;
`
const Button = styled.input`
  height: 50px;
`

function Theme(props) {
  return (
    <Form onSubmit={(e) => { 
        e.preventDefault()
        changeTheme(document.querySelector('#selected-theme').value, props.setTheme) 
      }}>
      <Select id="selected-theme">
        <option value="icy">Icy</option>
        <option value="magma">Magma</option>
        <option value="military">Military</option>
        <option value="dk">Donkey Kong</option>
      </Select>
      <Button type="submit" value="Change theme" />
    </Form>
  )
}

function changeTheme(selectedTheme, setTheme) {
  fetch('http://195.201.32.3:4000/themes/theme', {
    headers: {
      'Theme': selectedTheme
    }
  }).then(response => response.json())
  .then(result => {
    if (result) {
      setTheme(result)
    } else {
      alert('Something went wrong')
    }
  }).catch(err => {
    alert(err)
  })
}

export default Theme