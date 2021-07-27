import { SideNav } from '../components'
import '../assets/css/layouts/Layout.css'

export default function Layout({children}) {
  return (
    <div className="layout">
      <SideNav />
      {children}
    </div>
  )
}
