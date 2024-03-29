const getNavigation = (isLoggedIn) => {
  const userLinks = [
    
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
      title: "Profile",
      link: "/profile",
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

  return isLoggedIn ? userLinks : guestLinks;
};

export default getNavigation;
