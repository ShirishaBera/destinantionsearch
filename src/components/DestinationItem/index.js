// Write your code here
import './index.css'

const DestinationItem = props => {
  const {DestinationDetails} = props
  const {imageUrl, name} = DestinationDetails

  return (
    <li className="destination-item">
      <img src={imageUrl} alt={name} className="destination-image" />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
