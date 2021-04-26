const getNavigation = (user) => {

    const userLinks = [
      {
        title: "Home",
        link: '/'
      },
      {
        title: "Watchlist",
        link: "/watchlist"
      },
      {
        title: "Already watched",
        link: "/seenlist"
      },
  
      {
        title: "Logout",
        link: '/logout'
      }
    ]
  
    const guestLinks = [
      {
        title: "Home",
        link: "/"
      },
      {
        title: "Register",
        link: "/register"
      },
      {
        title: "Login",
        link: "/login"
      }
    ]
    
    return user ? userLinks : guestLinks
    
  }
  
  export default getNavigation