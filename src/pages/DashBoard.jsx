import React from "react";
import DoughnutChart from "../components/DoughnutChart";
import AreaChart from "../components/AreaChart";

function DashBoard() {
  const insites = [
    {
      id: 1,
      name: "Customers",
      count: 2848,
      icon: "pi pi-users",
      profit: true,
      profitCount: +5.5,
      color: "#A98F7A",
      unit: "",
    },
    {
      id: 2,
      name: "Revenue",
      count: 2344,
      icon: "pi pi-money-bill",
      profit: false,
      profitCount: -2.5,
      color: "#7A9EA9",
      unit: "$",
    },
    {
      id: 3,
      name: "Profit",
      count: 40,
      icon: "pi pi-chart-line",
      profit: true,
      profitCount: +2.5,
      color: "#D7B89F",
      unit: "%",
    },
    {
      id: 4,
      name: "invoices",
      count: 4420,
      icon: "pi pi-file",
      profit: false,
      profitCount: -5.5,
      color: "#9cffd1",
      unit: "",
    },
  ];
const generateRandomStatus = () => {
    const statuses = ['Paid', 'Pending', 'Overdue'];
    return statuses[Math.floor(Math.random() * statuses.length)];
  };
  
  const generateRandomPrice = () => {
    return Math.floor(Math.random() * 451) + 50;
  };
  
  const generateCustomerData = () => {
    const customers = [];
    for (let i = 1; i <= 5; i++) {
      const customer = {
        customerId: i,
        name: `Customer ${i}`,
        items: `Item ${i}`,
        orderDate: `2021-09-0${i}`,
        status: generateRandomStatus(),
        price: generateRandomPrice(),
      };
      customers.push(customer);
    }
    return customers;
  };
  
  const customerData = generateCustomerData();
  

  return (
    <div className="flex flex-col justify-center w-full bg-dash">
      <div className="grid grid-cols-4 gap-8 m-12">
        {insites.map((insite) => (
          <div
            className="p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800 flex"
            key={insite.id}
          >
            <span
              className="relative p-1 rounded-full"
              style={{ backgroundColor: insite.color }}
            ></span>

            <div className="pl-4 flex flex-col">
              <div className="flex items-center justify-between gap-4">
                <p className="ml-0 text-black text-xl dark:text-white pr-8">
                  {insite.name}
                </p>
                <span
                  className="relative px-3 py-2  rounded-xl"
                  style={{ backgroundColor: insite.color }}
                >
                  <i className={`${insite.icon} text-secondary`}></i>
                </span>
              </div>
              <div className="flex flex-col justify-start">
                <p className="my-1 text-2xl font-bold text-left text-secondary dark:text-gray-100">
                  {insite.count}
                  <span className="text-sm">{insite.unit}</span>
                </p>
              </div>
              <div className="flex items-center text-sm text-green-500 pt-4">
                <div
                  className={`text-xs font-bold ${
                    insite.profit ? "text-green-500" : "text-red-500"
                  }`}
                >
                  <i
                    className={`pi ${
                      insite.profit ? "pi-arrow-up" : "pi-arrow-down"
                    }`}
                  ></i>
                  {insite.profitCount}%
                </div>
                <span className="text-gray-400"> &nbsp;Since last week</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-8 mx-12">
        <div className="col-span-2 bg-white rounded-lg">
          <AreaChart />
        </div>
        <div className="w-full bg-white rounded-lg flex flex-row  justify-center items-center">
          <DoughnutChart />
        </div>
      </div>
      <section className="mx-auto w-full max-w-7xl px-12 pt-8 text-text2 pb-8">
        <div className="flex flex-col space-y-4  md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Recent Invoices</h2>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden  md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-white">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>No</span>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Id Customers
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Customer Name
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        items Name
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Order Date
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Prices
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {customerData.map((customer,index) => (
                      <tr key={index}>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">1</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">#000{customer.customerId}</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{customer.name}</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{customer.items}</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{customer.orderDate}</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                        <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                    <span aria-hidden="true" className={`w-full absolute inset-0 ${customer.status === "Paid" ? "bg-green-200" : customer.status === "Pending" ? "bg-yellow-200" : "bg-red-200"} opacity-50 rounded-full`}>
                                    </span>
                                    <span className="relative">
                                        {customer.status}
                                    </span>
                                </span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{customer.price} $</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DashBoard;
