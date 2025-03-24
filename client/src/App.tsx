import './App.css'
import {UserList} from "./components/users-list/UserList.tsx";
import {UserListPanel} from "./module/UserListPanel.tsx";
import {UserInfo} from "./components/UserInfo.tsx";

function App() {

  return (
    <>
        <div className='w-screen h-screen flex items-center justify-center'>
          <UserListPanel>
                <UserList/>
                <UserInfo/>
          </UserListPanel>
        </div>
    </>
  )
}

export default App
