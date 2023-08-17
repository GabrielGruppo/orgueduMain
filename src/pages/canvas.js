import React from 'react';
import '@excalidraw/excalidraw';
import Excalidraw from '@excalidraw/excalidraw';
import WelcomeScreen from '@excalidraw/excalidraw';

function Canvas() {
  return (
    <div className="Canvas">
      <Excalidraw>
        <WelcomeScreen>
          
        </WelcomeScreen>
      </Excalidraw>
    </div>
  );
}

export default Canvas;
