const React = require('react')
const PropTypes = require('prop-types')
const NextLink = require('next/link').default
const NextRouter = require('next/router').default

const addHash = (href, as, hash) => (
  hash === undefined ? { href, as } : { href: `${href}#${hash}`, as: `${as}#${hash}`, }
)

const HashAwareRouter = ['push', 'replace', 'prefetch'].reduce((result, key) => {
  // eslint-disable-next-line no-param-reassign
  result[key] = (href, as = href, rest = {}) => {
    const updatedPaths = addHash(href, as, rest.hash)
    return NextRouter[key](updatedPaths.href, updatedPaths.as, rest)
  }
  // eslint-disable-next-line no-param-reassign
  result.nextRouter = NextRouter
  return result
}, {})

const HashAwareLink = (props) => {
  const newProps = Object.assign({}, props, addHash(props.href, props.as, props.hash))
  delete newProps.hash
  return React.createElement(NextLink, newProps)
}

HashAwareLink.propTypes = {
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  hash: PropTypes.string,
}

const routes = require('next-routes')({
  Link: HashAwareLink,
  Router: HashAwareRouter,
})

routes
  .add({ name: 'home', pattern: '/:locale/home', page: 'next/home' })
  .add({ name: 'landing', pattern: '/:locale/', page: 'next/landing' })
  .add({ name: 'history', pattern: '/:locale/history', page: 'next/history' })
  .add({ name: 'countries', pattern: '/:locale/countries', page: 'next/countries' })
  .add({ name: 'download', pattern: '/:locale/download', page: 'next/download' })
  // // // .add({ name: 'contact_id', pattern: '/:locale/contact_id', page: 'next/contact_id' })
  .add({ name: 'about', pattern: '/:locale/about/', page: 'next/about' })
  .add({ name: 'how', pattern: '/:locale/how/', page: 'next/how' })
  .add({ name: 'ambassadors', pattern: '/:locale/ambassadors/', page: 'next/ambassadors' })
  .add({ name: '2018', pattern: '/:locale/ibcol/2018/', page: 'next/ibcol/2018' })
  .add({ name: '2019', pattern: '/:locale/ibcol/2019/', page: 'next/ibcol/2019' })
  .add({ name: 'sponsors', pattern: '/:locale/sponsors/', page: 'next/sponsors' })
  .add({ name: 'schedule', pattern: '/:locale/schedule/', page: 'next/schedule' })
  .add({ name: 'winners', pattern: '/:locale/winners/', page: 'next/winners' })
  .add({ name: 'program', pattern: '/:locale/program/', page: 'next/program' })
  .add({ name: 'rules', pattern: '/:locale/rules/', page: 'next/rules' })
  .add({ name: 'supporters', pattern: '/:locale/supporters/', page: 'next/supporters' })
  .add({ name: 'contact', pattern: '/:locale/contact/', page: 'next/contact' })
  .add({ name: 'registration', pattern: '/:locale/registration/', page: 'next/registration' })
  .add({ name: 'registrationLogin', pattern: '/:locale/registration/login/', page: 'next/registration/login' })
  .add({ name: 'registrationVerification', pattern: '/:locale/registration/verify/:verificationCode/:email/', page: 'next/registration/verify' })
  .add({ name: 'adminLogin', pattern: '/:locale/admin/', page: 'next/admin' })
  .add({ name: 'adminVerification', pattern: '/:locale/admin/verify/:verificationCode/:email/', page: 'next/admin/verify' })
  .add({ name: 'adminDashboard', pattern: '/:locale/admin/dashboard/', page: 'next/admin/dashboard' })
  .add({ name: 'join-us', pattern: '/:locale/join-us/', page: 'next/join-us' })

module.exports = routes