import './IpCardInfo.css'
import React from 'react';
import { Loader } from '../Loader/Loader';

interface IpInfo {
  ip?: string
  version?: string
  city?: string
  region?: string
  region_code?: string
  country_code?: string
  country_code_iso3?: string
  country_name?: string
  country_capital?: string
  country_tld?: string
  continent_code?: string
  in_eu?: boolean
  postal?: string
  latitude?: number
  longitude?: number
  timezone?: string
  utc_offset?: string
  currency?: string
  currency_name?: string
  languages?: string
  country_area?: string
  country_population?: string
  country_calling_code?: string
  asn?: string
  org?: string
}
interface Props {
  ipInfo?: IpInfo;
  saveToStorage?: () => void;
}

export const IpCardInfo: React.FC<Props> = ({ipInfo, saveToStorage}) => { 
  if (!ipInfo) {
    return (<Loader />)
  } 
  return (
    <div className="single-card">
      <p className="ip-card-text"><b>IP:</b> <i>{ipInfo.ip}</i></p>
      <p className="ip-card-text"><b>Version:</b> <i>{ipInfo.version}</i></p>
      <p className="ip-card-text"><b>Country Name:</b> <i>{ipInfo.country_name}</i></p>
      <p className="ip-card-text"><b>Country Code:</b> <i>{ipInfo.country_code}</i></p>
      <p className="ip-card-text"><b>Country Capital:</b> <i>{ipInfo.country_capital}</i></p>
      <p className="ip-card-text"><b>Country Calling Code:</b> <i>{ipInfo.country_calling_code}</i></p>
      <p className="ip-card-text"><b>Country Area:</b> <i>{ipInfo.country_area}</i></p>
      <p className="ip-card-text"><b>Country Population:</b> <i>{ipInfo.country_population}</i></p>
      <p className="ip-card-text"><b>City:</b> <i>{ipInfo.city}</i></p>
      <p className="ip-card-text"><b>Region:</b> <i>{ipInfo.region}</i></p>
      <p className="ip-card-text"><b>Postal:</b> <i>{ipInfo.postal}</i></p>
      <p className="ip-card-text"><b>Latitude:</b> <i>{ipInfo.latitude}</i></p>
      <p className="ip-card-text"><b>Longitude:</b> <i>{ipInfo.longitude}</i></p>
      <p className="ip-card-text"><b>Timezone:</b> <i>{ipInfo.timezone}</i></p>
      <p className="ip-card-text"><b>Currency:</b> <i>{ipInfo.currency_name}</i></p>
      <p className="ip-card-text"><b>Languages:</b> <i>{ipInfo.languages}</i></p>
      <p className="ip-card-text"><b>ASN:</b> <i>{ipInfo.asn}</i></p>
      <p className="ip-card-text"><b>Organization:</b> <i>{ipInfo.org}</i></p>
      <button className="saved-button" onClick={saveToStorage}>Save</button>
    </div>
  )
}
