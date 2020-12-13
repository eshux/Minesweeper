import React, { useState } from 'react';
import './App.css';
import 'flexboxgrid';
import Grid from './components/Grid/Grid';
import Button from './components/Button/Button';

const App = () => {
  const [difficulty, setDifficulty] = useState(9);

  return (
    <section>
      <div className="container container-fluid">
        <div className="row center-xs">
          <div className="col-xs-12">
            <div>
              <Button onClick={() => setDifficulty(9)} text="Easy" />
              <Button onClick={() => setDifficulty(16)} text="Medium" />
              <Button onClick={() => setDifficulty(23)} text="Hard" />
            </div>
            <Grid difficulty={difficulty} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
