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
    hasDropdown: false,
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
      {
        id: 9,
        label: "Residential and C&I Energy Storage Systems (ESS)",
        link: "",
      },
      { id: 10, label: "On / Off-grid Inverters", link: "" },
      { id: 11, label: "Lithium Battery Cell, Modules & Racks", link: "" },
      { id: 12, label: "Solar Components & Accessories", link: "" },
      { id: 13, label: "Customized Sourcing Projects", link: "" },
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
