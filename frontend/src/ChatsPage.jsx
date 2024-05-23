import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatPage = (props) => {
    

    return(
      <div style={{height: '100vh'}}>
         <PrettyChatWindow
           projectId='b627de67-56ee-4e59-b9c4-7631255105f3'
           username={props.user.username}
           secret={props.user.secret}
           style={{height: '100%'}}
         />
      </div>
    )
}

export default ChatPage;