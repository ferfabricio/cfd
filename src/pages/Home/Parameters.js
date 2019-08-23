import React from 'react'

function handleChange (setter) {
  return (event) => {
    event.preventDefault()

    setter(event.target.value)
  }
}

const Parameters = ({ setDaysQuantity }) => {
  return <div>
    <form>
      <label htmlFor="quantity">Quantidade de dias</label>
      <input type="text" name="quantity" onChange={handleChange(setDaysQuantity)} />
    </form>
  </div>
}

export default Parameters

