import _ from "lodash";
export function camelCaseDeep(anything) {
  const thing = _.cloneDeep(anything);

  if (_.isEmpty(thing) || (!_.isObject(thing) && !_.isArray(thing))) {
    return thing;
  }

  if (_.isArray(thing)) {
    const arr = thing;
    return arr.map((el) => camelCaseDeep(el));
  }

  // thing can be only not empty object here
  const objWithMappedKeys = _.mapKeys(thing, (value, key) =>
    _.camelCase(key)
  );
  const objWithMappedValues = _.mapValues(
    objWithMappedKeys,
    (value) => camelCaseDeep(value)
  );

  return objWithMappedValues;
}

export const areDeeplyEqual = (obj1, obj2) => {
  if (obj1 === obj2) return true;

  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    const sortedObj1 = [...obj1].sort((a, b) => a.id - b.id);
    const sortedObj2 = [...obj2].sort((a, b) => a.id - b.id);

    if (sortedObj1.length !== sortedObj2.length) return false;

    return sortedObj1.every((elem, index) => {
      return areDeeplyEqual(elem, sortedObj2[index]);
    });
  }

  if (
    typeof obj1 === "object" &&
    typeof obj2 === "object" &&
    obj1 !== null &&
    obj2 !== null
  ) {
    if (Array.isArray(obj1) || Array.isArray(obj2)) return false;

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (
      keys1.length !== keys2.length ||
      !keys1.every((key) => keys2.includes(key))
    )
      return false;

    for (let key in obj1) {
      let isEqual = areDeeplyEqual(obj1[key], obj2[key]);
      if (!isEqual) {
        return false;
      }
    }

    return true;
  }

  return false;
};
