import { GoogleOAuthProvider } from '@react-oauth/google';

const GOOGLE_CLIENT_ID = "963058251776-q8c7p0a2ebju8662ttps5l3see2g3mlr.apps.googleusercontent.com";

export default function GoogleAuthWrapper({ children }) {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      {children}
    </GoogleOAuthProvider>
  );
}
