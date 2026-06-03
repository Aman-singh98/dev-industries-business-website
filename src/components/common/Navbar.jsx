
import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FiHome,
  FiChevronDown,
  FiPackage,
  FiMail,
  FiEye,
  FiMenu,
  FiX,
  FiTool,
  FiArrowRight,
} from "react-icons/fi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { BsLightbulb } from "react-icons/bs";

function Navbar() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const productsRef = useRef(null);
  const location = useLocation();
  const isProductsActive = location.pathname.startsWith("/products");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    const handleClickOutside = (e) => {
      if (productsRef.current && !productsRef.current.contains(e.target)) {
        setProductsOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinkClass =
    "flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-200 relative group";

  const navUnderline =
    "absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left";

  const activeNavClass = "!text-blue-600 [&>span]:scale-x-100";

  const productItems = [
    {
      to: "/products/ot-table",
      icon: <MdOutlineTableRestaurant className="text-xl" />,
      label: "OT Table",
      desc: "Precision operating theatre tables",
      iconBg: "bg-blue-50 text-blue-600",
      hoverText: "hover:text-blue-600",
      accent: "bg-blue-600",
    },
    {
      to: "/products/ot-light",
      icon: <BsLightbulb className="text-lg" />,
      label: "OT Light",
      desc: "High-intensity surgical lighting",
      iconBg: "bg-yellow-50 text-yellow-500",
      hoverText: "hover:text-yellow-600",
      accent: "bg-yellow-500",
    },
    {
      to: "/products/spare-parts",
      icon: <FiTool className="text-lg" />,
      label: "Spare Parts",
      desc: "Genuine replacement components",
      iconBg: "bg-green-50 text-green-600",
      hoverText: "hover:text-green-600",
      accent: "bg-green-600",
    },
    {
      to: "/products/linkan-handset",
      icon: <FiTool className="text-lg" />,
      label: "Linkan Handset",
      desc: "Precision control mechanisms",
      iconBg: "bg-blue-50 text-blue-600",
      hoverText: "hover:text-blue-600",
      accent: "bg-blue-600",
    },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-[68px]">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <img
                src="/images/logo/logo.jpeg"
                alt="Dev Industries Logo"
                className="w-10 h-10 object-contain"
              />
              <div className="leading-none">
                <h2 className="text-blue-600 font-bold text-[1.1rem] lg:text-[1.2rem] tracking-tight font-serif">
                  Dev Industries
                </h2>
                <p className="text-[10px] lg:text-[11px] text-gray-400 tracking-widest uppercase mt-0.5">
                  Hospital Equipment
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">

              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `${navLinkClass} ${isActive ? activeNavClass : ""}`
                }
              >
                <FiHome className="text-base" />
                Home
                <span className={navUnderline} />
              </NavLink>

              <NavLink
                to="/company"
                className={({ isActive }) =>
                  `${navLinkClass} ${isActive ? activeNavClass : ""}`
                }
              >
                <HiOutlineOfficeBuilding className="text-base" />
                Company
                <span className={navUnderline} />
              </NavLink>

              <NavLink
                to="/vision"
                className={({ isActive }) =>
                  `${navLinkClass} ${isActive ? activeNavClass : ""}`
                }
              >
                <FiEye className="text-base" />
                Vision
                <span className={navUnderline} />
              </NavLink>

              {/* Products Dropdown */}
              <div className="relative" ref={productsRef}>
                <button
                  onClick={() => setProductsOpen((o) => !o)}
                  className={`${navLinkClass} ${
                    isProductsActive ? activeNavClass : ""
                  } ${productsOpen ? "!text-blue-600" : ""}`}
                >
                  <FiPackage className="text-base" />
                  Products
                  <FiChevronDown
                    className={`text-sm opacity-60 transition-transform duration-200 ${
                      productsOpen ? "rotate-180" : ""
                    }`}
                  />
                  <span
                    className={`${navUnderline} ${
                      isProductsActive || productsOpen ? "scale-x-100" : ""
                    }`}
                  />
                </button>

                {/* Dropdown */}
                {productsOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 bg-white border border-gray-200 shadow-2xl overflow-hidden z-50">

                    {/* Header */}
                    <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between">
                      <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-gray-400">
                        Our Products
                      </span>
                      <span className="text-[10px] text-blue-600 font-medium">
                        3 Categories
                      </span>
                    </div>

                    {/* Items */}
                    <div className="p-2">
                      {productItems.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={() => setProductsOpen(false)}
                          className={`group flex items-center gap-4 p-3 hover:bg-gray-50 transition-all duration-150 relative overflow-hidden`}
                        >
                          {/* Left accent */}
                          <div className={`absolute left-0 top-0 bottom-0 w-0.5 ${item.accent} scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-top`} />

                          {/* Icon */}
                          <div className={`w-11 h-11 flex items-center justify-center shrink-0 ${item.iconBg} border border-gray-100 group-hover:border-transparent transition-colors duration-150`}>
                            {item.icon}
                          </div>

                          {/* Text */}
                          <div className="flex-1 min-w-0">
                            <p className={`text-sm font-semibold text-gray-900 ${item.hoverText} transition-colors duration-150`}>
                              {item.label}
                            </p>
                            <p className="text-xs text-gray-500 mt-0.5 truncate">
                              {item.desc}
                            </p>
                          </div>

                          {/* Arrow */}
                          <FiArrowRight className="text-gray-300 group-hover:text-gray-500 group-hover:translate-x-1 transition-all duration-150 shrink-0" />
                        </Link>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="px-4 py-3 bg-blue-600 flex items-center justify-between">
                      <span className="text-xs text-blue-100">
                        Browse complete catalogue
                      </span>
                      <Link
                        to="/products"
                        onClick={() => setProductsOpen(false)}
                        className="text-xs text-white font-bold flex items-center gap-1 hover:gap-2 transition-all duration-150"
                      >
                        View All
                        <FiArrowRight className="text-xs" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${navLinkClass} ${isActive ? activeNavClass : ""}`
                }
              >
                <FiMail className="text-base" />
                Contact
                <span className={navUnderline} />
              </NavLink>

            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg px-4 pt-3 pb-6 space-y-1">

            {[
              { to: "/", icon: <FiHome />, label: "Home", end: true },
              { to: "/company", icon: <HiOutlineOfficeBuilding />, label: "Company" },
              { to: "/vision", icon: <FiEye />, label: "Vision" },
            ].map(({ to, icon, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-3 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div
                      className={`w-8 h-8 flex items-center justify-center shrink-0 ${
                        isActive ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {icon}
                    </div>
                    {label}
                  </>
                )}
              </NavLink>
            ))}

            {/* Products Accordion */}
            <div>
              <button
                onClick={() => setMobileProductsOpen((o) => !o)}
                className={`w-full flex items-center justify-between px-3 py-3 text-sm font-medium transition-all duration-200 ${
                  isProductsActive
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                <span className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 flex items-center justify-center shrink-0 ${
                      isProductsActive ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <FiPackage />
                  </div>
                  Products
                </span>
                <FiChevronDown
                  className={`text-sm text-gray-400 transition-transform duration-200 ${
                    mobileProductsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileProductsOpen && (
                <div className="ml-5 pl-4 border-l-2 border-blue-200 mt-1 space-y-1">
                  {productItems.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2.5 text-sm transition-colors duration-150 ${
                          isActive
                            ? "text-blue-600 bg-blue-50 font-medium"
                            : `text-gray-600 ${item.hoverText} hover:bg-gray-50`
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span
                            className={`text-base w-7 h-7 flex items-center justify-center ${
                              isActive ? "bg-blue-100 text-blue-600" : item.iconBg
                            }`}
                          >
                            {item.icon}
                          </span>
                          {item.label}
                        </>
                      )}
                    </NavLink>
                  ))}
                  <Link
                    to="/products"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 px-3 py-2.5 text-xs font-bold text-blue-600 hover:bg-blue-50 transition-colors duration-150"
                  >
                    <FiArrowRight className="text-xs" />
                    View All Products
                  </Link>
                </div>
              )}
            </div>

            <NavLink
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-3 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div
                    className={`w-8 h-8 flex items-center justify-center shrink-0 ${
                      isActive ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <FiMail />
                  </div>
                  Contact
                </>
              )}
            </NavLink>

          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-16 lg:h-[68px]" />
    </>
  );
}

export default Navbar;