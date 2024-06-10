import { Slide, toast } from 'react-toastify';

type ToastType = 'success' | 'error' | 'info' | 'warning';

export default function useToastify() {
  const showToast = ({
    message,
    type,
  }: {
    message: string;
    type: ToastType;
  }) => {
    toast(message, {
      type,
      autoClose: 700,
      pauseOnHover: true,
      position: toast.POSITION.TOP_RIGHT,
      transition: Slide,
    });
  };

  return [showToast] as const;
}
