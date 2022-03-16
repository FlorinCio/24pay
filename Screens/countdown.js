import React, { useEffect, useState } from 'react'
import Countdown from "react-countdown";

 function countdown(array, n) {
 if( n <= 0 ){
    return;
  } else{
    array.push(n);
    countdown(array,n-1)
  }
 }
  }
