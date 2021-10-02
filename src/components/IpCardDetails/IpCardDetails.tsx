import './IpCard.css'
import React from 'react';
import IpCardField from '../IpCardField/IpCardField';
import { IpCardInfo } from '../IpCardInfo/IpCardInfo';

const IpCard: React.FC = ({ip, ipField, ipAddress, saveToStorage}) => {
  if (ipField === "all") {
    return (
      <div className="ip-card-info">
        <IpCardInfo ip={ip} saveToStorage={saveToStorage}/>
      </div>
    )
  } 
  return (
    <IpCardField field={ipField}  ipField={ip[ipField]} ipAddress={ipAddress} saveToStorage={saveToStorage}/>
  )
}
