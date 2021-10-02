import './IpLocal.css';
import React, { useState, useEffect } from 'react';
import { IpCardInfo } from '../IpCardInfo/IpCardInfo';
// import { fetchLocalIp } from '../Util/util';

interface IpInfo {
  ip?: string
  version?: string
  city?: string
  region?: string
  region_code?: string
  country_code?: string
  country?: string
  country_name?: string
  continent_code?: string
  country_code_iso3?: string
  country_capital?: string
  country_tld?: string
  in_eu?: boolean
  postal?: string
  latitude?: number
  longitude?: number
  timezone?: string
  utc_offset?: string
  country_calling_code?: string
  currency?: string
  currency_name?: string
  languages?: string
  country_area?: string
  country_population?: string
  asn?: string
  org?: string
}

export const IpLocal: React.FC = () => {
  const [requestLocalIp, setRequestLocalIp] = useState<IpInfo>({});

  // useEffect(() => {
  //   getLocalIpInfo()
  // }, [])

  // const getLocalIpInfo = () => {
  //   return fetchLocalIp()
  //   .then(data => setRequestLocalIp(data))
  // }

  // const saveToStorage = () => {
  //   localStorage.setItem(requestLocalIp.ip, JSON.stringify(requestLocalIp))
  // }
  
  return  (
    <div className="ip-card-info">
      {/* <IpCardInfo ip={requestLocalIp} saveToStorage={saveToStorage}/> */}
      <p>IpLocal</p>
      <IpCardInfo />
    </div>
  )
}

// IpLocal.propTypes = {
//   requestLocalIp: PropTypes.object,
//   getLocalIpInfo: PropTypes.func,
//   saveToStorage: PropTypes.func,
//   IpCardInfo: PropTypes.element
// }

// export default IpLocal;