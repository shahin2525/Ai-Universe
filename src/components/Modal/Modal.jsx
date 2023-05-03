import React from "react";

const Modal = (props) => {
  const { features, integrations, id, image_link, tool_name, description } =
    props.singleData;
  console.log(props);
  return (
    <>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="card lg:card-side bg-base-100">
            <div className="card-body">
              <h2 className="card-title">{description}</h2>
              <div className="flex justify-between">
                <div>
                  <h1>Feature</h1>
                  {Object.values(features || {}).map((value) => (
                    <p>{value.feature_name}</p>
                  ))}
                </div>
                <div>
                  <h1>Integration</h1>
                  {integrations &&
                    integrations.map((integration) => <p>{integration}</p>)}
                </div>
              </div>
            </div>

            <figure>
              <img className="w-full h-64" src={image_link && image_link[0]} />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
