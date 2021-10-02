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
      <p className="ip-card-text"><i class="fas fa-code-branch"></i> <b>IP:</b> <i>{ipInfo.ip}</i></p>
      <p className="ip-card-text"><i class="fas fa-atlas"></i> <b>Version:</b> <i>{ipInfo.version}</i></p>
      <p className="ip-card-text"><i class="fas fa-globe-americas"></i> <b>Country Name:</b> <i>{ipInfo.country_name}</i></p>
      <p className="ip-card-text"><i class="fas fa-code"></i> <b>Country Code:</b> <i>{ipInfo.country_code}</i></p>
      <p className="ip-card-text"><i class="fas fa-map-signs"></i> <b>Country Capital:</b> <i>{ipInfo.country_capital}</i></p>
      <p className="ip-card-text"><i class="fas fa-code"></i> <b>Country Calling Code:</b> <i>{ipInfo.country_calling_code}</i></p>
      <p className="ip-card-text"><i class="fas fa-map-pin"></i> <b>Country Area:</b> <i>{ipInfo.country_area}</i></p>
      <p className="ip-card-text"><i class="fas fa-user-friends"></i> <b>Country Population:</b> <i>{ipInfo.country_population}</i></p>
      <p className="ip-card-text"><i class="fab fa-font-awesome-flag"></i> <b>City:</b> <i>{ipInfo.city}</i></p>
      <p className="ip-card-text"><i class="fas fa-map-marked"></i> <b>Region:</b> <i>{ipInfo.region}</i></p>
      <p className="ip-card-text"><i class="fas fa-mail-bulk"></i> <b>Postal:</b> <i>{ipInfo.postal}</i></p>
      <p className="ip-card-text"><i class="fas fa-sort-numeric-up"></i> <b>Latitude:</b> <i>{ipInfo.latitude}</i></p>
      <p className="ip-card-text"><i class="fas fa-sort-numeric-down-alt"></i> <b>Longitude:</b> <i>{ipInfo.longitude}</i></p>
      <p className="ip-card-text"><i class="fas fa-hourglass-half"></i> <b>Timezone:</b> <i>{ipInfo.timezone}</i></p>
      <p className="ip-card-text"><i class="fas fa-money-check-alt"></i> <b>Currency:</b> <i>{ipInfo.currency_name}</i></p>
      <p className="ip-card-text"><i class="fas fa-language"></i> <b>Languages:</b> <i>{ipInfo.languages}</i></p>
      <p className="ip-card-text"><i class="fas fa-barcode"></i> <b>ASN:</b> <i>{ipInfo.asn}</i></p>
      <p className="ip-card-text"><i class="fas fa-sitemap"></i> <b>Organization:</b> <i>{ipInfo.org}</i></p>
      <button className="saved-button" onClick={saveToStorage}>Save <i class="fas fa-hdd"></i></button>
    </div>
  )
}
