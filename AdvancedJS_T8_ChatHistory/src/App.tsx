import { MessageHistory } from './components/MessageHistory/MessageHistory'
import { messages } from '../data/messages'
import './App.css'

function App() {

  return (
    <div className="chat-container">
      <div className='chat-history'>
      {
        messages.map((message) =>(
          <MessageHistory
            key = {message.id}
            messageProp={message}
          />
        ))
      }
      </div>
    </div>
  )
}

export default App
