import './IpCardField.css'
import React from 'react';
import { Loader } from '../Loader/Loader';

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