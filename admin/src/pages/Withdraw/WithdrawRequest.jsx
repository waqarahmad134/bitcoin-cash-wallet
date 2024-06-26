import React from 'react';
import GetAPI from '../../utilities/GetAPI';
import DefaultLayout from '../../layout/DefaultLayout';
import TableThree from '../../components/Tables/TableThree';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { Link, useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import { BASE_URL } from '../../utilities/URL';
import { info_toaster, success_toaster } from '../../utilities/Toaster';

export default function WithdrawRequest() {
  const navigate = useNavigate();
  const { data, reFetch } = GetAPI('earning/v1/getAllWithdrawRequest');
  console.log("🚀 ~ WithdrawRequest ~ data:", data?.data?.history)

  function handleDelete(id) {
    axios.get(BASE_URL + `admin/v1/deletePaymentMethod/${id}`).then((dat) => {
      if (dat?.data?.status === '1') {
        success_toaster(dat?.data?.message);
      } else {
        info_toaster(dat?.data?.message);
      }
      reFetch();
    });
  }

  const handleEdit = (data) => {
    navigate('/edit-payment-method', { state: { data } });
  };
  return (
    <DefaultLayout>
      <Breadcrumb pageName="All Payment Methods" />
      <div className="mb-6">
        {/* <Link
          to={'/add-payment-method'}
          className="py-2.5 px-4 rounded bg-black text-white font-medium border "
        >
          Add Payment Method
        </Link> */}
      </div>
      <div className="flex flex-col gap-10">
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                  <th className="py-4 px-4 font-medium text-black dark:text-white">
                    No #
                  </th>

                  <th className="min-w-[100px] py-4 px-4 font-medium text-black dark:text-white">
                    Amount
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                    Account No
                  </th>

                  <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                    Status
                  </th>
                  <th className="py-4 px-4 font-medium text-black dark:text-white">
                    User Id
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.history?.map((data, key) => (
                  <tr>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">{key + 1}</p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {data?.amount}
                      </p>
                    </td>

                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {data?.accountNo || "No record"}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {data?.status === true ? "True" : "False"}
                      </p>
                    </td>
                    <td className="space-x-3 border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                        {data?.userId}
                      </p>
                      {/* <button
                        onClick={() => handleEdit(paymentMeth)}
                        className="text-black dark:text-white"
                      >
                        <FaEdit size={24} />
                      </button>
                      <button
                        onClick={() => handleDelete(paymentMeth?.id)}
                        className="text-black dark:text-white"
                      >
                        <FaTrash size={22} />
                      </button> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
