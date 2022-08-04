import { useEffect, useState } from "react";
import ncsColor from "ncs-color";
export default function Canvas() {
  let [canvasstyle, setCanvasstyle] = useState();
  let [updateCount, SetUpdateCount] = useState(0);
  let [blackness, setBlackness] = useState(60);
  let [chromaticness, setChromaticness] = useState(60);
  let [intervalId, setIntervalId] = useState(0);

  let letters = ["G", "Y", "R", "B"];
  let interval;

  const resetInterval = (e) => {
    console.log(intervalId);
    //todo interval id is unknown here.
    console.log("changeing timing", e.target.value);
    var r = clearInterval(intervalId);
    interval = undefined;
    interval = setInterval(() => tick(), e.target.value);
    setIntervalId(interval);
  };

  useEffect(() => {
    interval = setInterval(() => tick(), 200);
    setIntervalId(interval);
  }, []);

  const tick = () => {
    SetUpdateCount((updateCount += 1));
  };

  useEffect(() => {
    let quad = Math.floor((updateCount % 400) / 100);
    let nextquad = quad + 1;
    if (nextquad > 3) nextquad = 0;

    let mix = updateCount / 100.0;
    if (mix > 1) {
      mix = mix - Math.floor(mix);
    }
    mix = Math.round(mix * 100);
    if (mix == 100) mix = 0;
    if (mix < 10) mix = "0" + mix;

    let ncs = `NCS S ${blackness}${chromaticness}-${letters[quad]}${mix}${letters[nextquad]}`;
    let c = ncsColor.hex(ncs);
    console.log(ncs);
    setCanvasstyle({
      height: "100vh",
      backgroundColor: c,
    });
  }, [blackness, updateCount]);

  const blacknessChanged = (e) => {
    if (e.target.value < 10) setBlackness("0" + e.target.value);
    else setBlackness(e.target.value);
  };

  const chromaticnessChanged = (e) => {
    if (e.target.value < 10) setChromaticness("0" + e.target.value);
    else setChromaticness(e.target.value);
  };

  //GYRB
  return (
    <div style={canvasstyle}>
      <a href="https://en.wikipedia.org/wiki/Natural_Color_System">
        read more on the natural color system
      </a>
      <div>
        <input
          type="range"
          value={blackness}
          onChange={blacknessChanged}
        ></input>
        <label>blackness</label>
      </div>
      <div>
        <input
          type="range"
          value={chromaticness}
          onChange={chromaticnessChanged}
        ></input>
        <label>chromaticness</label>
      </div>
      <div>
        <input
          type="range"
          min="100"
          max="3000"
          onChange={resetInterval}
        ></input>
        <label>interval</label>
      </div>
    </div>
  );
}
