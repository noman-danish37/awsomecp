// import './App.css';
import { Amplify } from 'aws-amplify';
import awsConfig from './aws-exports';

import { Authenticator, components } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
// import { signOut } from 'aws-amplify/auth';


Amplify.configure(awsConfig);

function App() {
  return (
    <Authenticator components = { components }>
      {({ signOut , user }) => (
          <div className='App'>
            <h1>Hello {user.username}</h1>
            <button onClick={ signOut}>Sign out</button>
           
          </div>

      )}
    </Authenticator>
  );
}




export default App;
