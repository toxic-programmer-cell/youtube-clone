import { useEffect } from "react";
import { YOUTUBE_VIDEO_API } from "./contents";
import { useDispatch } from "react-redux";
import { setVideo } from "../redux/features/videoSlice";

const useVideoData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getData();

  }, [dispatch]);

  const getData = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEO_API);
      const json = await data.json();
      // console.log(json)
      dispatch(setVideo(json.related_videos));
    } catch (error) {
      console.log("API_ERROR: " ,error)
    }
  };
};

export default useVideoData