import React from 'react';

 const Announcemantbar = () =>{

  const timer = () =>{
    const curenttime = new Date().getTime();
    const desttime = new Date('Mar 29 2024 21:34:54').getTime();

    const difftime = desttime - curenttime;
    console.log(difftime)
    
  }
  timer();
 return( 
  <>
  <div className="container-fluid">
    <div className="ann-wrapper">
      <div className="ann-item">
        <p>LAST CHANCE: GET UP TO $600 OF BONUS APPAREL IN FIRST 3 BOXES W/CODE 3BOXBONUS</p>
        <div className="timer">

        </div>
      </div>
    </div>
  </div>
  </>
 )
 }

 export default Announcemantbar;