import React, {useEffect} from "react";
import { BiUpArrow } from 'react-icons/bi';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';

function backTop() {
  useEffect(() => {
    window.onscroll = function() {
      scrollFunction()
    };
  })

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("topButton").style.display = "block";
    }else {
    document.getElementById("topButton").style.display = "none";
    }
  }
  function topFunction() {
    window.history.pushState("", "", '/');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  return (
    <div>
      <NotificationContainer/>
      <button onClick={(e) => topFunction(e)} id="topButton" title="Powrót do góry"><BiUpArrow width="0" /></button>
    </div>
  );
}

export default backTop;