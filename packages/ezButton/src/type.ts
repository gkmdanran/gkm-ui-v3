type MessageType = '' | 'success' | 'warning' | 'info' | 'error';
interface IConfirmObj {
    message: string
    title?: string
    type?: MessageType
    confirmText?: string
    cancelText?: string
}
export type IConfirm = string | IConfirmObj