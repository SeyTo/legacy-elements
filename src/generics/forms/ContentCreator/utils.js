/**
 * Find ref from given array of models. The find is recursive.
 * Algorithm:
 * - iterate through given array primarily to find `__meta.ref`
 *   - if not found then try `container`, then iterate through it
 *   - else check if `_value` is array, then iterate through it
 * Primary assumptions are:
 * - models have `__meta.ref`
 * - models have `_value` that could be array, which can furthur have other similar models
 * - models can also have `_value` that could have other wrapper objects which has atleast `container` that has other models in them.
 * @return model
 */
export const getByRef = function (arr, ref) {
  let model = null
  const iterate = function (arr, ref) {
    if (Array.isArray(arr)) {
      for (let i of arr) {
        if (i.__meta && i.__meta.ref === ref) { // finally finding it
          model = i
          break
        } else if (Array.isArray(i.container)) { // passing through container
          iterate(i.container, ref)
        } else if (Array.isArray(i._value)) { // passing through _value
          iterate(i._value, ref)
        }
      }
    } else console.log('is not array')
  }
  iterate(arr, ref)
  return model
}

/**
 * Finds the container model of a given ref and index of itself in it.
 * @returns { container, modelIndex }
 */
// TODO algorithm incorrect
export const findContainerOfRef = function (arr, ref) {
  let container = null
  let model = null
  const iterate = function (arr, ref) {
    if (Array.isArray(arr)) {
      let index = 0
      for (let i of arr) {
        if (i.__meta && i.__meta.ref === ref) {
          model = index
          break
        } else if (Array.isArray(i.container)) {
          container = i
          iterate(i.container, ref)
        } else if (Array.isArray(i._value)) {
          container = i
          iterate(i._value, ref)
        }
        ++index
      }
    } else console.error('is not array')
  }
  iterate(arr, ref)
  return { container, model }
}

/**
 * Only helps to find direct index of containing model.
 * Does not yet account for one containing { header, container } in model._value.
 */
export const findIndexOfRef = function (arr, ref) {
  let index = 0
  if (!Array.isArray(arr)) return console.error('Given arr is not Array.')
  for (let model of arr) {
    if (model.__meta.ref === ref) return index
    ++index
  }
  return null
}
