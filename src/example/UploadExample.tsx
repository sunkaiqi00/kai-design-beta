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
  // const beforeUpload = (file: File) => {
  //   console.log(file, file.name, file.size);

  //   if (Math.round(file.size / 1024) > 50) {
  //     alert('file too large')
  //     return false
  //   }
  //   return true
  // }

  const beforeUploadPromise = (file: File) => {
    console.log(file, file.name, file.size);
    const fiels = new File([file], 'modify_name.png', { type: file.type })
    return Promise.resolve(fiels)
  }

  const onChange = (result: any, file: File) => {
    console.log(result, file);
  }
  return (
    // https://www.mocky.io/v2/5cc8019d300000980a055e76
    <>
      <Upload
        action="/jsonplaceholder/posts/"
        onProgress={onProgress}
        onSuccess={onSuccess}
        onError={onError}
        beforeUpload={beforeUploadPromise}
        onChange={onChange}
      />
    </>
  )
}

export default UploadExample;
