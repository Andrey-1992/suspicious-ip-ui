import './IpCard.css'
import React from 'react';
// import { IpCardField } from '../IpCardField/IpCardField';
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
  country_area?: number
  country_population?: number
  asn?: string | null
  org?: string | null
}
interface Props {
  ipInfo?: IpInfo;
  ipField?: string
  ipAddress?: string
  saveToStorage?: () => void;
}

export const IpCardDetails: React.FC<Props> = ({ipInfo, ipField, ipAddress, saveToStorage}) => {
  if (ipField === "all") {
    return (
      <div className="ip-card-info">
        <IpCardInfo ipInfo={ipInfo} saveToStorage={saveToStorage}/>
      </div>
    )
  } 
  return (
    <IpCardField field={ipField}  ipField={ip[ipField]} ipAddress={ipAddress} saveToStorage={saveToStorage}/>
  )
}
