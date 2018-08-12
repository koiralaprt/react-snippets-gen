export function asyncConstantsCreator(name) {
  let output = name.replace(/\s/g, '_');
  let out = output.toUpperCase();
  return `
  export const ${out}_START = '${out}_START';
  export const ${out}_SUCCESS = '${out}_SUCCESS';
  export const ${out}_FAILURE = '${out}_FAILURE';
  `;
}

export function constantsCreator(name) {
  let output = name.replace(/\s/g, '_');
  let out = output.toUpperCase();
  return `
  export const ${out} = '${out}';
  `;
}
