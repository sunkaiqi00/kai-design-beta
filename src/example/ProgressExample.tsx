import React, { useState } from "react";
import Button from "../components/Button";
import Progress from "../components/Progress";

const ProgressExample = () => {
  const [percent, setPercent] = useState(10)

  return (
    <>
      <div>基础进度条 </div>
      <div>status状态 success error warning info; strokeLinecap进度条的样式 round圆角(默认) square方形</div>
      <Progress percent={percent} />
      <Progress percent={50} status="error" />
      <Progress percent={60} status="warning" />
      <Progress percent={70} status="info" strokeLinecap="square" />
      <br />
      <div>
        <Button type="primary" onClick={() => { setPercent(percent + 10) }}> ＋ </Button>&nbsp;
        <Button onClick={() => { setPercent(percent - 10) }}> ＋ </Button>
      </div>
    </>
  )
}
export default ProgressExample;
