import { useState } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "are you sure?",
      "really sure?",
      "fr man???",
      "i think you misclicked",
      "surely not?",
      "pleaaase sad face",
      "quit playing....",
      "haha u nd ur silly mouse accidently pressing the no button",
      "This could be a mistake!",
      "PLZ",
      "dont leave me hangin..",
      "change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "does this mean you're filing me for harassment",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container">
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img src="https://media.tenor.com/3oimwvCXMjkAAAAj/valentine%27s-day-valentine.gif" />
            <div className="text-container">
              YIPEEE!!!! now click the link below,,
            </div>
            <div className="text-container">
              <a href="https://www.canva.com/design/DAHBOeUGbtM/1Q52YAPqk_M-TlN8jl9Rsw/view?utm_content=DAHBOeUGbtM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0818919596">
                here,,
              </a>
            </div>
          </>
        ) : (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src="https://media.tenor.com/63qEOw-UQb8AAAAj/valentine%27s-day-valentines.gif"
            />
            <h1 className="text-container">Will you be my Valentine?</h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
