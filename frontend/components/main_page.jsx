import React from 'react';


const MainPage = () => {

  return (

    <section className='HomePage'>
      <div className='SectionOne'>
        <a href ="/#/signup"><div className='hoverSOne'></div></a>
      </div>


      <section className='HomeLeft'>
          <div className='SectionTwo'>
            <a href='/#/feed'>
            <img src="https://s3.amazonaws.com/pxco-dev/users/images/000/000/021/original/plushover2.png"/>
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
