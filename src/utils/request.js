import axios from "axios";
import { message } from 'antd';

export function flickr(tags) {
    console.log('123332')
  return axios({
    method: "get",
    url: "https://www.flickr.com/services/feeds/photos_public.gne",
    params: {
      format: "json",
      // nojsoncallback: true,
      tags
    }
  }).then(data=>{console.log(data);console.log('12311');return data}).catch(e=>{
      console.log(e);
      message.error(e.toString(),1)  ;
  });
}