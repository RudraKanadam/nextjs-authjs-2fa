import GlobalNavbar from "@/components/global/globalNavbar";
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full items-center justify-center bg-gradient-to-r from-slate-50 to-gray-300">
      <GlobalNavbar />
      {children}
    </div>
  );
};

export default AuthLayout;
