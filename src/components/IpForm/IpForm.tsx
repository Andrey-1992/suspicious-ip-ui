import './IpForm.css'
import React, { useState } from 'react';
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
  getRequestedIpInfo?: (ipAddress: any, ipFieldInfo: any) => void;
}

export const IpForm: React.FC<Props> = ({getRequestedIpInfo}) => {
  const [ipAddress, setIpAddress] = useState<any>("");
  const [ipField, setIpField] = useState<any>("");
  const ipFieldsContainer = [
  {Name:'Select a field', Value:''}, {Name:'All', Value:'all'}, {Name:'Ip', Value:'ip'}, {Name:'Version', Value:'version'}, 
  {Name:'City', Value:'city'}, {Name:'Region', Value:'region'}, {Name:'Country Name', Value:'country_name'},
  {Name:'Country Code', Value:'country_code'}, {Name:'Country Capital', Value:'country_capital'}, 
  {Name:'Country Calling Code', Value:'country_calling_code'}, {Name:'Country Area', Value:'country_area'},
  {Name:'Country Population', Value:'country_population'}, {Name:'Country Postal', Value:'postal'},
  {Name:'Latitude', Value:'latitude'}, {Name:'Longitude', Value:'longitude'},{Name:'Timezone', Value:'timezone'},
  {Name:'Currency', Value:'currency_name'}, {Name:'Languages', Values:'languages'}, {Name:'ASN', Value:'asn'}, 
  {Name:'Organization', Value:'org'}]

  const searchIp = (event: any): void => {
    // if (ipAddress) {
      event.preventDefault();
      // getRequestedIpInfo(ipAddress, ipField); 
      clearInputs();
    // }
  }

  const clearInputs = () => {
    setIpAddress("");
    setIpField("");
  }

  return (
    <form className="ip-form-component">
      <input
        type="text"
        placeholder="IP Address"
        name="ipAddress"
        value={ipAddress}
        onChange={(event) => setIpAddress(event.target.value)}
      />
      <select onChange={(event) => setIpField(event.target.value)}>
        {ipFieldsContainer.map(list => (
          <option value={list.Value}>
            {list.Name}
          </option>
        ))}
      </select>
      <button onClick={searchIp}>Search </button>
      <p className="form-text">Type an IP Address and select a filter field.</p>
    </form>
  )
}
