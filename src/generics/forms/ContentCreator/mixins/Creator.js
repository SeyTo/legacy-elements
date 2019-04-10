import Paragraph from '../models/Paragraph'
import Tab from '../models/Tab'
import Section from '../models/Section'
import Gallery from '../models/Gallery'

/**
 * Defines this component can create more component and publish to store.
 */
export default {
  data () {
    return {
      elements: {
        'paragraph': {
          component: 'FormParagraph',
          model: Paragraph,
          icon: 'mdi-format-align-justify',
          name: 'Paragraph'
        },
        'tab': {
          component: 'FormTab',
          model: Tab,
          icon: 'mdi-tab',
          name: 'Tab'
        },
        'section': {
          component: 'FormSection',
          model: Section,
          icon: 'mdi-table-column',
          name: 'Section'
        },
        'gallery': {
          component: 'FormGallery',
          model: Gallery,
          icon: 'mdi-image-multiple',
          name: 'Gallery'
        }
      }
    }
  },
  methods: {
    /**
     * Push new model under this model. Since 'Creator' is only used under Toolbar. This method will become deprecated.
     */
    createComponent (element) {
      const Construct = element.model
      this.$store.commit('eContentCreator/pushComponent', { ref: this.model.__meta.ref, model: new Construct() })
    },
    /**
     * Push a given component to given model. Model can also be array to which to directly push to.
     * @param element one of the value from this.elements
     */
    pushToModel (model, element) {
      const Construct = element.model
      this.$store.commit('eContentCreator/pushToModel', { container: model, model: new Construct() })
    }
  }
}
