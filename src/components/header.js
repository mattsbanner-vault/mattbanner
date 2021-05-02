import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Disclosure, } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function isCurrent(item, location) {
  return location.pathname === ('/' + item.uri);
}

export default function Header({ location, entry }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          primaryNavigation: craftNavigationGlobalSet {
            items: primaryNavigationItems {
              id
              uri
              title
            }
          }
        }
      `}

      render={data => (
      <Disclosure as="nav">
        {({ open }) => (
        <>
          <div className="max-w-4xl mx-auto px-2 sm:px-4 py-2">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-primary-copy hover:bg-primary-lightest focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/">
                    {entry.slug !== 'home' && <p className="text-xl sm:text-3xl font-bold">Matt Banner</p>}
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {data.primaryNavigation.items.map((item) => (
                      <Link
                        key={item.id}
                        to={`/` + item.uri}
                        className={classNames(
                            isCurrent(item, location) ? 'bg-primary text-primary-copy' : 'text-gray-500 hover:bg-primary-lightest hover:text-primary-copy ',
                          'px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out'
                        )}
                        aria-current={isCurrent(item, location) ? 'page' : undefined}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {data.primaryNavigation.items.map((item) => (
                <Link
                  key={item.id}
                  to={`/` + item.uri}
                  className={classNames(
                      isCurrent(item, location) ? 'bg-primary text-primary-copy' : 'text-gray-500 hover:bg-primary-lightest hover:text-primary-copy',
                    'block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out'
                  )}
                  aria-current={isCurrent(item, location) ? 'page' : undefined}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
      )}
    />
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
