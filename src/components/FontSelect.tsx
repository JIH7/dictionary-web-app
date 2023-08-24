import { useState } from "react";

import chevron from "../assets/images/icon-arrow-down.svg"
import "../css/FontSelect.css"

interface FontSelectProps {
  currentFont: string;
  setCurrentFont: Function;
}

function FontSelect(props: FontSelectProps) {
  const { currentFont, setCurrentFont } = props;

  const [expanded, setExpanded] = useState(false);

  return (
    <div onClick={() => setExpanded(!expanded)} aria-label="Drop-down Menu" className="font-select">
      <span>{currentFont}</span>
      <img src={chevron} alt="chevron" />

      <ul className={expanded ? "" : "hidden"}>
        <li className="sans-serif" onClick={() => setCurrentFont("Sans Serif")}>Sans Serif</li>
        <li className="serif" onClick={() => setCurrentFont("Serif")}>Serif</li>
        <li className="mono" onClick={() => setCurrentFont("Mono")}>Mono</li>
      </ul>
    </div>
  )
}

export default FontSelect
