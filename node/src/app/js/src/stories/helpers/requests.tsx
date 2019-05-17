export class RequestsActions {
  getCoockie() {
    let str = document.cookie.split("; ");
    let result: any = {};
    for (let i = 0; i < str.length; i++) {
      let cur = str[i].split("=");
      result[cur[0]] = cur[1];
    }
    return result;
  }

  toQueryString = (params: any) => {
    if (!params) {
      return "";
    }

    if (!Object.keys(params).length) {
      return "";
    }

    return (
      "?" +
      Object.keys(params)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
        )
        .join("&")
    );
  };

  postRequest(params: object, url: string) {
    let props: any = {
      method: "post",
      body: JSON.stringify(params)
    };
    if (process.env.NODE_ENV === "development") {
      (props["mode"] = "no-cors"),
        (props["headers"] = {
          "Content-Type": "application/json;charset=UTF-8",
          Accept: "application/json"
        });
    }

    if (process.env.NODE_ENV === "production") {
      props["headers"] = {
        "Content-Type": "application/json;charset=UTF-8",
        Accept: "application/json",
        "X-CSRFToken": this.getCoockie().csrftoken
      };
    }

    return fetch(url, props)
      .then(response => {
        switch (response.status) {
          case 401: {
            return window.location.replace("logout/");
          }
          case 200: {
            return response.json();
          }
        }
      })
      .catch(e => {
        console.log(e);
      });
  }

  getRequest(params: object, url: string) {
    fetch(url + this.toQueryString(params), {
      method: "get",
      credentials: "same-origin"
    })
      .then(response => {
        switch (response.status) {
          case 200:
            return response.json();

          default:
            break;
        }
      })
      .catch(e => {
        console.log(e);
      });
  }
}
