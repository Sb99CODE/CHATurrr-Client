import moment from "moment";

const fileFormat = (url = "") => {
  const fileExt = url.split(".").pop();
  if (fileExt === "png" || fileExt === "jpg" || fileExt === "jpeg" || fileExt === "gif" ) return "image";
  if (fileExt === "mp4" || fileExt === "webm" || fileExt === "ogg")return "video";
  if (fileExt === "mp3" || fileExt === "wav") return "audio";
  return "file";
};


const transformImage = (url = "", width = 100) => {
  const newUrl = url.replace("upload/", `upload/dpr_auto/w_${width}/`);
  return newUrl;
};


const getOrSaveFromStorage = ({ key, value, get }) => {
  if (get)
    return localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : null;
  else localStorage.setItem(key, JSON.stringify(value));
};

export { fileFormat, transformImage, getOrSaveFromStorage };
