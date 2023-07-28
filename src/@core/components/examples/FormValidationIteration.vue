<template>
  <VForm ref="formRef" v-model="validated" @submit.prevent="submitForm()">
    <BasicCard title="Iterations">
      <VRow>
        <VCol cols="12" v-for="field in fields">
          <Component
            :placeholder="field.placeholder"
            :key="field.label"
            :is="field.component"
            v-model="field.model"
            :label="field.label"
            :rules="field.rules"
            class="my-1"
          />
        </VCol>
      </VRow>

      <template #actions>
        <div class="d-flex justify-end gap-3">
          <VBtn color="grey" @click="resetFormValidations()">reset validation</VBtn>
          <VBtn color="primary" type="submit">Validate</VBtn>
        </div>
      </template>
    </BasicCard>
  </VForm>
</template>

<script setup>
import { VTextField } from 'vuetify/components/VTextField'

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
    placeholder: 'Harry Poter',
    model: '',
    rules: rules.name,
    component: markRaw(VTextField)
  },
  {
    label: 'Email',
    placeholder: 'harry.potter@hogwarts.com',

    model: '',
    rules: rules.email,
    component: markRaw(VTextField)
  }
])

const formRef = ref()
const validated = ref(false)

function submitForm() {
  if (!validated.value) return
  alert('form validation passed.')
}

async function resetFormValidations() {
  await formRef.value.resetValidation()
}
</script>
