import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const uploadPhotoResponse = await uploadPhoto();
  const createUserResponse = await createUser();

  const obj = { photo: uploadPhotoResponse, user: createUserResponse };

  return obj;
}
