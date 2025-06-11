interface MenuItem {
  id: number;
  label: string;
  link: string;
  lastItem?: string;
  hasDropdown?: boolean;
  subMenu?: MenuItem[];
}

const navMenuData: MenuItem[] = [
  {
    id: 1,
    label: "Home",
    link: "/",
    hasDropdown: true,
    subMenu: [
      { id: 7, label: "Home 1", link: "/" },
      { id: 8, label: "Home 2", link: "/home-two" },
    ],
  },
  {
    id: 2,
    hasDropdown: false,
    label: "About Us",
    link: "/about",
  },
  {
    id: 3,
    label: "Products Focus",
    link: "#",
    hasDropdown: true,
    subMenu: [
      { id: 9, label: "Solar Power Equipments", link: "/our-projects" },
      { id: 10, label: "Electric Power Equipments", link: "/projects-details" },
    ],
  },
  {
    id: 4,
    hasDropdown: false,
    label: "Services",
    link: "/services",
  },
  {
    id: 6,
    hasDropdown: false,
    label: "contact",
    link: "/contact",
  },
];

export default navMenuData;
