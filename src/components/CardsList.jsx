import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';

const CardsList = () => {
  const flights = useSelector((state) => state.flights);
  // const sorted = useSelector((state) => state.sorted);

  const getFormatedDate = (date) => {
    const options = {
      weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
    };

    return new Date(date).toLocaleString('ru-RU', options);
  };

  const getFormatedTime = (rawMinutes) => {
    const hours = Math.floor(rawMinutes / 60);
    const formattedHours = hours >= 10 ? hours : `0${hours}`;

    const minutes = rawMinutes % 60;
    const formattedMinutes = minutes >= 10 ? minutes : `0${minutes}`;

    return `${formattedHours} ч ${formattedMinutes} мин`;
  };

  return (
    <div className="col h-100" style={{ marginLeft: '250px' }}>
      <div className="d-flex flex-column h-100">
        <div id="messages-box" className="chat-messages overflow-auto mb-3">
          {flights.map((flight) => (
            <div className="card text-center mb-3" key={_.uniqueId()}>
              <div className="card-header text-right bg-primary text-light">
                {flight.price}
                {' '}
                &#8381;
              </div>

              <div className="card-body border border-light">
                <div className="d-flex">
                  <div>
                    {`
                    ${flight.leftLeg.departureCity.caption}, 
                    ${flight.leftLeg.departureAirport.caption}
                    (${flight.leftLeg.departureAirport.uid})
                    `}
                    &rarr;
                    {`
                    ${flight.leftLeg.arrivalCity.caption}, 
                    ${flight.leftLeg.arrivalAirport.caption}
                    (${flight.leftLeg.arrivalAirport.uid})
                    `}
                  </div>
                </div>
              </div>
              <div className="card-body border border-light">
                <div className="d-flex justify-content-between">
                  <div>
                    {getFormatedDate(flight.leftLeg.departureDate)}
                  </div>
                  <div>
                    &#9716;
                    {`
                    ${getFormatedTime(flight.leftLeg.duration)}
                    `}
                  </div>
                  <div>
                    {getFormatedDate(flight.leftLeg.arrivalDate)}
                  </div>
                </div>
              </div>
              <div className="card-body border border-light">
                <div className="d-flex justify-content-between">
                  <div>
                    {`Рейс выполняет: ${flight.leftLeg.airline.caption}`}
                  </div>
                  <div>
                    {flight.leftLeg.transfers !== 0 && `Пересадки: ${flight.leftLeg.transfers}`}
                  </div>
                </div>
              </div>

              <div className="card-body border-top">
                <div className="d-flex">
                  <div>
                    {`
                    ${flight.rightLeg.departureCity.caption}, 
                    ${flight.rightLeg.departureAirport.caption}
                    (${flight.rightLeg.departureAirport.uid})
                    `}
                    &rarr;
                    {`
                    ${flight.rightLeg.arrivalCity.caption}, 
                    ${flight.rightLeg.arrivalAirport.caption}
                    (${flight.rightLeg.arrivalAirport.uid})
                    `}
                  </div>
                </div>
              </div>
              <div className="card-body border border-light">
                <div className="d-flex justify-content-between">
                  <div>
                    {getFormatedDate(flight.rightLeg.departureDate)}
                  </div>
                  <div>
                    &#9716;
                    {`
                    ${getFormatedTime(flight.rightLeg.duration)}
                    `}
                  </div>
                  <div>
                    {getFormatedDate(flight.rightLeg.arrivalDate)}
                  </div>
                </div>
              </div>
              <div className="card-body border border-light">
                <div className="d-flex justify-content-between">
                  <div>
                    {`Рейс выполняет: ${flight.rightLeg.airline.caption}`}
                  </div>
                  <div>
                    {flight.rightLeg.transfers !== 0 && `Пересадки: ${flight.rightLeg.transfers}`}
                  </div>
                </div>
              </div>

              <div className="card-footer bg-warning text-light btn">
                ВЫБРАТЬ
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsList;
