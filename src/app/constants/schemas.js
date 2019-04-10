import Yup from 'yup'

// eslint-disable-next-line max-len
const castDefaults = (currentValue, originalValue, schema) => ((typeof originalValue !== 'object' || originalValue === null) ? schema.cast({}) : currentValue)

const cmsModuleDataSchema = Yup.object({
  id: Yup.number(),
  accessGroups: Yup.array().strip(),
  displayPartial: Yup.string().strip(),
  name: Yup.string(),
  moduleId: Yup.number(),
  moduleName: Yup.string(),
  globalFlag: Yup.bool().strip(),
  offlineFlag: Yup.string().strip(),
  templateFlag: Yup.string().strip(),
  fieldsList: Yup.array()
    .of(Yup.object({
      key: Yup.string(),
      order: Yup.number().default(0),
      values: Yup.array().default([])
    })).default([])
})

/* /msvc/v1/pages */
const pageDataSchema = Yup.object().shape({
  id: Yup.number(),
  pageType: Yup.string()
    .strip(),
  internalTitle: Yup.string()
    .strip(),
  externalTitle: Yup.string()
    .default(''),
  dateCreated: Yup.string()
    .strip(),
  dateUpdated: Yup.string()
    .strip(),
  schedule: Yup.string()
    .strip(),
  description: Yup.string(),
  imageUrl: Yup.string(),
  openGraphData: Yup.object({
    title: Yup.string().default(null),
    description: Yup.string(),
    imageUrl: Yup.string().default(null)
  }),
  accessGroups: Yup.array()
    .strip(),
  displayTemplate: Yup.string()
    .strip(),
  information: Yup.string()
    .strip(),
  pageTheme: Yup.string()
    .default('LIGHT'),
  modules: Yup.array()
    .of(cmsModuleDataSchema)
    .default([])
})

export const pageSchema = Yup.object({
  data: pageDataSchema.transform((current, original) => castDefaults(current, original, pageDataSchema))
})


/* /msvc/v1/pages/globalModules */
const globalModulesDataSchema = Yup.object().shape({
  primaryModule: cmsModuleDataSchema,
  secundaryModules:Yup.array()
    .of(cmsModuleDataSchema)
    .default([]),
  footerModule: cmsModuleDataSchema,
  validationMessageModule: cmsModuleDataSchema,
  labelModule: cmsModuleDataSchema,
  generalNotificationModule: cmsModuleDataSchema
})

export const globalModulesSchema = Yup.object({
  // eslint-disable-next-line max-len
  data: globalModulesDataSchema.transform((current, original) => castDefaults(current, original, globalModulesDataSchema))
})


/* /msvc/v1/pages/commonModules */
const commonModulesDataSchema = Yup.object().shape({
  resetPasswordModule: cmsModuleDataSchema,
  signUpModule: cmsModuleDataSchema,
  signInModule: cmsModuleDataSchema,
  generatePasswordModule: cmsModuleDataSchema
})

export const commonModulesSchema = Yup.object({
  // eslint-disable-next-line max-len
  data: commonModulesDataSchema.transform((current, original) => castDefaults(current, original, commonModulesDataSchema))
})

export default {
  pageSchema
}
