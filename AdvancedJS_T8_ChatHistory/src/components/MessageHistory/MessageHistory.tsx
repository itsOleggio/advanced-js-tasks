import type { IChat } from "../../model/chat.model"
import './../../App.css'

interface IChatProps {
    messageProp: IChat;
}

export function MessageHistory({ messageProp }: IChatProps) {

    const getMessageType = (type: string): string | undefined => {
        switch (type) {
            case 'response':
                return 'message-response';
            case 'message':
                return 'message-own'
            case 'typing':
                return 'message-typing'
        }
    }

    const isTyping: boolean = messageProp.type === 'typing'

    return (
        <div className={`message-item ${getMessageType(messageProp.type)}`}>
            <div className="message-header">
                <span className="message-author">{messageProp.from.name}</span>
                <span className="message-time">{messageProp.time}</span>
            </div>
            <div className={isTyping? 'typing-indicator ``' : 'message-bubble'}>
                {isTyping ? 'печатает...' : messageProp.text}
                {isTyping && ( <div className="typing-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>)}
            </div>
        </div>
    )
}