// Router exports - Centralized exports for react-router-dom
// Import these from here instead of directly from 'react-router-dom'

// Components
export {
  BrowserRouter,
  HashRouter,
  MemoryRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  Router,
  RouterProvider,
  NavLink,
  Link,
  Await,
  isRouteErrorResponse,
  useRoutes,
  createRoutesFromElements,
} from 'react-router-dom';

// Hooks
export {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
  useLinkClickHandler,
  useHref,
  useMatch,
  useResolvedPath,
  useRouteError,
  useAsyncValue,
  useAsyncError,
} from 'react-router-dom';

// Data APIs (may not be available in all versions)
export {
  createBrowserRouter,
  createHashRouter,
  createMemoryRouter,
} from 'react-router-dom';

// Type exports
export type {
  ActionFunction,
  ActionFunctionArgs,
  LoaderFunction,
  LoaderFunctionArgs,
  NavigateOptions,
  Location,
  Path,
  To,
  RouteObject,
  RouteMatch,
  RouterProviderProps,
  RoutesProps,
  RouteProps,
  Navigator,
  NavigateFunction,
} from 'react-router-dom';
