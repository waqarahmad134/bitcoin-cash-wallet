import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import TableOne from '../../components/Tables/TableOne';
import CardDataStats from '../../components/CardDataStats';
import GetAPI from '../../utilities/GetAPI';
import { FaMoneyBill, FaUser } from 'react-icons/fa';

export default function ECommerce() {
  const { data } = GetAPI('admin/v1/allUsers');
  return (
    <div>
      <DefaultLayout>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5">
          <CardDataStats
            title="Forms Submittion"
            total="132"
          >
            <FaUser/>
          </CardDataStats>
          <CardDataStats
            title="Total BCH Received"
            total="0.002BCH"
          >
       <FaMoneyBill/>
          </CardDataStats>
        </div>
        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          <div className="col-span-12 xl:col-span-12">
            <TableOne data={data?.data?.data} />
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
}
