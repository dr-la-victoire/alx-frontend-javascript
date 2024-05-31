import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const [uploadPhotoResponse, createUserResponse] = await Promise.all([
      uploadPhoto(),
      createUser(),
    ]);
    const obj = { photo: uploadPhotoResponse, user: createUserResponse };
    return obj;
  } catch (error) {
    const objError = { photo: null, user: null };
    throw new Error(`${error.message}`);
    return objError;
  }
}
