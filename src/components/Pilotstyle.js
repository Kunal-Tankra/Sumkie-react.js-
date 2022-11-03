import React, { useEffect } from 'react'

const Pilotstyle = (props) => {
  const capitalize = (word) => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase()

  }
  useEffect(() => {

    document.title = `Sumkie - ${capitalize(props.title)}`
  })
  return (
    <div>
      Pilotstyle
    </div>
  )
}

export default Pilotstyle
