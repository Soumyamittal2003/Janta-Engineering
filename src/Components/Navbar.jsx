import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";

export function Navbar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  const shotcretemachine = [
    {
      title: "Wet shotcrete machine",
    },
    {
      title: "Dry shotcrete machine",
    },
  ];

  const shotcretemachineSpares = [
    {
      title: "Friction Disk",
    },
    {
      title: "Top & Bottom Seal",
    },
    {
      title: "Nozzles",
    },
  ];

  const RoboArmShotcretemachineSpares = [
    {
      title: "CIFA",
    },
    {
      title: "NORMAT",
    },
    {
      title: "SWINGSTATOR",
    },
  ];

  const BoomerSpares = [
    {
      title: "SANDVIK",
    },
    {
      title: "L2D",
    },
  ];

  const GroutingPump = [
    {
      title: "COLAIDAL MIXING PUMP",
    },
    {
      title: "COLAIDAL MIXING AGGITATIOR",
    },
    {
      title: "MAI PUMP {AUTO MIXING}",
    },
    {
      title: "DOUBLE DRUM AGGRTATIOR GROUTING PUMP",
    },
    {
      title: "SINGLE DRUM AGGRTATIOR GROUTING PUMP",
    },
  ];
  const SlurryPump = [
    {
      title: "AAA",
    },
  ];
  const GroutingAsseceries = [
    {
      title: "MACHENICAL PACKER",
    },
    {
      title: "AAAA",
    },
  ];
  const GantryGantrySpares = [
    {
      title: "TURN BUCKLE",
    },
    {
      title: "PINS",
    },
    {
      title: "ELECTRIC VIBRATOR",
    },
    {
      title: "NUMERIC VIBRATOR",
    },
    {
      title: "AIR FLOW LINE",
    },
    {
      title: "TRAVELER GANTRY WHEEL",
    },
    {
      title: "JAMBO WHEEL",
    },
    {
      title: "HYD JACK",
    },
    {
      title: "HYD POWER PACK",
    },
  ];
  const HydraulicRipBindingJack = [
    {
      title: "AAA",
    },
    {
      title: "AAA",
    },
  ];
  const CrusherPlant = [
    {
      title: "CONVEYOR ROLLER",
    },
    {
      title: "CONVEYOR BELT",
    },
    {
      title: "TILL PULLY",
    },
    {
      title: "HEAD PULLY",
    },
    {
      title: "CONVEYOR ROLLER STAND",
    },
  ];
  const BachingPlant = [
    {
      title: "CEMENT FEEDING CONVEYING SCREW",
    },
    {
      title: "HANGER BEARING & SHAFT",
    },
    {
      title: "GEAR BOX & MOTOR ETC",
    },
  ];
  const PneumaticConcretePlacer = [
    {
      title: "AAA",
    },
  ];
  const RoboArmConcretePump = [
    {
      title: "PIPELINE",
    },
    {
      title: "BEND",
    },
    {
      title: "CLAMP",
    },
  ];
  const LoaderExclivator = [
    {
      title: "Bucket",
    },
    {
      title: "Chain",
    },
    {
      title: "Track Roller",
    },
    {
      title: "Bucket",
    },
  ];

  const handleNavigation = (title, type) => {
    const currentPath = location.pathname;
    const currentState = location.state;

    if (currentPath === "/product" && currentState?.title === title) {
      navigate("/temp", { replace: true });
      navigate("/product", { state: { title, type } });
    } else {
      navigate("/product", { state: { title, type } });
    }
  };

  const toggleSearchPopup = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate("/product", { state: { searchQuery } });
      setIsSearchOpen(false);
    }
  };

  return (
    <nav className="sticky z-10 top-0 bg-white shadow-md p-2">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="w-36 h-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center justify-center w-full lg:gap-6 mr-16">
            <Menu>
              <Link to="/WhoAreWe">
                <button className="text-gray-600 hover:text-blue-600 text-lg font-bold">
                  ABOUT US
                </button>
              </Link>
              <MenuHandler>
                <button className="text-gray-600 hover:text-blue-600 text-lg font-bold">
                  PRODUCTS
                  <span className="ml-2 text-sm">▼</span>
                </button>
              </MenuHandler>
              <MenuList
                className="bg-white shadow-lg rounded-md p-2 z-20 mt-5 relative"
                style={{
                  maxHeight: "250px", // Limit the height to fit 5 rows
                  overflowY: "auto", // Enable vertical scrolling
                   // Ensure the dropdown renders properly
                }}
              >
                {/* Main Menu Items */}
                <MenuItem
                  onClick={() =>
                    handleNavigation("HANDMADE PAPER MACHINES", "category")
                  }
                  className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300"
                >
                  <Link>HANDMADE PAPER MACHINES</Link>
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    handleNavigation("PRAKRITIK PAINT MACHINES", "category")
                  }
                  className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300"
                >
                  <Link>PRAKRITIK PAINT MACHINES</Link>
                </MenuItem>

                {/* Example Submenu */}
                <div className="relative group">
                  <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                    SHORTCRETE MACHINE
                  </MenuItem>
                  <div
                    className="absolute left-full top-0 bg-white shadow-lg rounded-md p-2 z-50 hidden group-hover:block"
                    style={{
                      minWidth: "200px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {shotcretemachine.map(({ title }, key) => (
                      <div
                        key={key}
                        onClick={() => handleNavigation(title, "category")}
                        className="text-gray-600 hover:text-blue-600 text-sm p-2 border-b border-gray-300 cursor-pointer"
                      >
                        {title}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative group">
                  <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                    SHORTCRETE MACHINE SPARES
                  </MenuItem>
                  <div className="absolute left-full top-0 bg-white shadow-lg rounded-md p-3 z-30 hidden group-hover:block">
                    {shotcretemachineSpares.map(({ title }, key) => (
                      <div
                        key={key}
                        onClick={() => handleNavigation(title, "category")}
                        className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300 whitespace-nowrap cursor-pointer"
                      >
                        {title}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative group">
                  <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                    ROBO ARM SHORTCRETE MACHINE SPARES
                  </MenuItem>
                  <div className="absolute left-full top-0 bg-white shadow-lg rounded-md p-3 z-30 hidden group-hover:block">
                    {RoboArmShotcretemachineSpares.map(({ title }, key) => (
                      <div
                        key={key}
                        onClick={() => handleNavigation(title, "category")}
                        className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300 whitespace-nowrap cursor-pointer"
                      >
                        {title}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative group">
                  <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                    BOOMER SPARES
                  </MenuItem>
                  <div className="absolute left-full top-0 bg-white shadow-lg rounded-md p-3 z-30 hidden group-hover:block">
                    {BoomerSpares.map(({ title }, key) => (
                      <div
                        key={key}
                        onClick={() => handleNavigation(title, "category")}
                        className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300 whitespace-nowrap cursor-pointer"
                      >
                        {title}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative group">
                  <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                    GROUTING PUMP
                  </MenuItem>
                  <div className="absolute left-full top-0 bg-white shadow-lg rounded-md p-3 z-30 hidden group-hover:block">
                    {GroutingPump.map(({ title }, key) => (
                      <div
                        key={key}
                        onClick={() => handleNavigation(title, "category")}
                        className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300 whitespace-nowrap cursor-pointer"
                      >
                        {title}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative group">
                  <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                    SLURRY PUMP
                  </MenuItem>
                  <div className="absolute left-full top-0 bg-white shadow-lg rounded-md p-3 z-30 hidden group-hover:block">
                    {SlurryPump.map(({ title }, key) => (
                      <div
                        key={key}
                        onClick={() => handleNavigation(title, "category")}
                        className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300 whitespace-nowrap cursor-pointer"
                      >
                        {title}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative group">
                  <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                    GROUTING ASSECERIES
                  </MenuItem>
                  <div className="absolute left-full top-0 bg-white shadow-lg rounded-md p-3 z-30 hidden group-hover:block">
                    {GroutingAsseceries.map(({ title }, key) => (
                      <div
                        key={key}
                        onClick={() => handleNavigation(title, "category")}
                        className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300 whitespace-nowrap cursor-pointer"
                      >
                        {title}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative group">
                  <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                    GANTRY & GANTRY SPARES
                  </MenuItem>
                  <div className="absolute left-full top-0 bg-white shadow-lg rounded-md p-3 z-30 hidden group-hover:block">
                    {GantryGantrySpares.map(({ title }, key) => (
                      <div
                        key={key}
                        onClick={() => handleNavigation(title, "category")}
                        className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300 whitespace-nowrap cursor-pointer"
                      >
                        {title}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative group">
                  <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                    HYDRAULIC RIP BINDING JACK
                  </MenuItem>
                  <div className="absolute left-full top-0 bg-white shadow-lg rounded-md p-3 z-30 hidden group-hover:block">
                    {HydraulicRipBindingJack.map(({ title }, key) => (
                      <div
                        key={key}
                        onClick={() => handleNavigation(title, "category")}
                        className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300 whitespace-nowrap cursor-pointer"
                      >
                        {title}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative group">
                  <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                    CRUSHER PLANT
                  </MenuItem>
                  <div className="absolute left-full top-0 bg-white shadow-lg rounded-md p-3 z-30 hidden group-hover:block">
                    {CrusherPlant.map(({ title }, key) => (
                      <div
                        key={key}
                        onClick={() => handleNavigation(title, "category")}
                        className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300 whitespace-nowrap cursor-pointer"
                      >
                        {title}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative group">
                  <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                    BACHING PLANT
                  </MenuItem>
                  <div className="absolute left-full top-0 bg-white shadow-lg rounded-md p-3 z-30 hidden group-hover:block">
                    {BachingPlant.map(({ title }, key) => (
                      <div
                        key={key}
                        onClick={() => handleNavigation(title, "category")}
                        className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300 whitespace-nowrap cursor-pointer"
                      >
                        {title}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative group">
                  <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                    PNEUMATIC CONCREATE PLACER
                  </MenuItem>
                  <div className="absolute left-full top-0 bg-white shadow-lg rounded-md p-3 z-30 hidden group-hover:block">
                    {PneumaticConcretePlacer.map(({ title }, key) => (
                      <div
                        key={key}
                        onClick={() => handleNavigation(title, "category")}
                        className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300 whitespace-nowrap cursor-pointer"
                      >
                        {title}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative group">
                  <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                    ROBO ARM CONCRETE PUMP
                  </MenuItem>
                  <div className="absolute left-full top-0 bg-white shadow-lg rounded-md p-3 z-30 hidden group-hover:block">
                    {RoboArmConcretePump.map(({ title }, key) => (
                      <div
                        key={key}
                        onClick={() => handleNavigation(title, "category")}
                        className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300 whitespace-nowrap cursor-pointer"
                      >
                        {title}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative group">
                  <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                    LOADER EXCLIVATOR
                  </MenuItem>
                  <div className="absolute left-full top-0 bg-white shadow-lg rounded-md p-3 z-30 hidden group-hover:block">
                    {LoaderExclivator.map(({ title }, key) => (
                      <div
                        key={key}
                        onClick={() => handleNavigation(title, "category")}
                        className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300 whitespace-nowrap cursor-pointer"
                      >
                        {title}
                      </div>
                    ))}
                  </div>
                </div>
              </MenuList>
            </Menu>
            <button
              onClick={toggleSearchPopup}
              className="text-gray-600 hover:text-blue-600 transition duration-150 mt-1 w-1 text-center"
            >
              <MagnifyingGlassIcon className="w-6 h-6 mx-auto" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-900 hover:text-blue-600"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md p-4">
          <Menu>
            <Link to="/WhoAreWe">
              <button className="font-medium text-gray-900 hover:text-blue-600 w-full text-left pl-5 p-3 text-lg">
                ABOUT US
              </button>
            </Link>
            <MenuHandler>
              <button className="font-medium text-gray-900 hover:text-blue-600 w-full text-left pl-5 p-3 text-lg">
                PRODUCTS
              </button>
            </MenuHandler>
            <MenuList className="bg-white shadow-lg rounded-md p-2 z-20">
              <MenuItem
                onClick={() =>
                  handleNavigation("HANDMADE PAPER MACHINES", "category")
                }
                className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300"
              >
                <Link>HANDMADE PAPER MACHINES</Link>
              </MenuItem>
              <MenuItem
                onClick={() =>
                  handleNavigation("PRAKRITIK PAINT MACHINES", "category")
                }
                className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300"
              >
                <Link>PRAKRITIK PAINT MACHINES</Link>
              </MenuItem>
              <div className="relative group">
                <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                  LAB TESTING EQUIPMENT
                </MenuItem>
                <div className="absolute left-full top-0 bg-white shadow-lg rounded-md p-3 z-30 hidden group-hover:block">
                  {nestedMenuItems.map(({ title }, key) => (
                    <div
                      key={key}
                      onClick={() => handleNavigation(title, "category")}
                      className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300 whitespace-nowrap cursor-pointer"
                    >
                      {title}
                    </div>
                  ))}
                </div>
              </div>
            </MenuList>
          </Menu>
          <Link
            to="/contact-us"
            className="block mt-4 px-4 py-2 bg-blue-600 text-white rounded-md text-center hover:bg-blue-700 transition duration-150"
          >
            Contact Us
          </Link>
          <button
            onClick={toggleSearchPopup}
            className="text-gray-600 hover:text-blue-600 transition duration-150 mt-1 w-1 text-center"
          >
            <MagnifyingGlassIcon className="w-6 h-6 mx-auto" />
          </button>
        </div>
      )}

      {/* Search Popup */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setIsSearchOpen(false)}
        >
          <div
            className="bg-white shadow-lg rounded-md p-4 w-80 sm:w-96 relative flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-gray-300 rounded-md w-full p-2 mb-4"
            />
            <button
              onClick={handleSearch}
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-150"
            >
              GO!
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
