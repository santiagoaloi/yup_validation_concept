/*
 * General application related logic.
 */

export const useValidationStore = defineStore('global-validations', {
  state: () => ({
    isFormValid: null,

    // Validation rules for different fields.
    rules: {
      arrayValidation: [
        (value) => {
          try {
            Yup.array()
              .test('maxCount', 'You can choose up to 3 items', (array) => {
                // Throws the error if the array is empty or if it has more than 3 items.
                return array.length && array.length <= 3
              })
              .validateSync(value)
          } catch (error) {
            return error.message
          }
        }
      ],

      // Object validations
      objectValidation: [
        (value) => {
          try {
            Yup.object().required('You need to select a character').nullable().validateSync(value)
            return true
          } catch (error) {
            return error.message
          }
        }
      ],

      // String validations
      homeCountry: [
        (value) => {
          try {
            Yup.string()
              .required('You need to select a home country')
              .nullable()
              .validateSync(value)
            return true
          } catch (error) {
            return error.message
          }
        }
      ]
    }
  })
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useValidationStore, import.meta.hot))
