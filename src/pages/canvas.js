import React from 'react';
import '@excalidraw/excalidraw';
import { Excalidraw } from '@excalidraw/excalidraw';

function Canvas() {
  return (
    <div className= "Canvas">
      <Excalidraw gridModeEnabled/>
    </div>
  );
}

export default Canvas;
