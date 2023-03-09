import 'bootstrap/dist/css/bootstrap.min.css';
import PostsList from './components/PostsList';
import { WalletContextProvider } from './contexts/WalletContext';
import { XmtpContextProvider } from './contexts/XmtpContext';

function App() {
  return (
    <WalletContextProvider>
      <XmtpContextProvider>
        <PostsList />
      </XmtpContextProvider>
    </WalletContextProvider>
  );
}

export default App;