import axios from "axios";
import { message } from 'antd';

export function flickr(tags) {
  return axios({
    method: "get",
    url: `/api/pictures/${tags}`,
  }).catch(e=>{
      message.error(e.toString(),1)  ;
  });
}