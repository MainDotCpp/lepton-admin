import { useGlobalStore } from "@/stores/global";

/**
 * title: 标题
 * name: 标题
 * @constructor
 */
const Index = () => {
  const globalStore = useGlobalStore(state => state.userInfo);
  return <>{JSON.stringify(globalStore)}</>;
};

export default Index;
