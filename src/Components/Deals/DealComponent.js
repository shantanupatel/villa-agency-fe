const DealComponent = (props) => {
  // console.log(props);

  return (
    <div className="row">
      <div className="col-lg-4">
        <div className="featured-info">
          <div className="row featured-info-item">
            <div className="col-6">Total Flat Space</div>
            <div className="col-6 text-right">
              <h4>{props.data.propertyInfo.flatSpace}</h4>
            </div>
          </div>
          <div className="row featured-info-item">
            <div className="col-6">Floor Number</div>
            <div className="col-6 text-right">
              <h4>{props.data.propertyInfo.floorNumber}</h4>
            </div>
          </div>
          <div className="row featured-info-item">
            <div className="col-6">Number of rooms</div>
            <div className="col-6 text-right">
              <h4>{props.data.propertyInfo.rooms}</h4>
            </div>
          </div>
          <div className="row featured-info-item">
            <div className="col-6">Parking Available</div>
            <div className="col-6 text-right">
              <h4>{props.data.propertyInfo.parkingAvailable}</h4>
            </div>
          </div>
          <div className="row featured-info-item">
            <div className="col-6">Payment Process</div>
            <div className="col-6 text-right">
              <h4>{props.data.propertyInfo.paymentProcess}</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4"></div>

      <div className="col-lg-4">
        <h4>{props.data.propertyDescription.heading}</h4>
        <p>{props.data.propertyDescription.description}</p>
      </div>
    </div>
  );
};

export default DealComponent;
