import { useEffect, useState } from "react";
import deepai from "deepai";
import { Configuration, OpenAIApi } from "openai";
export default function Image() {
  deepai.setApiKey("3603893b-1607-42fa-ad9a-17a4220d805d");
  console.log(deepai);
  (async function () {
    // var resp = await deepai.callStandardApi("text2img", {
    //   text: "peaceful landscape",
    // });
    // console.log(resp);
  })();

  const deepaiQuery = async (query) => {
    // try {
    //   var result = await deepai.callStandardApi("text2img", {
    //     text: "peaceful landscape",
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
  };

  async function callStandardApi() {
    //   await deepai.renderResultIntoElement(
    //     result,
    //     document.getElementById("image")
    //   );
  }

  deepaiQuery();

  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  (async function () {
    const response = await openai.createCompletion({
      model: "text-davinci-002",
      prompt:
        "The CSS code for a color like a blue sky at dusk:\n\nbackground-color: #",
      temperature: 0,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: [";"],
    });
    console.log(response);
  })();

  return <div id="image"></div>;
}
