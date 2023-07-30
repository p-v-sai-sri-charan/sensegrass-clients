import React from "react";

function Finances() {
  return (
    <div className="mx-8">
      <h1 className="text-3xl font-bold py-4"> My Wallet</h1>
      <div className="bg-white h-40 w-72 rounded-lg flex flex-col gap-4">
        <div className="flex flex-row justify-center gap-4 py-4">
          <div className="flex flex-col items-center justify-center">
            <span className="relative px-3 py-2  rounded-xl bg-primary">
              <i
                className={`pi pi-wallet text-secondary`}
                style={{ fontSize: "2rem" }}
              ></i>
            </span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">Current Balance</h1>
            <h1 className="text-xl font-bold">$12,848</h1>
          </div>
        </div>
        <div className="flex flex-row justify-around">
          <button className="bg-secondary text-white px-4 py-2 rounded-lg">
            Withdraw Money <i className="pi pi-arrow-right pl-16"></i>
          </button>
        </div>
      </div>
      <div className="py-4">
        <h1 className="text-3xl font-bold pb-4">Transaction History</h1>
        <div className="bg-white rounded-lg">
          <table className="table-auto w-full ">
            <thead>
              <tr className="bg-white text-secondary text-sm leading-normal rounded-lg border-8 border-dash rounded-full">
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Date</th>
                <th className="py-3 px-6 text-center">Order Id</th>
                <th className="py-3 px-6 text-center">Transaction Type</th>
                <th className="py-3 px-6 text-center">Amount</th>
                <th className="py-3 px-6 text-center">Invoices</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              <tr className="border-8 border-dash rounded-full">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="font-medium">Syeda Sana</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">
                  <div className="flex items-center">
                    <span>10/02/2021</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex items-center justify-center">
                    <span>1</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-center">
                  <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                    Credit
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  <span>$100</span>
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <i className="pi pi-eye"></i>
                    </button>
                    <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <i className="pi pi-download"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Finances;
