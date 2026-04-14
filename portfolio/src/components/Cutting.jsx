import { useEffect } from "react";
import "./Cutting.css";
import cuttingBox from "../assests/cutting_box.png";

export default function Cutting({ onNext }) {
  useEffect(() => {
    setTimeout(onNext, 1500);
  }, []);

  return (
    <div className="stage">
      <img src={cuttingBox} className="box cutting" alt="Cutting box" />
    </div>
  );
}
