export const isObjectEmpty = (obj: {}) => {  return Object.keys(obj).length === 0 && obj.constructor === Object;};export const booleafy = (value: boolean) => (value ? 1 : 0);