import { toast } from 'sonner';

const shownToasts = new Set<string>();

export function showErrorToast(message: string) {
  if (shownToasts.has(message)) return;
  shownToasts.add(message);
  toast.error(message, {
    onDismiss: () => shownToasts.delete(message),
    onAutoClose: () => shownToasts.delete(message),
  });
}
