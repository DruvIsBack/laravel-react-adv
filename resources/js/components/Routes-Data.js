import HomePage from "./pages/Home";
import Account_LoginPage from "./pages/account/Login";
import Account_RegisterPage from "./pages/account/Register";
import Account_RecoverPage from "./pages/account/Recover";
import Account_LogoutPage from "./pages/account/Logout";
import NotFoundPage from './pages/404'

export default ()=>{
  return (
      [

              {
                  path: '/',
                  component: HomePage,
                  exact: true,
              },
              {
                  path: '/account/login',
                  component: Account_LoginPage,
                  exact: true,
              },
              {
                  path: '/account/register',
                  component: Account_RegisterPage,
                  exact: true,
              },
              {
                  path: '/account/recover',
                  component: Account_RecoverPage,
                  exact: true,
              },
              {
                  path: '/account/logout',
                  component: Account_LogoutPage,
                  exact: true,
              },
              {
                  path: '/404',
                  component: NotFoundPage,
                  exact: true,
              }
          ]
  );
};
