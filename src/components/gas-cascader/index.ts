type FlattenType = {
  [key in string] : GasOption
}

/**
 * 递归展开
 */
export const flatten = (options: GasOption[]): FlattenType => {
  let map = {};
  for(let item of options) {
    if(item.children?.length) {
      map = { ...map, ...flatten(item.children) }
    } else {
      map[item.value] = item;
    }
  }
  return map;
}