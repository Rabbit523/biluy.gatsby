import React from "react"

const Loading = () => {
  return (
    <div className="container">
      <div className="orbit-system">
        <div className="origin-dot">
          Searching
        </div>
        <div className="group-spin">
          <div className="spin1">
            <span role="img" aria-label="burger">
              🎱
            </span>
          </div>
          <div className="spin2">
            <span role="img" aria-label="burger">
              🍻
            </span>
          </div>
          <div className="spin3">
            <span role="img" aria-label="burger">
              🚆
            </span>
          </div>
          <div className="spin4">
            <span role="img" aria-label="burger">
              🍩
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading
