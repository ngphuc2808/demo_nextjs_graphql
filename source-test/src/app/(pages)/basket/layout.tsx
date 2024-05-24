import SubHeader from "@/app/components/global/app.header.basket";

const BasketLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SubHeader />
      {children}
    </>
  );
};

export default BasketLayout;
