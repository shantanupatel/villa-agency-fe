import "./PropertiesComponent.scss";
import PropertyCardComponent from "./PropertyCardComponent";

const PropertiesComponent = () => {
  const properties = [
    {
      id: 1,
      propertyImage: "",
      propertyType: "Luxury Villa",
      propertyPrice: "$2,264,000",
      propertyName: "18 New Street Miami, OR 97219",
      propertyFeatures: {
        bedrooms: 8,
        bathrooms: 8,
        area: "545 m2",
        floor: "3",
        parking: "6 spots",
      },
    },
    {
      id: 2,
      propertyImage: "",
      propertyType: "Luxury Villa",
      propertyPrice: "$1.180.000",
      propertyName: "54 Mid Street Florida, OR 27001",
      propertyFeatures: {
        bedrooms: 6,
        bathrooms: 5,
        area: "450 m2",
        floor: "3",
        parking: "8 spots",
      },
    },
    {
      id: 3,
      propertyImage: "",
      propertyType: "Luxury Villa",
      propertyPrice: "$1.460.000",
      propertyName: "26 Mid Street Portland, OR 38450",
      propertyFeatures: {
        bedrooms: 5,
        bathrooms: 4,
        area: "225 m2",
        floor: "3",
        parking: "10 spots",
      },
    },
    {
      id: 4,
      propertyImage: "",
      propertyType: "Apartment",
      propertyPrice: "$584.500",
      propertyName: "12 Hope Street Portland, OR 12650",
      propertyFeatures: {
        bedrooms: 4,
        bathrooms: 3,
        area: "125 m2",
        floor: "25th",
        parking: "2 cars",
      },
    },
    {
      id: 5,
      propertyImage: "",
      propertyType: "Penthouse",
      propertyPrice: "$1.180.000",
      propertyName: "34 Hope Street Portland, OR 42680",
      propertyFeatures: {
        bedrooms: 4,
        bathrooms: 4,
        area: "180 m2",
        floor: "38th",
        parking: "2 cars",
      },
    },
  ];

  return (
    <>
      <div className="properties">
        <div className="container">
          <div className="heading offset-2 offset-lg-4 col-8 col-lg-4 text-center">
            <h4>| Properties</h4>
            <h2>We Provide The Best Property You Like</h2>
          </div>

          <div className="row">
            {properties.map((property) => (
              <div className="col-6 col-lg-4" key={property.id}>
                <PropertyCardComponent key={property.id} data={property} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertiesComponent;
