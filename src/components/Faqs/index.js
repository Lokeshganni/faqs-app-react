// Write your code here.

import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="main-container">
      <div className="faqs-container">
        <h1 className="heading">FAQs</h1>
        <ul>
          {faqsList.map(each => (
            <FaqItem faqItemDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
