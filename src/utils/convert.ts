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
};
