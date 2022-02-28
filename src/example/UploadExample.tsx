import React from "react";
import Upload from "../components/Upload";

const UploadExample = () => {
  const onProgress = (precent: number, file: File) => {
    console.log(precent);

  }
  const onSuccess = (res: any, file: File) => {
    console.log(res);

  }
  const onError = (err: any, file: File) => {
    console.log(err);

  }
  return (
    <>
      <Upload
        action="/jsonplaceholder/posts/"
        onProgress={onProgress}
        onSuccess={onSuccess}
        onError={onError}
      />
    </>
  )
}

export default UploadExample;
