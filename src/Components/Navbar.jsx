import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Icon,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Input,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const nestedMenuItems = [
  {
    title: "PHYSICAL PROPERTY TESTING EQUIPMENT",
  },
  {
    title: "PULP TESTING EQUIPMENT",
  },
  {
    title: "PACKAGING TESTING EQUIPMENT",
  },
  {
    title: "SURFACE COATING & PRINTABILITY",
  },
  {
    title: "ENVIRONMENTAL TESTING EQUIPMENT",
  },
];

function Products() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openNestedMenu, setOpenNestedMenu] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = nestedMenuItems.map(({ title }, key) => (
    <a href="#" key={key}>
      <Link to="/product">
        {" "}
        <MenuItem className="hover:bg-blue-100 hover:text-blue-600 transition-colors duration-150 px-1 py-2 flex justify-start focus:outline-none focus:ring-0 text-lg">
          {title}
        </MenuItem>
      </Link>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        placement="bottom-start"
        allowHover={true}
        offset={10}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium px-7">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 hover:bg-blue-100 hover:text-blue-600 rounded-md transition-all duration-200 text-xl cursor-pointer"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              PRODUCTS
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-4 w-4 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-4 w-4 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>

        <MenuList className="lg:block bg-white rounded-lg shadow-lg p-4 mt-5 transition-all duration-100 text-lg">
          <Menu
            placement="right-start"
            allowHover
            offset={10}
            open={openNestedMenu}
            handler={setOpenNestedMenu}
          >
            <MenuHandler className="flex items-center justify-between">
              <MenuItem className="hover:bg-blue-100 hover:text-blue-600 rounded-md transition-colors duration-150 py-5 h-auto flex justify-start cursor-pointer">
                LAB TESTING EQUIPMENT
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-4 w-4 transition-transform ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="rounded-lg shadow-lg bg-white ml-1 px-4">
              {renderItems}
            </MenuList>
          </Menu>
          <Link to="/product">
            <MenuItem className="hover:bg-blue-100 hover:text-blue-600 rounded-md transition-colors duration-150 py-2 px-1 h-auto flex justify-start cursor-pointer">
              HANDMADE PAPER MACHINES
            </MenuItem>
          </Link>
          <Link to="/product">
            <MenuItem className="hover:bg-blue-100 hover:text-blue-600 rounded-md transition-colors duration-150 py-2 px-1 h-auto flex justify-start cursor-pointer">
              PRAKRITIK PAINT MACHINES
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          <Menu
            placement="bottom"
            allowHover
            offset={6}
            open={openNestedMenu}
            handler={setOpenNestedMenu}
          >
            <MenuHandler className="flex items-center justify-between">
              <MenuItem className="hover:bg-blue-100 hover:text-blue-600 rounded-md transition-colors duration-150 py-2 px-1 h-auto flex justify-start cursor-pointer">
                LAB TESTING EQUIPMENT
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-4 w-4 transition-transform ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="block rounded-lg shadow-lg bg-white lg:hidden ml-2">
              {renderItems}
            </MenuList>
          </Menu>
          <Link to="/product">
            {" "}
            <MenuItem className="hover:bg-blue-100 hover:text-blue-600 rounded-md transition-colors duration-150 py-2 px-1 h-auto flex justify-start cursor-pointer">
              HANDMADE PAPER MACHINES
            </MenuItem>
          </Link>
          <Link to="/product">
            {" "}
            <MenuItem className="hover:bg-blue-100 hover:text-blue-600 rounded-md transition-colors duration-150 py-2 px-1 h-auto flex justify-start cursor-pointer">
              PRAKRITIK PAINT MACHINES
            </MenuItem>
          </Link>
        </Collapse>
      </div>
    </React.Fragment>
  );
}

