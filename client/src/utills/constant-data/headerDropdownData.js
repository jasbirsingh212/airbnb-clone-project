export const otherDropdownLinksData = [
  {
    id: 2,
    link: "Airbnb your home",
    path: "",
  },
  {
    id: 3,
    link: "help",
    path: "",
  },
];

export const userDropdownWithAuthLinksData = [
  {
    id: 0,
    link: "Log Out",
    path: "",
    className: "font-bold border-b",
  },
  ...otherDropdownLinksData,
];
export const userDropdownWithoutAuthLinksData = [
  {
    id: 0,
    link: "Log in",
    path: "/login",
    className: "font-bold",
  },

  {
    id: 1,
    link: "Sign up",
    path: "/register",
    className: "border-b",
  },

  ...otherDropdownLinksData,
];
