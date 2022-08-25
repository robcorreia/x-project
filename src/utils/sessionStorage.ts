interface User {
  email: string;
  password: string;
}

export function setUserSessionStorage(user: User | null) {
  sessionStorage.setItem("user", JSON.stringify(user));
}

export function getUserSessionStorage() {
  const data = sessionStorage.getItem("user");
  if (!data) {
    return null;
  }
  const userSession = JSON.parse(data);
  return userSession;
}
