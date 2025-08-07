export const sendResponse = (res, statusCode, success, message, data = {}, token) => {
  return res.status(statusCode).json({ success, message, data, token })
}