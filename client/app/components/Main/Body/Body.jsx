import React, { Component } from "react";
import "./Body.css";

class Body extends Component {
  render() {
    const {
      array,
      currentBubbleTwo,
      currentQuickTwo,
      pivot,
      currentSwappers,
      currentHeapThree,
      currentSorted,
      currentMergeX,
    } = this.props;

    const numWidth = Math.floor(window.innerWidth / (array.length * 3));
    const width = `${numWidth}px`;
    const numMargin = array.length < 5 ? 10 :
                      array.length < 8 ? 8 :
                      array.length < 11 ? 6 :
                      array.length < 20 ? 4 :
                      array.length < 50 ? 3.5 :
                      array.length < 100 ? 3 :
                      array.length < 130 ? 2.5 : 2;
    const margin = `${numMargin}px`;
    const color = numWidth > 20 ? "white" : "transparent";
    const numFont = numWidth > 70 ? 20 :
                    numWidth > 60 ? 18 :
                    numWidth > 50 ? 16 :
                    numWidth > 40 ? 14 :
                    numWidth > 30 ? 12 :
                    numWidth > 20 ? 10 : 8;
    const fontSize = `${numFont}px`;

    return (
      <div id="bodyContainer">
        {array.length > 0 && array.map((number, index) => {
          let backgroundColor;

          if (currentSwappers.includes(index)) {
            backgroundColor = "linear-gradient(45deg, #ff4e50, #f9d423)";
          } else if (
            currentBubbleTwo.includes(index) ||
            currentQuickTwo.includes(index) ||
            currentHeapThree.includes(index) ||
            currentMergeX.includes(index)
          ) {
            backgroundColor = "linear-gradient(45deg, #43cea2, #185a9d)";
          } else if (pivot === index) {
            backgroundColor = "linear-gradient(45deg, #f7971e, #ffd200)";
          } else if (currentSorted.includes(index)) {
            backgroundColor = "linear-gradient(45deg, #8e2de2, #4a00e0)";
          } else {
            backgroundColor = "linear-gradient(45deg, #2980b9, #6dd5fa)";
          }

          return (
            <div
              className="arrayElement"
              key={index}
              style={{
                height: `${number * 3}px`,
                width: width,
                marginLeft: margin,
                marginRight: margin, // ✅ fixed typo from marginRigh
                background: backgroundColor, // ✅ updated to gradient
                color: color,
                fontSize: fontSize,
              }}
              title={`Value: ${number}`} // Optional: shows value on hover
            >
              {number}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Body;

