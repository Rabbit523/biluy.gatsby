import React, { Component } from "react"
import Home from "./home"
import Background from "./background"
import Result from "./result"
import Loading from "./loading"
import { fetchData } from "../utils/utils"

class Main extends Component {
  state = {
    renderResult: false,
    data: {},
    city: ""
  }

  getData = text => {
    this.setState({
      loading: true,
      renderResult: true,
      city: text
    })
    fetchData(text).then(res => {
      const { data } = res || {}
      console.log(data);
      this.setState(
        {
          data: data
        },
        () => {
          this.setState({
            loading: false,
            renderResult: true,
          })
        }
      )
    })
  }

  onSubmit = (e, text) => {
    e.preventDefault()
    if (!this.state.renderResult) {
      this.getData(text)
    }
  }

  render() {
    const { renderResult, loading, data, city } = this.state
    return (
      <>
        <Background />
        <div className="min-h-screen">
          <div className="sm:px-6 flex items-center flex-col relative z-10">
            <h1 className="text-5xl py-8 md:text-6xl">
              <span role="img" aria-label="tree">
                🌴
              </span>
              <a href="/">biluy</a>
              <span role="img" aria-label="burger">
                🍔
              </span>
            </h1>
            {renderResult ? (
              loading ? (
                <Loading />
              ) : (
                <Result info={data} city={city}/>
              )
            ) : (
              <Home onSubmit={this.onSubmit} />
            )}
          </div>
        </div>
      </>
    )
  }
}

export default Main
