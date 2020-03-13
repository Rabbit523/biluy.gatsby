import React, { useEffect, useState } from "react"
import Typed from "typed.js"

const SelfTypeInput = ({ handleChange }) => {
  const [createTyped, setCreateTyped] = useState(true)

  useEffect(() => {
    if (createTyped) {
      var options = {
        strings: [
          "Type in your city.",
          "Athens",
          "Tel Aviv",
          "Stockholm",
          "San Francisco",
          "Umeå",
          "Madrid",
          "Amsterdam",
          "London",
        ],
        typeSpeed: 80,
        backSpeed: 75,
        attr: "placeholder",
        shuffle: true,
      }

      new Typed(".element", options)
      setCreateTyped(false)
    }
  })

  return (
    <input
      className="bg-transparent focus:outline-none placeholder-fix placeholder-width-fix element"
      autoComplete="off"
      type="text"
      name="name"
      onChange={handleChange}
    />
  )
}

export default SelfTypeInput
