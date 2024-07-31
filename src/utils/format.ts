// 示例方法，没有实际意义
export function trim(str: string) {
  return str.trim();
}

export const convertJoin = {
  convertValue: (value: string[] | string) => Array.isArray(value) ? value : value.split(','),
  transform: (value: string[] | string) => Array.isArray(value) ? value.join(',') : value,
};