import { getByRef } from '@/generics/forms/ContentCreator/utils'

/**
 * Store for ContentCreator
 */
export default {
  namespaced: true,
  state: {
    /**
     * Array of selected refs. [ ref1, ref2 ]. Mainly two selected are stored. at 1 the currently selected and at 0 previous selected.
     */
    selected: [],
    /**
     * Tree storage of models.
     */
    sections: [],
    toolbar: {
      ref: ''
    }
  },
  getters: {
    /**
     * Get selected model's ref.
     */
    getSelected (state) {
      return state.selected.length > 0 ? state.selected[state.selected.length - 1] : null
    }
  },
  mutations: {
    resetSelection (state, ref) {
      console.log('ressetting')
      state.selected = []
    },

    setSelected (state, ref) {
      state.selected.push(ref)
      if (state.selected.length > 2) state.selected.shift()
    },

    /**
     * Push a new mode to any given node in model tree. That node must a ContainerComponent(i.e. _value = []).
     * Name of component is defined based on the model name. e.g. 'Section' will be 'FormSection'. So all component names should begin with 'Form' and should be in Pascal case.
     * @param node: { ref: String, target: Model, component: String } either ref or target should be present. target represents Model if you already have one
     * @param model class of model (Section, Tab, Paragraph etc.)
     */
    pushComponent (state, { ref, model }) {
      if (!model.__meta) model.__meta = {}
      // create a random ref name
      model.__meta.ref = model.constructor.name + Date.now()
      // set FormModel with just string, hope that vue will find the component
      model.__meta.component = 'Form' + model.constructor.name
      if (!ref) {
        // no target specified, appending to root
        console.log('no target specified appending to original')
        state.sections.push(model)
        return
      } else {
        // find model by given ref
        const _model = getByRef(state.sections, ref)
        if (!_model) throw Error(`Cannot find model by ${JSON.stringify(ref)}`)
        if (!Array.isArray(_model._value)) throw Error(`${_model} is not a container component.`)
        else _model._value.push(model)
      }
    },
    /**
     * Push a model directly into another model. Along with proper __meta data.
     *
     */
    pushToModel (state, { container, model }) {
      if (!model.__meta) model.__meta = {}
      model.__meta.ref = model.constructor.name + Date.now()
      model.__meta.component = 'Form' + model.constructor.name
      if (Array.isArray(container)) {
        container.push(model)
      } else {
        container._value.push(model)
      }
    }
  }
}
