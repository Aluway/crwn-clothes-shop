import { Map, Placemark } from "react-yandex-maps";

import CustomButton from "../../Components/Button/CustomButton";

import "./Contacts.scss";

function Contacts(props) {
  let myMap;

  const handleClick = (loc) => {
    myMap.panTo(loc, { duration: 1300 });
  };

  return (
    <div className="contacts__container">
      <div className="title__wrapper">
        <div className="title__left" />
        <div className="contacts__title">Contacts</div>
        <div className="title__right" />
      </div>
      <div className="locations__container">
        <div className="location__wrapper">
          <h1 className="location__header">Metropolis</h1>
          <div className="location__adress">8 marta St., 149, 6th floor</div>
          <a href="tel:+712345678987" className="location__phone">
            tel: +7 (123) 456-789-87
          </a>
          <a className="location__phone" href="https://github.com/Aluway">
            github: Aluway
          </a>
          <CustomButton
            type={"button"}
            handleClick={() => handleClick([56.807047, 60.612324])}
            buttonClassname={"contacts__button"}
          >
            Show on map
          </CustomButton>
        </div>
        <div className="location__wrapper">
          <h1 className="location__header">Yeltsin Center</h1>
          <div className="location__adress">
            Borisa Yeltsina St., 3, 1st floor
          </div>
          <a href="tel:+798765432123" className="location__phone">
            tel: +7 (987) 654-321-23
          </a>
          <a className="location__phone" href="https://github.com/Aluway">
            github: Aluway
          </a>
          <CustomButton
            type={"button"}
            handleClick={() => handleClick([56.84525, 60.590276])}
            buttonClassname={"contacts__button"}
          >
            Show on map
          </CustomButton>
        </div>
      </div>
      <div className="map__wrapper">
        <Map
          instanceRef={(map) => (myMap = map)}
          className="contacts__map"
          state={{
            center: [56.807047, 60.612324],
            zoom: 16,
          }}
        >
          <Placemark
            geometry={[56.807047, 60.612324]}
            options={{
              preset: "islands#blackDotIconWithCaption",
            }}
          />
          <Placemark
            geometry={[56.84525, 60.590276]}
            options={{
              preset: "islands#blackDotIconWithCaption",
            }}
          />
        </Map>
      </div>
    </div>
  );
}

export default Contacts;
