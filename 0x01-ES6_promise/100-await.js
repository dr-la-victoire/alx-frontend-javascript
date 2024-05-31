import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let uploadPhotoResponse;
  let createUserResponse;
  try {
    uploadPhotoResponse = await uploadPhoto();
    createUserResponse = await createUser();
  } catch (error) {
    uploadPhotoResponse = null;
    createUserResponse = null;
  }
  const obj = { photo: uploadPhotoResponse, user: createUserResponse };

  return obj;
}
