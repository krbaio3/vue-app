function mapValues (obj: any, f: any) {
  const res: any = {};
  Object.keys(obj).forEach((key) => {
    res[key] = f(obj[key], key);
  });
  return res;
}

export const createNamespace = (module: string, types: any) => {
  const newObj: any = {};
  mapValues(types, (names: any, type: string | number) => {
    newObj[type] = {};
    types[type].forEach((name: string | number) => {
      newObj[type][name] = `${module}:${name}`;
    });
  });
  return newObj;
};

