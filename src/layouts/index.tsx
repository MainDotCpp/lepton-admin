import { valueTypeMap } from "@/constants/valueType";
import { ProConfigProvider } from "@ant-design/pro-components";
import { Outlet } from "@umijs/max";

const RootLayout = () => {
  return (
    <>
      <ProConfigProvider valueTypeMap={valueTypeMap}>
        <Outlet />
      </ProConfigProvider>
    </>
  );
};

export default RootLayout;
