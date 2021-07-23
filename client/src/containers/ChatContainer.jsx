import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Chats } from '../screens'
import {getAllChats} from '../services/chats'

export default function ChatContainer() {
  const [allChats, setAllChats] = useState([])

  useEffect(() => {
    const fetchChats = async () => {
      const chats = await getAllChats()
      setAllChats(chats)
    }
    fetchChats()
  }, [])

  return (
    <div>
      <Switch>
        <Route path="/chats">
          <Chats allChats={allChats}/>
        </Route>
      </Switch>
    </div>
  )
}
