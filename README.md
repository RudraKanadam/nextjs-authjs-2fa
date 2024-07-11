<h1 align="center">🚀 Next.js Authentication with NextAuth and 2FA 🔐</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-v14-blue" alt="Next.js v14" />
  <img src="https://img.shields.io/badge/NextAuth-v5-brightgreen" alt="NextAuth v5" />
  <img src="https://img.shields.io/badge/license-MIT-green" alt="MIT License" />
  <img src="https://img.shields.io/badge/build-passing-brightgreen" alt="Build Passing" />
</p>

<p align="center">
  This project demonstrates a comprehensive authentication and authorization system using Next.js and NextAuth, featuring credentials and OAuth providers, two-factor authentication (2FA), user roles, and more.
</p>

<h2>✨ Features</h2>

<ul>
  <li><strong>🔑 Credentials Provider</strong>: Custom authentication using email and password.</li>
  <li><strong>🌐 OAuth Provider</strong>: Social login support with Google & GitHub.</li>
  <li><strong>🔄 Forgot Password Functionality</strong>: Easily reset forgotten passwords.</li>
  <li><strong>📧 Email Verification</strong>: Ensure users verify their email addresses.</li>
  <li><strong>🔐 Two-Factor Authentication (2FA)</strong>: Add an extra layer of security.</li>
  <li><strong>👥 User Roles (Admin & User)</strong>: Manage permissions and access levels.</li>
  <li><strong>🔓 Login Component</strong>: Flexible login options with redirect or modal.</li>
  <li><strong>📝 Register Component</strong>: Simple user registration.</li>
  <li><strong>🔒 Forgot Password Component</strong>: Streamlined password recovery.</li>
  <li><strong>✅ Verification Component</strong>: Confirm user actions.</li>
  <li><strong>❗ Error Component</strong>: User-friendly error handling.</li>
  <li><strong>🔘 Login Button</strong>: Quick access to login.</li>
  <li><strong>🚪 Logout Button</strong>: Securely log out users.</li>
  <li><strong>🔐 Role Gate</strong>: Protect routes and components based on user roles.</li>
  <li><strong>🔧 Exploring Next.js Middleware</strong>: Enhance your application with custom middleware.</li>
  <li><strong>🔄 Extending & Exploring next-auth Session</strong>: Advanced session management.</li>
  <li><strong>🔀 Exploring next-auth Callbacks</strong>: Customize authentication flows.</li>
  <li><strong>👤 useCurrentUser Hook</strong>: Fetch the current user effortlessly.</li>
  <li><strong>🛠️ useRole Hook</strong>: Manage user roles with ease.</li>
  <li><strong>👥 currentUser Utility</strong>: Utility for accessing current user data.</li>
  <li><strong>🔐 currentRole Utility</strong>: Utility for accessing current user role.</li>
  <li><strong>🖥️ Example with Server Component</strong>: Demonstration of server-side rendering.</li>
  <li><strong>📱 Example with Client Component</strong>: Demonstration of client-side rendering.</li>
  <li><strong>🔒 Render Content for Admins using RoleGate Component</strong>: Conditional content rendering.</li>
  <li><strong>🔐 Protect API Routes for Admins Only</strong>: Secure API endpoints.</li>
  <li><strong>🔐 Protect Server Actions for Admins Only</strong>: Secure server actions.</li>
  <li><strong>📧 Change Email with New Verification in Settings Page</strong>: Update email with verification.</li>
  <li><strong>🔑 Change Password with Old Password Confirmation in Settings Page</strong>: Secure password change.</li>
  <li><strong>🔐 Enable/Disable Two-Factor Auth in Settings Page</strong>: Manage 2FA settings.</li>
  <li><strong>👥 Change User Role in Settings Page (for Development Purposes Only)</strong>: Adjust roles during development.</li>
  <li><strong>🛡️ Next-auth v5 (Auth.js)</strong>: Secure authentication management with the latest version.</li>
  <li><strong>⚡ Next.js 14 with Server Actions</strong>: Leverage the power of server-side actions for enhanced performance.</li>
