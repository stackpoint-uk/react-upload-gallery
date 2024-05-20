import React from "react";
import DropArea from "./DropArea";

export default (options, { handle }) => (
  <DropArea>
    {isDrag => (
      <div className={`rug-handle ${isDrag ? "__dragging" : ""}`}>
        <svg viewBox="0 -5 32 52" className="rug-handle-icon">
          <g>
            <polyline points="1 19 1 31 31 31 31 19" />
            <polyline className="__arrow" points="8 9 16 1 24 9" />
            <line className="__arrow" x1="16" x2="16" y1="1" y2="25" />
          </g>
        </svg>

        <div className="rug-handle-info">
          {typeof handle === "function" ? (
            handle(options)
          ) : (
            <React.Fragment>
              <div className="rug-handle-drop-text">
                Drag and drop image here to upload
              </div>

              <span>or</span>

              <div onClick={options.openDialogue} className="rug-handle-button">
                Upload image
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    )}
  </DropArea>
);
