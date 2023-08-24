import moonImg from "../assets/images/icon-moon.svg"
import "../css/NightModeToggle.css"

interface NightModeToggleProps {
  nightMode: boolean;
  setNightMode: Function;
}

function NightModeToggle(props: NightModeToggleProps) {
  const { nightMode, setNightMode } = props;

  return (
    <div className="nightmode-toggle" onClick={() => setNightMode()}>
      <div className="frame">
        <div className={`toggle ${nightMode ? "active" : ""}`}></div>
      </div>
      <img src={moonImg} alt="moon" />
    </div>
    
  )
}

export default NightModeToggle
