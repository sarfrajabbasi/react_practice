import React from 'react'

// creating user context
const UserContext = React.createContext('jingle bell');

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;
export {UserProvider,UserConsumer}
export default UserContext