import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { userDropdownWithoutAuthLinksData } from "./../utills/constant-data/headerDropdownData";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ children, data=[], user=null }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button aria-hidden="true">{children}</Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {data?.length > 0 &&
              data.map(({ id, link, path, className='' }) => {
                return (
                  <Menu.Item key={id}>
                    {({ active }) => (
                      <Link
                        to={path}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                            "block px-4 py-3 text-sm",
                          `${className}`
                        )}
                      >
                        {link === "Log Out" ? `${link} ${user?.email}` : link}
                      </Link>
                    )}
                  </Menu.Item>
                );
              })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
