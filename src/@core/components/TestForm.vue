<template>
  <VForm v-model="validated" @submit.prevent="submitForm()">
    <VRow>
      <VCol v-for="field in fields" :key="field.label" cols="12">
        <Component
          :is="field.component"
          v-model="field.model"
          :label="field.label"
          :rules="field.rules"
          class="my-1"
        />
      </VCol>
      <VCol class="text-end">
        <VBtn color="save-button" type="submit">Validate</VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>

<script setup>
import { VTextField } from 'vuetify/components/VTextField'

const validated = ref(false)

const rules = {
  email: [
    (value) => {
      try {
        Yup.string()
          .required('We need your email...')
          .email('The email is invalid')
          .validateSync(value)
        return true
      } catch (error) {
        return error.message
      }
    }
  ],
  name: [
    (value) => {
      try {
        Yup.string().required('We need your name...').validateSync(value)
        return true
      } catch (error) {
        return error.message
      }
    }
  ]
}

const fields = reactive([
  {
    label: 'Name',
    model: '',
    rules: rules.name,
    component: markRaw(VTextField)
  },
  {
    label: 'Email',
    model: '',
    rules: rules.email,
    component: markRaw(VTextField)
  }
])

function submitForm() {
  if (!validated.value) return
  alert('form validation passed.')
}
</script>
