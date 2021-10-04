import './IpSearched.css';
import React, { useState } from 'react';
import { IpCardDetails } from '../IpCardDetails/IpCardDetails';
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
  country_area?: string
  country_population?: string
  asn?: string 
  org?: string 
}

export const IpSearched: React.FC = () => {
  const [requestIpInfo, setRequestIpInfo] = useState<IpInfo>({});
  const [ipAddress, setIpAddress] = useState<string | null>("");
  const [ipField, setIpField] = useState<string | null>("");
  const [completedRequest, setCompletedRequest] = useState(false);

  
  const getRequestedIpInfo = (ipAddress:string, ipFieldInfo:string) => {
    setIpField(ipFieldInfo)
    setIpAddress(ipAddress)


    // if (ipAddress && ipFieldInfo) {
      return fetchAllExternalIp(ipAddress)
      .then(data => setRequestIpInfo(data))
      // .then(setIpField(ipFieldInfo))
      // .then(setIpAddress(ipAddress))
      .then(error => console.log(error))
    // }

    if (!requestIpInfo) {
      setCompletedRequest(true)
    }
  }

  const saveToStorage = () => {
    if (requestIpInfo.ip) {
      localStorage.setItem(requestIpInfo.ip, JSON.stringify(requestIpInfo))
    }
  }
  
  return  (
    <div className="ipInfo">
      <p>IpSearched</p>
      {/* <IpForm getRequestedIpInfo={getRequestedIpInfo} />
       {ipAddress && <IpCard ip={requestIpInfo} ipField={ipField} ipAddress={ipAddress} saveToStorage={saveToStorage} key={ipAddress + Date.now()}/>} */}
       <IpCardDetails ipInfo={requestIpInfo} saveToStorage={saveToStorage}/>
    </div>
  )
}