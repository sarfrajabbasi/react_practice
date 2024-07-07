// @ts-nocheck
import React, { useContext } from "react";
import {
  UserContext,
  ChannelContext,
} from "/home/pc/Desktop/Front_End/REACT_Learn/my-react-work/src/App.js";
function CompF() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      {user} {channel}
    </div>
  );
}

export default CompF;
