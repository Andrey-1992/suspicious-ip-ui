import './IpCardField.css'
import React from 'react';
import { Loader } from '../Loader/Loader';
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
  field?: string
  ipField?: string
  ipAddress?: string
  saveToStorage?: () => void;
}

export const IpCardField: React.FC<Props> = ({field, ipField, ipAddress, saveToStorage}) => {
  if (!field) {
    return (<Loader />)
  }
  return (
    <div className="single-card-field">
      <h2 className="header-field">IP Field Requested:</h2>
      <h3>{field}:</h3>
      <h4>{ipField}</h4>
      <h4>IP #: {ipAddress}</h4>
      <button className="saved-button-field" onClick={saveToStorage}>Save</button>
    </div>
  );
}