</ul>

<h2>📦 Installation</h2>

<details>
  <summary><strong>📥 Clone the repository</strong></summary>

```
git clone https://github.com/your-repo/nextjs-auth.git
cd nextjs-auth
```

</details>
## 📦 Installation

1. **📥 Clone the repository**:

   ```
   git clone https://github.com/your-repo/nextjs-auth.git
   cd nextjs-auth
   ```

2. **📦 Install dependencies**:

   ```
   npm install
   ```

3. **⚙️ Create a `.env.local` file and configure the environment variables**:

   ```
   NEXTAUTH_SECRET=your-secret
   NEXTAUTH_URL=http://localhost:3000

   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret

   GITHUB_CLIENT_ID=your-github-client-id
   GITHUB_CLIENT_SECRET=your-github-client-secret

   EMAIL_SERVER=smtp://your-email-server
   EMAIL_FROM=your-email@example.com
   ```

4. **🚀 Run the development server**:
   ```
   npm run dev
   ```

<h2>🛠️ Usage</h2>
<h3>🔑 Authentication Components</h3>
<ul>
  <li><strong>🔓 Login Component</strong>: Provides a login form with options for credentials or social login.</li>
  <li><strong>📝 Register Component</strong>: Handles user registration with email and password.</li>
  <li><strong>🔒 Forgot Password Component</strong>: Allows users to reset their passwords via email.</li>
  <li><strong>✅ Verification Component</strong>: Manages email verification processes.</li>
  <li><strong>❗ Error Component</strong>: Displays user-friendly error messages.</li>
</ul>
<h3>🔘 Authentication Buttons</h3>
<ul>
  <li><strong>🔑 Login Button</strong>: Initiates the login process.</li>
  <li><strong>🚪 Logout Button</strong>: Logs out the user.</li>
</ul>
<h3>⚙️ Hooks and Utilities</h3>
<ul>
  <li><strong>👤 useCurrentUser Hook</strong>: Fetches the currently authenticated user.</li>
  <li><strong>🛠️ useRole Hook</strong>: Manages user roles and permissions.</li>
  <li><strong>👥 currentUser Utility</strong>: Accesses current user data.</li>
  <li><strong>🔐 currentRole Utility</strong>: Accesses current user role.</li>
</ul>
<h3>🔧 Middleware and Callbacks</h3>
<ul>
  <li><strong>🔧 Middleware</strong>: Enhance your application with custom middleware for authentication.</li>
  <li><strong>🔀 Callbacks</strong>: Customize authentication flows using NextAuth callbacks.</li>
</ul>
<h3>💻 Examples and Security</h3>
<ul>
  <li><strong>🖥️ Server Component Example</strong>: Demonstrates server-side rendering.</li>
  <li><strong>📱 Client Component Example</strong>: Demonstrates client-side rendering.</li>
  <li><strong>🔒 RoleGate Component</strong>: Protects content based on user roles.</li>
  <li><strong>🔐 Protected API Routes</strong>: Secures API endpoints for admins only.</li>
  <li><strong>🔐 Protected Server Actions</strong>: Secures server actions for admins only.</li>
</ul>
<h3>⚙️ Settings and Management</h3>
<ul>
  <li><strong>⚙️ Settings Page</strong>: Manage user settings, including changing email and password.</li>
  <li><strong>🔐 2FA Management</strong>: Enable or disable two-factor authentication.</li>
  <li><strong>👥 Role Management</strong>: Change user roles (for development purposes).</li>
</ul>
<h2>🤝 Contributing</h2>
<p>We welcome contributions! Please read our <a href="CONTRIBUTING.md">contributing guidelines</a> to get started.</p>
<h2>📜 License</h2>
<p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for more details.</p>
<hr/>
<p align="center">
  Made with ❤️ by <a href="https://yourwebsite.com">Your Name</a>
</p>
