import { useEffect } from "react";
import "./Cutting.css";

export default function Cutting({ onNext }) {
  useEffect(() => {
    setTimeout(onNext, 1500);
  }, []);

  return (
    <div className="stage">
      <img src="../assests/cutting_box.png" className="box cutting" />
    </div>
  );
}