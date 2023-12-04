import Timer from "../pages/alarm/Timer";
import Settings from "../pages/alarm/Settings";
import {useState, useEffect} from "react";
import SettingsContext from "../pages/alarm/SettingsContext";
import useSound from "use-sound";

function Alarm() {
    
  const [playSound] = useSound('src\pages\alarm\alarme.wav')
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  useEffect(() => {
        localStorage.setItem('react-alarm-data', JSON.stringify(Alarm))
    }, [Alarm])

  return (
    <main className='mainAlarm'>
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}>
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  );
}




export default Alarm;