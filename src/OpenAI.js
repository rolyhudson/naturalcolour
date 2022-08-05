import React, { useState } from "react";
import OpenAIAPI from "react-openai-api";

export default function OpenAI() {
  let apiKey = process.env.REACT_APP_OPENAI_KEY;
  let [moodText, setMoodText] = useState("a sky at dusk");
  let [canvasstyle, setCanvasstyle] = useState();
  let [colour, seColour] = useState();

  let [payload, setPayload] = useState({
    prompt: "",
    maxTokens: 25,
    temperature: 0.5,
    n: 1,
  });

  const responseHandler = (openAIResponse) => {
    let c =
      "#" +
      openAIResponse.choices[0].text.substring(
        0,
        openAIResponse.choices[0].text.indexOf(";")
      );
    console.log(c);
    setCanvasstyle({
      height: "100vh",
      backgroundColor: c,
    });
  };

  const moodChanged = (e) => {
    setMoodText(e.target.value);
  };

  const updateColour = () => {
    let text = `The CSS code for a color like ${moodText} :\n\nbackground-color: #`;
    console.log("updating colour", text);
    setPayload({ ...payload, prompt: text });
  };

  return (
    <div style={canvasstyle}>
      <label>
        Describe your mood:
        <input
          type="text"
          name="name"
          value={moodText}
          onChange={moodChanged}
        />
      </label>
      <button onClick={updateColour}>get colour</button>
      {payload.prompt.length > 0 ? (
        <OpenAIAPI
          apiKey={apiKey}
          payload={payload}
          responseHandler={responseHandler}
        />
      ) : (
        ""
      )}
    </div>
  );
}
