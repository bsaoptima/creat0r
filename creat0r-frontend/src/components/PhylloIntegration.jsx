import React, { useEffect } from 'react';
import { PhylloConnect } from "../scripts";

export default function PhylloIntegration() {
  const config = {
    environment: 'sandbox',
    userId: 'yourUserId',
    token: 'yourToken',
    clientDisplayName: 'Your Client Display Name', // Define clientDisplayName here
  };

  const phylloConnect = PhylloConnect.initialize(config);

  phylloConnect.on("accountConnected", (accountId, workplatformId, userId) => {
  // gives the successfully connected account ID and work platform ID for the given user ID
  console.log(
      `onAccountConnected: ${accountId}, ${workplatformId}, ${userId}`
  );
  });
  phylloConnect.on(
  "accountDisconnected",
  (accountId, workplatformId, userId) => {
      // gives the successfully disconnected account ID and work platform ID for the given user ID
      console.log(
      `onAccountDisconnected: ${accountId}, ${workplatformId}, ${userId}`
      );
  }
  );
  phylloConnect.on("tokenExpired", (userId) => {
  // gives the user ID for which the token has expired
  console.log(`onTokenExpired: ${userId}`); // the SDK closes automatically in case the token has expired, and you need to handle this by showing an appropriate UI and messaging to the users
  });
  phylloConnect.on("exit", (reason, userId) => {
  // indicates that the user with given user ID has closed the SDK and gives an appropriate reason for it
  console.log(`onExit: ${reason}, ${userId}`);
  });
  phylloConnect.on("connectionFailure", (reason, workplatformId, userId) => {
  // optional, indicates that the user with given user ID has attempted connecting to the work platform but resulted in a failure and gives an appropriate reason for it
  console.log(`onConnectionFailure: ${reason}, ${workplatformId}, ${userId}`);
  });

  your_button.onclick = phylloConnect.open();

  return (
    <div>
      <button onClick={handlePhylloIntegration}>Open Phyllo</button>
    </div>
  );
}

