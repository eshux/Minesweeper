import React from 'react';
import Game from './components/Game/Game';

const App = () => {
  return (
    <section className='bg'>
      <div className='container'>
        <div className='row center-xs margin--0'>
          <div className='col-xs-12'>
            <div className='game-wrapper'>
              <Game />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
