/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged-in users to /settings
 * @type {string[]}
 */
export const authRoutes = ["/login", "/register", "/forgot-password"];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api";

/**
 * Default redirect user role route after login
 * @type {string}
 */
export const DEFAULT_USER_LOGIN_REDIRECT = "/user/dashboard/home";

/**
 * Default redirect  admin role route after login
 * @type {string}
 */
export const DEFAULT_ADMIN_LOGIN_REDIRECT = "/admin/dashboard/home";

/**
 * Routes accessible by admin users
 * @type {string[]}
 */
export const adminRoutes = [
  "/admin/dashboard/home",
  "/admin/dashboard/features",
  "/admin/dashboard/userManagement",
  "/admin/dashboard/settings",
  // Add more admin routes here
];

/**
 * Routes accessible by standard users
 * @type {string[]}
 */
export const userRoutes = [
  "/user/dashboard/home",
  "/user/dashboard/settings",
  "/user/dashboard/logs",
  // Add more user routes here
];
