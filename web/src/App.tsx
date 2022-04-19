import { AuthProvider } from '@redwoodjs/auth'
import { Auth0Client } from '@auth0/auth0-spa-js'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import mainTheme from 'src/themes/mainTheme'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

const auth0 = new Auth0Client({
  domain: process.env.AUTH0_DOMAIN,
  client_id: process.env.AUTH0_CLIENT_ID,
  redirect_uri: process.env.AUTH0_REDIRECT_URI,

  // ** NOTE ** Storing tokens in browser local storage provides persistence across page refreshes and browser tabs.
  // However, if an attacker can achieve running JavaScript in the SPA using a cross-site scripting (XSS) attack,
  // they can retrieve the tokens stored in local storage.
  // https://auth0.com/docs/libraries/auth0-spa-js#change-storage-options
  cacheLocation: 'localstorage',
  audience: process.env.AUTH0_AUDIENCE,

  // @MARK: useRefreshTokens is required for automatically extending sessions
  // beyond that set in the initial JWT expiration.
  //
  // @MARK: https://auth0.com/docs/tokens/refresh-tokens
  // useRefreshTokens: true,
})

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <AuthProvider client={auth0} type="auth0">
        <ColorModeScript />
        <ChakraProvider theme={mainTheme}>
          <RedwoodApolloProvider>
            <Routes />
          </RedwoodApolloProvider>
        </ChakraProvider>
      </AuthProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
