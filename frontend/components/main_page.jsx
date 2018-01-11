import React from 'react';


const MainPage = () => {

  return (

    <section className='HomePage'>
      <div className='SectionOne'>
        <a href ="/#/signup"><div className='hoverSOne'></div></a>
      </div>


      <section className='HomeLeft'>
          <div className='SectionTwo'>
            <a href='/#/explore'>
            <div className='hoverSTwo'></div>
            </a>

          </div>
          <div className='SectionThree'>
            <a href='/#/users/6'>
            <div className='hoverSThree'></div>
          </a>
          </div>
        </section>



    </section>
  );

};

export default MainPage;
