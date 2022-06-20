import { normalizers, kebabCase } from './utils';

export const normalizeProps = (props: any) => {
  return Object.keys(props).reduce((acc, curr) => {
    return {
      ...acc,
      [kebabCase(curr)]: normalizeProp(kebabCase(curr), props[curr]),
    };
  }, {});
};

const normalizeProp = (name: string, value: string | number | boolean) => {
  if (typeof value === 'undefined' || value === null) {
    return undefined;
  }

  return normalizers[name] ? normalizers[name]({ name, value }) : value;
};
