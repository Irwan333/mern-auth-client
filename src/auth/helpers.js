import cookie from "js-cookie";

// memasukkan ke cookie
export const setCookie = (key, value) => {
  if (window !== "undefined") {
    cookie.set(key, value, {
      expires: 1
    });
  }
};

// hapus dari cookie
export const removeCookie = key => {
  if (window !== "undefined") {
    cookie.remove(key, {
      expires: 1
    });
  }
};

// mengambil data dari cookie
export const getCookie = key => {
  if (window !== "undefined") {
    return cookie.get(key);
  }
};

// memasukkan ke localstorage
export const setLocalStorage = (key, value) => {
  if (window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

// hapus dari localstorage
export const removeLocalStorage = key => {
  if (window !== "undefined") {
    localStorage.removeItem(key);
  }
};

// otentikasi user melalui passing data ke cookie dan localstorage saat Signin
export const authenticate = (response, next) => {
  console.log("AUTHENTICATE HELPER ON SIGNIN RESPONSE", response);
  setCookie("token", response.data.token);
  setLocalStorage("user", response.data.user);
  next();
};

// akses informasi user dari localstorage
export const isAuth = () => {
  if (window !== "undefined") {
    const cookieChecked = getCookie("token");
    if (cookieChecked) {
      if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
      } else {
        return false;
      }
    }
  }
};

export const signout = next => {
  removeCookie("token");
  removeLocalStorage("user");
  next();
};

export const updateUser = (response, next) => {
  console.log("UPDATE USER IN LOCALSTORAGE HELPERS", response);
  if (typeof window !== "undefined") {
    let auth = JSON.parse(localStorage.getItem("user"));
    auth = response.data;
    localStorage.setItem("user", JSON.stringify(auth));
  }
  next();
};
