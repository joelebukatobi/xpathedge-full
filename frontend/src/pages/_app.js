// import '../styles/main.scss';
import { AuthCheck } from '@/global//components/AuthCheck';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import '../assets/styles/main.scss';
import store from 'store/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {/* <AuthCheck> */}
      <Component {...pageProps} />
      {/* </AuthCheck> */}
    </Provider>
  );
}

export default MyApp;
