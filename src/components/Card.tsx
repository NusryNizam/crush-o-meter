import './Card.css'

type CardPropType = {
    children: React.ReactNode
}
const Card = ({children}: CardPropType) => {
  return (
    <div className="Card">
        {children}
    </div>
  )
}

export default Card