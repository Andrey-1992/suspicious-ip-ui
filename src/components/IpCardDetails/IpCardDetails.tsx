// import './IpCard.css'
import React from 'react';
import { IpCardField } from '../IpCardField/IpCardField';
import { IpCardInfo } from '../IpCardInfo/IpCardInfo';

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
interface Props {
  ipInfo?: IpInfo;
  ipField?: string
  ipAddress?: string
  saveToStorage?: () => void;
}

export const IpCardDetails: React.FC<Props> = ({ipInfo, ipField, ipAddress, saveToStorage}) => {
  const inFieldInfo = ipInfo;
  console.log('inFieldInfo:', inFieldInfo)

  if (ipField === "all") {
    return (
      <div className="ip-card-info">

        <IpCardInfo ipInfo={ipInfo} saveToStorage={saveToStorage}/>
      </div>
    )
  } 

  // if (ipInfo && ipField) {
  //   return (
  //     // <p>test</p>
  //     // <IpCardField field={ipField}  ipField={ipInfo?.[ipField] ? ipInfo[ipField]: ""} ipAddress={ipAddress} saveToStorage={saveToStorage}/>
  //     // <IpCardField field={ipField}  ipField={ipInfo[ipField]} ipAddress={ipAddress} saveToStorage={saveToStorage}/>
  //     )
  //   }
    return (<h1>Test</h1>)
}
