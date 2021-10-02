import './IpSearched.css';
import React, { useState } from 'react';
// import IpCard from '../IpCard/IpCard';
// import IpForm from '../IpForm/IpForm';
import { fetchAllExternalIp } from '../Util/util';
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
  country_area?: number
  country_population?: number
  asn?: string | null
  org?: string | null
}

export const IpSearched: React.FC = () => {
  const [requestIpInfo, setRequestIpInfo] = useState<IpInfo>({});
  const [ipAddress, setIpAddress] = useState<string>("");
  const [ipField, setIpField] = useState<string>("");
  const [completedRequest, setCompletedRequest] = useState(false);

  
  const getRequestedIpInfo = (ipAddress:string , ipFieldInfo:string) => {
    return fetchAllExternalIp(ipAddress)
    .then(data => setRequestIpInfo(data))
    .then(setIpField(ipFieldInfo))
    .then(setIpAddress(ipAddress))
    .then(error => console.log(error))

    if (!requestIpInfo) {
      setCompletedRequest(true)
    }
  }

  // const saveToStorage = () => {
  //   localStorage.setItem(requestIpInfo.ip, JSON.stringify(requestIpInfo))
  // }
  
  return  (
    <div className="ipInfo">
      <p>IpSearched</p>
      {/* <IpForm getRequestedIpInfo={getRequestedIpInfo} />
       {ipAddress && <IpCard ip={requestIpInfo} ipField={ipField} ipAddress={ipAddress} saveToStorage={saveToStorage} key={ipAddress + Date.now()}/>} */}
    </div>
  )
}