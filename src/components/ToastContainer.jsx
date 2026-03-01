import { useToast } from '../hooks/useToast';
import { Toast } from './Toast';

export const ToastContainer = () => {
  const { toasts } = useToast();
  return (
    <div className="fixed right-2 top-8 z-50 space-y-6">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  );
};
