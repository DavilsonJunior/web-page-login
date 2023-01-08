import { useAuth } from '@/hooks/useAuth';
import { getNotifications } from '@/services/getNotifications';
import { useEffect, useState } from 'react';
import { AiFillBell } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'
import { Notifications } from '../Notifications'
import { HeaderContainer } from './styles'

export interface Notification {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const Header = () => {
  const { signOut } = useAuth();

  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isOpenNotification, setIsOpenNotification] = useState(false);

  useEffect(() => {
   async function fetchData() {
    const data = await getNotifications();
    setNotifications(data)
   }

   fetchData()
  }, []);

  return (
    <>
      <HeaderContainer isNotification={notifications.length > 0}>
          <button className="notification" type="button" onClick={() => setIsOpenNotification(!isOpenNotification)}>
            <AiFillBell />
          </button>
          <button type="button" onClick={() => signOut()}>
            <FiLogOut />
          </button>         
      </HeaderContainer>
      {isOpenNotification && <Notifications data={notifications} />}
    </>  
  )
}