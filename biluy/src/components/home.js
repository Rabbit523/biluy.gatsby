import React, { useState } from "react"
import SelfTypeInput from "./selftypeinput"

const Home = ({ onSubmit }) => {
  const [text, setText] = useState("")

  const handleChange = e => {
    const { target } = e || {}
    const { value } = target || {}
    setText(value)
  }

  return (
    <>
      <p className="text-center text-lg p-8 md:max-w-xl">
        Want to go out? Have no idea where to go or what to do? Type in your
        city of choice and biluy will suggest something!
      </p>
      <form className="my-8 py-1 fat-border" onSubmit={e => onSubmit(e, text)}>
        <label>
          <svg
            className="inline-block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            height="32"
            width="32"
          >
            <path
              fill="#fff"
              d="M19 3C13.488 3 9 7.488 9 13c0 2.395.84 4.59 2.25 6.313L3.281 27.28 4.72 28.72l7.968-7.969A9.922 9.922 0 0 0 19 23c5.512 0 10-4.488 10-10S24.512 3 19 3zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8z"
            />
          </svg>
          &nbsp;
          <SelfTypeInput handleChange={handleChange} />
        </label>
      </form>
      <button
        onClick={e => onSubmit(e, text)}
        className="flex justify-center items-center m-5 hover:bg-white border-white hover:text-red-500 p-5 border-8 rounded-xl font-bold text-2xl w-64"
        disabled={text === ""}
      >
        Spin The Wheel
      </button>
      <div className="flex justify-center w-full px-5 pt-20 mb-4">
        <div className="flex flex-col items-center">
          <div>
            huge shoutout to{" "}
            <a
              href="https://twemoji.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              twemoji
            </a>
          </div>
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/dadatalks"
          className="flex justify-end position-right mr-5 icon"
        >
          <svg width="24" height="24" fill="#fff" className="ml-2">
            <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 3.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 4.557z" />
          </svg>
        </a>
      </div>
    </>
  )
}

export default Home
