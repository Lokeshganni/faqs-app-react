// Write your code here.
import {Component} from 'react'
import './index.css'

const imgUrls = {
  active: 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png',
  inActive: 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png',
}

class FaqItem extends Component {
  state = {isBtnActive: false}

  onClickBtn = () => {
    this.setState(prevState => ({isBtnActive: !prevState.isBtnActive}))
  }

  render() {
    const {faqItemDetails} = this.props
    const {isBtnActive} = this.state
    const {questionText, answerText} = faqItemDetails
    return (
      <li>
        <div className="text-and-button-container">
          <h1 className="faq-qns-para">{questionText}</h1>
          <button type="button" className="btn-card" onClick={this.onClickBtn}>
            {isBtnActive ? (
              <img src={imgUrls.inActive} alt="minus" className="icon" />
            ) : (
              <img src={imgUrls.active} alt="plus" className="icon" />
            )}
          </button>
        </div>

        {isBtnActive ? (
          <div>
            <hr />
            <p className="faq-ans-para">{answerText}</p>
          </div>
        ) : null}
      </li>
    )
  }
}
export default FaqItem
