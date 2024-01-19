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
