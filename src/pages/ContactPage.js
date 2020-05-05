import React, { Component } from 'react';
import "../styles/ContactPage.css"
import { Prompt } from 'react-router-dom'

class ContactPage extends Component {
  state = {
    value: "",
    name: ""
  }

  handleChange = (e) => {
    if (e.target.className === "name") {
      this.setState({
        name: e.target.value
      })
    } else {
      this.setState({
        value: e.target.value
      })
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      value: "",
      name: ""
    })
  }


  render() {
    return (
      <>
        <div className="contact">
          <form onSubmit={this.handleSubmit}>
            <h1>Napisz do nas</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt nobis, optio ad pariatur quibusdam quis amet quae voluptatum mollitia praesentium repudiandae repellat maiores veritatis corporis iusto maxime nostrum magni!</p>
            <textarea className='name' value={this.state.name} onChange={this.handleChange} placeholder="Twoje imię" ></textarea>
            <textarea className='message' value={this.state.value} onChange={this.handleChange} placeholder="Napisz do nas:)" ></textarea>
            <button>Wyslij</button>
          </form>
          <Prompt when={this.state.value || this.state.name} message="Rozpocząłeś wypełnianie formularza. Czy na pewno chcesz opuścić stronę?" />
        </div>
      </>
    );
  }
}


export default ContactPage;