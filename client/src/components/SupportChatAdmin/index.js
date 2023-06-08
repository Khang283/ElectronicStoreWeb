import React from 'react';

import { ChatEngine } from 'react-chat-engine'

const SupportAdmin = () => {
  return (
    <ChatEngine 
      projectID={process.env.REACT_APP_CE_PROJECT_ID}
      userName='ADMIN'
      userSecret='username'
      height='calc(100vh - 12px)'
      offset={7}
    />
  );
}

export default SupportAdmin;
