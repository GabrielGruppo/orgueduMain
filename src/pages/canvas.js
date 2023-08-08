function Canvas() {
    return (
        <div>
        <meta charSet="utf-8" />
        <title>Mapa Mental</title>
        <link rel="stylesheet" href="/css/canvas.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <button className="back-btn" onclick="goBack()">← Back</button>
        <div className="container">
          <section className="tools-board">
            <div className="row">
              <label className="title">Shapes</label>
              <ul className="options">
                <li className="option tool" id="text">
                  <img src="/images/icons/text.png" alt />
                  <span>Text</span>
                </li>
                <li className="option tool" id="rectangle">
                  <img src="/images/icons/rectangle.svg" alt />
                  <span>Rectangle</span>
                </li>
                <li className="option tool" id="circle">
                  <img src="/images/icons/circle.svg" alt />
                  <span>Circle</span>
                </li>
                <li className="option tool" id="triangle">
                  <img src="/images/icons/triangle.svg" alt />
                  <span>Triangle</span>
                </li>
                <li className="option">
                  <input type="checkbox" id="fill-color" />
                  <label htmlFor="fill-color">Fill color</label>
                </li>
              </ul>
            </div>
            <div className="row">
              <label className="title">Options</label>
              <ul className="options">
                <li className="option active tool" id="brush">
                  <img src="/images/icons/brush.svg" alt />
                  <span>Brush</span>
                </li>
                <li className="option tool" id="eraser">
                  <img src="/images/icons/eraser.svg" alt />
                  <span>Eraser</span>
                </li>
                <li className="option">
                  <input type="range" id="size-slider" min={1} max={30} defaultValue={5} />
                </li>
              </ul>
            </div>
            <div className="row colors">
              <label className="title">Colors</label>
              <ul className="options">
                <li className="option" />
                <li className="option selected" />
                <li className="option" />
                <li className="option" />
                <li className="option">
                  <input type="color" id="color-picker" defaultValue="#4A98F7" />
                </li>
              </ul>
            </div>
            <div className="row buttons">
              <button className="clear-canvas">Clear Canvas</button>
              <button className="save-img">Save As Image</button>
            </div>
          </section>
          <section className="drawing-board">
            <canvas />
          </section>
        </div>
      </div>
      
    );
  }
