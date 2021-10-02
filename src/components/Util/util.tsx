// export const fetchLocalIp = async () => {
//   try {
//     const response = await fetch('https://ipapi.co/json/')
//     if (!response.ok || response.status === 500) {
//       throw Error('Error fetching local IP Info')
//     }
//     const data = await response.json()
//     return data
//   } catch(err) {
//     console.log(err.message)
//     return err;
//   }
// }

// const fetchAllExternalIp = async (ipAddress: string) => {
//   try {
//     const response = await fetch(`https://ipapi.co/${ipAddress}/json/`)
//     if (!response.ok || response.status === 500) {
//       throw Error('Error fetching local IP Info')
//     }
//     const data = await response.json()
//     // console.log('test fetch all:', data)
//     return data
//   } catch(err) {
//     console.log(err.message)
//     return err;
//   }
// }

// export { fetchLocalIp, fetchAllExternalIp };