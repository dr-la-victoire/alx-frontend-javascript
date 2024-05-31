import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    let uploadPhotoResponse = await uploadPhoto();
    let createUserResponse = await createUser();
  } catch (error) {
    uploadPhotoResponse = null;
    createUserResponse = null;
  }

  const obj = { photo: uploadPhotoResponse, user: createUserResponse };

  return obj;
}
