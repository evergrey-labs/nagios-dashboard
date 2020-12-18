import React from 'react'
import Clock from 'react-live-clock'
import {
  serviceOk,
  hostOk,
  serviceWarn,
  hostWarn,
  serviceCritical,
  hostCritical,
} from './api'

export default function Card() {
  const {
    serviceOkData,
    isLoadingServiceOkData,
    isErrorServiceOkData,
  } = serviceOk()
  const { hostOkData, isLoadingHostOkData, isErrorHostOkData } = hostOk()
  const {
    serviceWarnData,
    isLoadingServiceWarnData,
    isErrorServiceWarnData,
  } = serviceWarn()
  const {
    hostWarnData,
    isLoadingHostWarnData,
    isErrorHostWarnData,
  } = hostWarn()
  const {
    serviceCriticalData,
    isLoadingServiceCriticalData,
    isErrorServiceCriticalData,
  } = serviceCritical()
  const {
    hostCriticalData,
    isLoadingHostCriticalData,
    isErrorHostCriticalData,
  } = hostCritical()

  return (
    <div className="cards top">
      <div className="card gray">
        <h1>Pacific</h1>
        <h2>
          <Clock timezone={'US/Pacific'} format="h:mm" ticking/>
        </h2>
      </div>
      <div className="card" id="ok">
        <h1>OK</h1>
        {isErrorServiceOkData || isErrorHostOkData ? (
          <h2>Error</h2>
        ) : (
          <div>
            {isLoadingServiceOkData || isLoadingHostOkData ? (
              <div className="loader-container-top">
                <div className='loader'></div>
              </div>
            ) : (
              <h2>{serviceOkData.recordcount + hostOkData.recordcount}</h2>
            )}
          </div>
        )}
      </div>
      <div className="card" id="warning">
        <h1>Warning</h1>
        {isErrorServiceWarnData || isErrorHostWarnData ? (
          <h2>Error</h2>
        ) : (
          <div>
            {isLoadingServiceWarnData || isLoadingHostWarnData ? (
              <div className="loader-container-top">
                <div className='loader'></div>
              </div>
            ) : (
              <h2>{serviceWarnData.recordcount + hostWarnData.recordcount}</h2>
            )}
          </div>
        )}
      </div>
      <div className="card" id="critical">
        <h1>Critical</h1>
        {isErrorServiceCriticalData || isErrorHostCriticalData ? (
          <h2>Error</h2>
        ) : (
          <div>
            {isLoadingServiceCriticalData || isLoadingHostCriticalData ? (
              <div className="loader-container-top">
                <div className='loader'></div>
              </div>
            ) : (
              <h2>
                {serviceCriticalData.recordcount + hostCriticalData.recordcount}
              </h2>
            )}
          </div>
        )}
      </div>
      {/* <div className="card" id="pending">
        <h1>Pending</h1>
        <h2>0</h2>
      </div> */}
      <div className="card gray">
        <h1>Eastern</h1>
        <h2>
          <Clock timezone={'US/Eastern'} format="h:mm" ticking/>
        </h2>
      </div>
    </div>
  )
}