function Applications() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openNestedMenu, setOpenNestedMenu] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        placement="bottom-start"
        allowHover={true}
        offset={10}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium px-7">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 hover:bg-blue-100 hover:text-blue-600 rounded-md transition-all duration-200 text-xl cursor-pointer"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              APPLICATIONS
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-4 w-4 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-4 w-4 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>

        <MenuList className="lg:block bg-white rounded-lg shadow-lg p-4 mt-5 transition-all duration-100 text-lg">
          <Link to="/product">
            <MenuItem className="hover:bg-blue-100 hover:text-blue-600 rounded-md transition-colors duration-150 py-2 px-1 h-auto flex justify-start cursor-pointer">
              NEWSPRINT
            </MenuItem>
          </Link>
          <Link to="/product">
            <MenuItem className="hover:bg-blue-100 hover:text-blue-600 rounded-md transition-colors duration-150 py-2 px-1 h-auto flex justify-start cursor-pointer">
              WRITING PRINTING/COPIER
            </MenuItem>
          </Link>
          <Link to="/product">
            <MenuItem className="hover:bg-blue-100 hover:text-blue-600 rounded-md transition-colors duration-150 py-2 px-1 h-auto flex justify-start cursor-pointer">
              DUPLEX AND ART PAPER
            </MenuItem>
          </Link>
          <Link to="/product">
            {" "}
            <MenuItem className="hover:bg-blue-100 hover:text-blue-600 rounded-md transition-colors duration-150 py-2 px-1 h-auto flex justify-start cursor-pointer">
              KRAFT LINER/FLUTING PAPER/SACK
            </MenuItem>
          </Link>
          <Link to="/product">
            <MenuItem className="hover:bg-blue-100 hover:text-blue-600 rounded-md transition-colors duration-150 py-2 px-1 h-auto flex justify-start cursor-pointer">
              CORRUGATED FIBRE BOARD BOX BOARD
            </MenuItem>
          </Link>
          <Link to="/product">
            <MenuItem className="hover:bg-blue-100 hover:text-blue-600 rounded-md transition-colors duration-150 py-2 px-1 h-auto flex justify-start cursor-pointer">
              TISSUE & SOFT MATERIAL
            </MenuItem>
          </Link>
          <Link to="/product">
            <MenuItem className="hover:bg-blue-100 hover:text-blue-600 rounded-md transition-colors duration-150 py-2 px-1 h-auto flex justify-start cursor-pointer">
              PULP TESTING RAW MATERIAL RECYCLED FIBRE
            </MenuItem>
          </Link>
          <Link to="/product">
            <MenuItem className="hover:bg-blue-100 hover:text-blue-600 rounded-md transition-colors duration-150 py-2 px-1 h-auto flex justify-start cursor-pointer">
              PULP TESTING RAW MATERIAL WOOD FIBRE
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          <Link to="/product">
            {" "}
            <MenuItem className="hover:bg-blue-100 hover:text-blue-600 rounded-md transition-colors duration-150 py-2 px-1 h-auto flex justify-start cursor-pointer">
              TISSUE & SOFT MATERIAL
            </MenuItem>
          </Link>
          <Link to="/product">
            {" "}
            <MenuItem className="hover:bg-blue-100 hover:text-blue-600 rounded-md transition-colors duration-150 py-2 px-1 h-auto flex justify-start cursor-pointer">
              PULP TESTING RAW MATERIAL RECYCLED FIBRE
            </MenuItem>
          </Link>
          <Link to="/product">
            {" "}
            <MenuItem className="hover:bg-blue-100 hover:text-blue-600 rounded-md transition-colors duration-150 py-2 px-1 h-auto flex justify-start cursor-pointer">
              PULP TESTING RAW MATERIAL AGRO FIBRE
            </MenuItem>
          </Link>
          <Link to="/product">
            {" "}
            <MenuItem className="hover:bg-blue-100 hover:text-blue-600 rounded-md transition-colors duration-150 py-2 px-1 h-auto flex justify-start cursor-pointer">
              PULP TESTING RAW MATERIAL WOOD FIBRE
            </MenuItem>
          </Link>
          <Link to="/product">
            {" "}
            <MenuItem className="hover:bg-blue-100 hover:text-blue-600 rounded-md transition-colors duration-150 py-2 px-1 h-auto flex justify-start cursor-pointer">
              Items
            </MenuItem>
          </Link>
        </Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mb-6 mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1">
      {/* <AboutUs /> */}
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to="/WhoAreWe">
          <ListItem className="flex items-center gap-2 py-2 pr-4 hover:bg-blue-100 hover:text-blue-600 rounded-md transition-all duration-200 text-xl cursor-pointer text-black px-6">
            ABOUT US
          </ListItem>
        </Link>
      </Typography>
      <Products />
      <Applications />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to="/ServiceAndCalibration">
          <ListItem className="flex items-center gap-2 py-2 pr-4 hover:bg-blue-100 hover:text-blue-600 rounded-md transition-all duration-200 text-xl cursor-pointer text-black px-6">
            SERVICE AND CALIBRATION
          </ListItem>
        </Link>
      </Typography>
    </List>
  );
}

// function NavList() {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSearch = () => {
//     console.log("Searching for:", searchTerm);
//     // Add your search logic here
//   };

//   return (
//     <List className="mb-6 mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1">
//       <Typography
//         as="a"
//         href="#"
//         variant="small"
//         color="blue-gray"
//         className="font-medium"
//       >
//         <Link to="/WhoAreWe">
//           <ListItem className="flex items-center gap-2 py-2 pr-4 hover:bg-blue-100 hover:text-blue-600 rounded-md transition-all duration-200 text-xl cursor-pointer text-black px-6">
//             ABOUT US
//           </ListItem>
//         </Link>
//       </Typography>
//       <Products />
//       <Applications />
//       <Typography
//         as="a"
//         href="#"
//         variant="small"
//         color="blue-gray"
//         className="font-medium"
//       >
//         <Link to="/ServiceAndCalibration">
//           <ListItem className="flex items-center gap-2 py-2 pr-4 hover:bg-blue-100 hover:text-blue-600 rounded-md transition-all duration-200 text-xl cursor-pointer text-black px-6">
//             SERVICE AND CALIBRATION
//           </ListItem>
//         </Link>
//       </Typography>
//       <div className="flex items-center gap-2 py-2 pr-4 lg:ml-auto">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />
//         <Icon
//           name="search"
//           size="lg"
//           className="cursor-pointer text-black hover:text-blue-600"
//           onClick={handleSearch}
//         />
//       </div>
//     </List>
//   );
// }

export function Navbarmenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="sticky z-10 top-0 max-w-screen-3xl px-4 py-6 bg-white shadow-md rounded-lg">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link to="/">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2 text-blue-600 text-xl"
          >
            JANTA ENGINEERING
          </Typography>
        </Link>

        {/* Desktop Nav List */}
        <div className="hidden lg:block">
          <NavList />
        </div>

        {/* Desktop Contact Us Button */}
        <div className="hidden gap-2 lg:flex">
          <Link to="/contact-us">
            <Button size="sm" color="blue" className="text-xl text-black">
              CONTACT US
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>

      {/* Mobile Collapse Menu */}
      <Collapse open={openNav}>
        <div className="flex flex-col w-full gap-2 lg:hidden">
          <NavList /> {/* Add this to ensure NavList is displayed on mobile */}
          <Link to="/contact-us">
            <Button
              size="sm"
              fullWidth
              color="blue"
              className="text-xl text-black"
            >
              CONTACT US
            </Button>
          </Link>
        </div>
      </Collapse>
    </Navbar>
  );
}
