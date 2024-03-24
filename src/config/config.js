const conf = {
  appwriteUrl: String(process.env.REACT_APP_APPWRITE_URL),
  projectId: String(process.env.REACT_APP_APPWRITE_PROJECTID),
  databaseId: String(process.env.REACT_APP_APPWRITE_DATABASEID),
  collectionId: String(process.env.REACT_APP_APPWRITE_COLLECTIONID),
  bucketID: String(process.env.REACT_APP_APPWRITE_BUCKETID),
  mceKey: String(process.env.REACT_APP_TINYMCE_API_KEY),
};
export default conf;
