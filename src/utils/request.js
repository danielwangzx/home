import axios from "axios";
import { message } from 'antd';

export function flickr(tags) {
  return axios({
    method: "get",
    url: "https://www.flickr.com/services/feeds/photos_public.gne",
    params: {
      format: "json",
      nojsoncallback: true,
      tags
    }
  }).catch(e=>{
      console.log(e);
      message.error(e.toString(),1)  ;
  });
}