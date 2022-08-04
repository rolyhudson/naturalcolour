import { useEffect, useState } from "react";
import Canvas from "./Canvas";
import OpenAI from "./OpenAI";
import Audio from "./Audio";
export default function Menu() {
  const apps = [<Audio />, <Canvas />, <OpenAI />];

  let [selectedApp, setSelectedApp] = useState("Audio");

  const radioChanged = (e) => {
    setSelectedApp(e.target.value);
  };

  const findApp = () => {};

  return (
    <div>
      {apps.map((app, i) => {
        return (
          <div className="form-check" key={i}>
            <label key={i}>
              <input
                type="radio"
                value={app.type.name}
                checked={app.type.name === selectedApp}
                className="form-check-input"
                onChange={radioChanged}
                key={i}
              />
              {app.type.name}
            </label>
          </div>
        );
      })}
      <div>
        {apps.filter((app) => {
          return app.type.name === selectedApp;
        })}
      </div>
    </div>
  );
}
