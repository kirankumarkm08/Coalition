import React from "react";

const Diagnosticlist = ({ list }) => {
  // const list = ["Problem/Diagnosis", "Description", "Status"];

  return (
    <div>
      <div className="max-w-[766px]  overflow-auto  bg-white rounded-3xl my-10 mx-5   text-[14px] ">
        <h1 className="text-[30px]  font-bold px-10 py-5">Diagnostic List </h1>
        <div className="">
          <div className="">
            <table className="  mx-2 my-2 flex flex-col px-5 ">
              <thead>
                <tr className=" flex justify-between  ">
                  <th>Problem/Diagnosis</th>
                  <th>Description</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(list) &&
                  list.map((i, index) => (
                    <div className="" key={i.id}>
                      {index === 3 && (
                        <div className="">
                          {i?.diagnostic_list?.map((results, index) => (
                            <tr
                              className="flex justify-between items-center border-b-2 py-5"
                              key={index}
                            >
                              <td>{results.name}</td>
                              <td className="flex items-start">
                                {results.description}
                              </td>
                              <td>{results.status}</td>
                            </tr>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diagnosticlist;
