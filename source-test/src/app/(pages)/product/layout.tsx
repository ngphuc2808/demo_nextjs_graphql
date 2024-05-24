import AppHeader from "@/app/components/global/app.header";

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppHeader />
      {children}
    </>
  );
};

export default ProductLayout;
