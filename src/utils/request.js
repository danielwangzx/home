import axios from "axios";
import { message } from 'antd';

export function flickr(tags) {
  return axios({
    method: "get",
    url: `http://localhost:3000/api/pictures/${tags}`,
  }).catch(e=>{
      message.error(e.toString(),1)  ;
  });
}