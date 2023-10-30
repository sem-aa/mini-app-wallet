import { useEffect, useState } from "react";
import { useMainButton, useBackButton, useInitData } from "@tma.js/sdk-react";
import style from "./MainComponent.module.css";

export function MainComponent() {
  const [data, setData] = useState();
  const [count, setCount] = useState(0);

  const initData = useInitData();
  const mainButton = useMainButton();
  const backButton = useBackButton();

  useEffect(() => {
    const onMainButtonClick = () => setCount((prevCount) => prevCount + 1);
    const onBackButtonClick = () => setCount((prevCount) => prevCount - 1);

    mainButton.enable().show();
    mainButton.on("click", onMainButtonClick);
    backButton.on("click", onBackButtonClick);

    return () => {
      mainButton.off("click", onMainButtonClick);
      mainButton.hide();
      backButton.off("click", onBackButtonClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    mainButton.setText(`Count is ${count}`);
  }, [mainButton, count]);

  useEffect(() => {
    if (count === 0) {
      backButton.hide();
      return;
    }
    backButton.show();
  }, [backButton, count]);

  useEffect(() => {
    if (initData) {
      setData(initData);
    }
  }, [initData]);

  return (
    <div className={style.mainComponent}>
      <h1>
        Hello {data?.user.firstName} {data?.user.lastName}
      </h1>
      <div className={style.userInfo}>
        <p className={style.userInfoName}>
          Here is some information that I have about you:
        </p>
        <p className={style.userData}>your hash - {data?.hash}</p>
        <p className={style.userData}>your id - {data?.user.id}</p>
        <p className={style.userData}>your username - {data?.user.username}</p>
      </div>
    </div>
  );
}
