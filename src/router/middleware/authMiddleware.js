const isLoggedIn = () => !!window.localStorage.getItem("logged-in")

const authMiddleware = async ({ /* to, from to,*/ redirect }) => {
  if (!isLoggedIn()) {
    redirect({
      name: "login",
    });
  }
};

export default authMiddleware;