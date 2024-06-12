import React, { useState } from 'react';
import GetAPI from '../../utilities/GetAPI';
import DefaultLayout from '../../layout/DefaultLayout';
import TableThree from '../../components/Tables/TableThree';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { Link, useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import { BASE_URL } from '../../utilities/URL';
import { info_toaster, success_toaster } from '../../utilities/Toaster';
import { inputStyle, labelStyle } from '../../utilities/Input';

export default function PaymentMethod() {
  const navigate = useNavigate();
  const [value, setValue] = useState(
    'qqeht8vnwag20yv8dvtcrd4ujx09fwxwsqqqw93w88',
  );
  const { data, reFetch } = GetAPI('admin/v1/getPaymentMethod');

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
      <Breadcrumb pageName="Payment Methods" />
      <div className="flex flex-col gap-10">
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="max-w-full overflow-x-auto">
            <div className="space-y-1 w-full">
              <label className={labelStyle} htmlFor="name">
                Payment Method Name
              </label>
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                name="name"
                id="name"
                placeholder="qqeht8vnwag20yv8dvtcrd4ujx09fwxwsqqqw93w88"
                className={inputStyle}
              />
            </div>
            <div className="flex justify-end gap-x-2 my-4">
              <button
                type="submit"
                className="py-2.5 w-24 rounded font-medium text-sm text-white bg-graydark border"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
