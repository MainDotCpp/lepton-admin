export default {
  convertOptions: (data: any[], { label = "label", value = "value" }) => {
    return data.map(item => ({ label: item[label], value: item[value] }));
  },
    convertEnums: <T extends any>(data: T[], { label = (it:T) => it.name, value = "value" }) => {
        return data.reduce((acc, item) => {
        acc[item[value]] = label(item);
        return acc;
        }, {} as Record<any, any>);
    },

  fetchOptions: async <T extends any>(request: (args:any) => Promise<T[]>,{label = "name",value='id'}:any) => {
    const data = await request();
    const l = typeof label === "function" ? label : (it:T) => it[label];
    const v = typeof value === "function" ? value : (it:T) => it[value];
    return data.map(it => ({ label: l(it), value: v(it) }));

  }
};
