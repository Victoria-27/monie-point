import { useEffect, useState } from "react";

import "./App.css";
import LandingPg from "./components/Landingpage";

function App() {
  const [count, setCount] = useState(0);
  const [screen, setScreen] = useState(0);

  const Gridarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 34, 5, 6, 7, 8, 9];
  function transitionGenerator() {
    if (count === 1) {
      return "tansition_one";
    } else if (count === 2) {
      return "tansition_one transition_two";
    } else if (count === 3) {
      return " transition_three";
    } else if (count === 4) {
      return "transition_four ";
    } else if (count === 5) {
      return "transition_five ";
    } else if (count === 6) {
      return "transition_six ";
    } else if (count === 7) {
      return "transition_six ";
    } else if (count === 8) {
      
    }
  }
  const ScreenGEnerator = () => {
    if (screen === 1) {
      return "screen_one";
    } else if (count === 2) {
      return "screen_two";
    } else if (count === 3) {
      return "screen_three";
    } else if (count === 4) {
      return "screen_four ";
    } else if (count === 5) {
      return "screen_five ";
    } else if (count === 5) {
      return "screen_five ";
    }
  };
  useEffect(() => {
    if (screen < 5) {
      play();
    }
  }, [screen]);

  console.log(count);
  const play = () => {
    let i = count;
    const delay = 1000;
    const intervalId = setInterval(() => {
      if (i >= 9) {
        clearInterval(intervalId);
        setScreen((prevScreen) => prevScreen + 1);
      } else {
        setCount(i);
        i++;
      }
    }, delay);
  };

  return (
    <>
      <section
        className={`app ${ScreenGEnerator()}  w-screen h-screen overflow-hidden`}
      >
         
         {count <8 && ( <main className={`table ${transitionGenerator()}  bg-amber-200 w-screen h-screen overflow-hidden`}>
            <div className="genbox">
              <div className="icon_1 text-orange-800 text-5xl">
                {/* {count > 2 ? "↓" : "↑"} */} →
              </div>
              <div className="icon_2  text-orange-200 text-5xl ml-2">
                <span className="px-3">
                  
                </span>
              </div>
            </div>
            <div className="gen2 text-5xl">
              <div className="icon_3 text-orange-800 mr-2">
              <span className="px-3">
                  
                </span>
                
              </div>
              <div className="icon_4">🦷</div>
              <div className="overflow-hidden note_wrapper ">
                <p className="note ">DENTYTECH</p>
              </div>
            </div>

            {Gridarr.map((entries, index) => {
              return <div key={index} className="box transition-three"></div>;
            })}
          </main>)}
       
         {count === 8?
          <LandingPg/>
        :<></>}
      </section>
    </>
  );
}

export default App;