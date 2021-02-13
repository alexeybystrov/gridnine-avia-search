import React from 'react';
// import Channels from './Channels.jsx';
// import MessagesList from './MessagesList.jsx';
// import MessagesForm from './MessagesForm.jsx';
// import ParentModal from './ParentModal.jsx';
// import NetworkErrorToast from './NetworkErrorToast.jsx';
import SearchMenu from './SearchMenu.jsx';
import CardsList from './CardsList.jsx';

const App = () => {
  // const toastState = useState(false);
  console.log('hola');

  return (
    <div className="d-flex flex-column h-100">
      <div className="container-md h-100 overflow-hidden p-3">
        <div className="h-100">
          <div className="row h-100 pb-3">
            <SearchMenu />
            <CardsList />
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
