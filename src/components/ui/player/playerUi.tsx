import React from "react";
import Svganimation from "./svganimation";
import style from "./player.module.scss";
function MainUi() {
  return (
    <div className={style.mainUi}>
      <div className={style.svg}>
        <Svganimation level={0} />
      </div>
    </div>
  );
}

export default MainUi;
