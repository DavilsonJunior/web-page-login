import { NotificationItemContainer } from "./styles"
import { AiFillCloseCircle } from 'react-icons/ai'

interface NotificationItemProps {
  title: string;
  description: string;
}

export const NotificationItem = ({ title, description }: NotificationItemProps) => {
  return (
    <NotificationItemContainer>
      <div className="content">
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
      <button>
      < AiFillCloseCircle />     
      </button>
     
    </NotificationItemContainer>  
  )
}