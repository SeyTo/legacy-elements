import { getByRef } from '@/generics/forms/ContentCreator/utils'

export default {
  namespaced: true,
  state: {
    /**
     * Array of selected refs. [ ref1, ref2 ]. Mainly two selected are stored. at 0 the currently selected and at 1 previous selected.
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
    getSelected (state) {
      return state.selected[state.selected.length - 1]
    },
    getSelectedModel (state) {
    }
  },
  mutations: {
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
      model.__meta.ref = model.constructor.name + Date.now()
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
    pushToModel (state, { container, model }) {
      console.log('they are')
      console.log(container)
      console.log(model)
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
