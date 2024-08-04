import convert from "@/utils/convert";
import { useQuery } from "@umijs/max";
import api from "..";
import { DEFAULT_STABLE_TIME } from "@/constants/cache";

export const useSysPackageList = () => {
  const query = useQuery({
    queryKey: ["sysPackageList"],
    queryFn: () => api.sysPackage.list({}),
    staleTime: DEFAULT_STABLE_TIME,
  });

  const sysPackageOptions: any[] = convert.convertOptions(query.data || [], {
    label: "name",
    value: "id",
  });

  const sysPackageEnums = convert.convertEnums(query.data || [], {
    value: "id",
    label: (it: any) => ({text:it.name}),
  });

  return {
    ...query,
    sysPackageOptions,
    sysPackageEnums,
  };
};
