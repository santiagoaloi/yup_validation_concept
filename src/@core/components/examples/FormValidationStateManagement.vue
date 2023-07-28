<template>
  <VForm ref="formRef" v-model="isFormValid" @submit.prevent="welcomeSeekerStore.nextStep()">
    <BasicCard title="Store Validations">
      <VCardTitle> Validation passed: {{ isFormValid }} </VCardTitle>
      <VRow>
        <VCol cols="12">
          <VAutocomplete
            v-model="selectedArrayItems"
            :items="[1, 2, 3, 4, 5, 6]"
            :rules="rules.arrayValidation"
            clearable
            hide-no-data
            hint="max 3 items"
            label="Array Validation"
            multiple
            persistent-hint
          />
        </VCol>
        <VCol cols="12">
          <VAutocomplete
            v-model="selectedObjectItems"
            :items="[{ name: 'harry Potter' }, { name: 'Lord Voldemort' }]"
            :rules="rules.objectValidation"
            clearable
            hide-no-data
            label="Object Validation"
            persistent-hint
            return-object
            item-title="name"
            hint="required"
          />
        </VCol>
      </VRow>
    </BasicCard>
  </VForm>
</template>

<script setup>
let { rules, isFormValid } = storeToRefs(useValidationStore())

const selectedArrayItems = ref([])
const selectedObjectItems = ref([])
</script>
