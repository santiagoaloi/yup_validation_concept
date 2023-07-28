export default {
  // Native Vuetify Components

  VBtn: {
    ripple: false,
    color: 'primary-button'
  },

  VCard: {
    flat: true
  },

  VTextField: {
    hideDetails: 'auto',
    density: 'comfortable',
    variant: 'outlined',
    color: 'field-outline-focus',
    bgColor: 'text-field-background',
    persistentPlaceholder: true
  },

  VAutocomplete: {
    density: 'comfortable',
    variant: 'outlined',
    hideDetails: 'auto',
    color: 'field-outline-focus',
    menuProps: { contentClass: 'autocomplete-list-bg-color', maxHeight: '200' },
    bgColor: 'text-field-background'
  }
}
