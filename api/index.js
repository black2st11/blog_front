import axios from "axios";

class API {
  constructor(url, returnType) {
    this.host = "https://admin.black2st11.com";
    this.url = url;
    this.returnType = returnType;
  }

  async getData(page = undefined) {
    try {
      let url = this.host + this.url;

      if (page != undefined) {
        url += `?page=${page}`;
      }

      let res = await axios({
        url,
      });
      if (res.status == 200) {
        return res.data;
      }

      return this.returnType;
    } catch (err) {
      return this.returnType;
    }
  }

  async getDetailData(id) {
    try {
      if (id == undefined) {
        return {};
      }
      let url = this.host + this.url + `/${id}`;

      let res = await axios({
        url,
      });

      if (res.status == 200) {
        return res.data;
      }

      return {};
    } catch (e) {
      return {};
    }
  }

  async postData(body) {
    try {
      let res = await axios({
        url: this.host + this.url,
        data: body,
        method: "POST",
      });

      if (res.status < 300) {
        return true;
      }

      return false;
    } catch (err) {
      return false;
    }
  }
}

export const QueAPI = new API("/question", { data: [], total: 1 });
export const PostAPI = new API("/post", { data: [], total: 1 });
export const MeAPI = new API("/me", {});
export const AchAPI = new API("/achievement", []);
export const DunAPI = new API("/dungeon", []);
export const GuiAPI = new API("/career", []);
export const HomeAPI = new API("/main", {});

export async function getPostFile(url) {
  try {
    let res = await axios({
      url,
    });
    return res.data;
  } catch (err) {
    return null;
  }
}
