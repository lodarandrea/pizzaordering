export function customFetch(
  url: string,
  callback: (callbackFunc: any) => void,
  errorCallback: (callbackFunc: any) => void
) {
  return fetch(`${process.env.REACT_APP_API_URL}${url}`)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => {
      console.log(error)
      errorCallback(error)
    })
}
