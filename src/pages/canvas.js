import React from 'react';
import '@excalidraw/excalidraw';
import { Excalidraw } from '@excalidraw/excalidraw';
import styles from './canvas.module.css';
import './excalidraw.custom.css'

function Canvas() {
  return (
    <div className={styles.Canvas}>
      <Excalidraw />
    </div>
  );
}

export default Canvas;
