/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi as api } from "./baseApi"

const injectedRtkApi = api.injectEndpoints({
  endpoints: build => ({
    uploadEstateImage: build.mutation<
      any,
      {
        base64: string
        ownerId: string
        optionId?: string
        type?: string
        extension: string
        description?: string
        name: string
        extraProperties?: string | null
        revisionId?: string | null
      }
    >({
      query: ({ownerId, base64, name, extension}) => ({
        url: `/developer/estate/${ownerId}/upload-document`,
        method: "POST",
        body: {
          base64,
          ownerId: ownerId,
          optionId: "ESTATE_IMAGE",
          type: "ACTUAL_IMAGE",
          extension,
          description: name,
          name,
          extraProperties: null,
          revisionId: null,
        },
      }),
    }),
  }),
  overrideExisting: false,
})

export {injectedRtkApi as uploadImagesApi}
export const {useUploadEstateImageMutation} = injectedRtkApi