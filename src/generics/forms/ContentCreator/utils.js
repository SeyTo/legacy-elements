/**
 * Find ref from given array of models
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
        if (i.__meta && i.__meta.ref === ref) {
          model = i
          break
        } else if (Array.isArray(i.container)) {
          iterate(i.container, ref)
        } else if (Array.isArray(i._value)) {
          iterate(i._value, ref)
        }
      }
    } else console.log('is not array')
  }
  iterate(arr, ref)
  return model
}
