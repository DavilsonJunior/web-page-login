import { NotificationsContainer } from "./styles"
import { AiFillEdit } from 'react-icons/ai';
import { NotificationItem } from "../NotificationItem";

interface NotificationsProps {
  data: {
    id: number;
    title: string;
    body: string;
  }[]
}

export const Notifications = ({ data }: NotificationsProps) => {
  return (
    <NotificationsContainer>
      <div className="header">
        <div className="header__title">
          <AiFillEdit />
          <span>Editar Notificações</span>
        </div>
        <button type="button">
          Limpar
        </button>
      </div>

      {data?.slice?.(0, 3).map((notification) => (
        <NotificationItem 
          key={notification.id}
          title={notification.title}
          description={notification.body}
        />
      ))}
    </NotificationsContainer>  
  )
}