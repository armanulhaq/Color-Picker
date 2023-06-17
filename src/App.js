import React from 'react';
import ColorPicker from './ColorPicker';

function App() {
  const colors = ['Red', 'Green', 'Blue', 'Yellow'];

  return (
    <div>
      <h1>Color Picker</h1>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
