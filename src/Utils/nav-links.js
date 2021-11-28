const getNavigation = (user) => {
  const userLinks = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Database",
      link: "/database",
    },
    {
      title: "Explore",
      link: "/explore",
    },
    {
      title: "Watchlist",
      link: "/watchlist",
    },
    {
      title: "Watched",
      link: "/seenlist",
    },

    {
      title: "Logout",
      link: "/logout",
    },
  ];

  const guestLinks = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Register",
      link: "/register",
    },
    {
      title: "Login",
      link: "/login",
    },
  ];

  return user ? userLinks : guestLinks;
};

export default getNavigation;
