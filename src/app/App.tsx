import { RouterProvider } from 'react-router';
import { Toaster } from 'sonner';
import { router } from './routes';

export default function App() {
  return (
    <>
      <Toaster theme="dark" position="top-right" />
      <RouterProvider router={router} />
    </>
  );
}
