import {useContext} from 'react'
import { SideNav } from '../components'
import '../assets/css/layouts/Layout.css'
import { LogoutContext, UserContext } from '../contexts'

export default function Layout({children}) {
  const currentUser = useContext(UserContext)
  const handleLogout = useContext(LogoutContext)
  
  return (
    <div className="layout">
      <SideNav currentUser={currentUser} handleLogout={handleLogout}/>
      {children}
    </div>
  )
}
