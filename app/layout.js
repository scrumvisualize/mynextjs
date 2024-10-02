import Navbar from './components/navbar';
import './globals.css';
import { AuthProvider } from './contexts/authContext';

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <AuthProvider>
        <Navbar />
        {children}
        </AuthProvider>
      </body>
    </html>
  );
}

export default RootLayout;

