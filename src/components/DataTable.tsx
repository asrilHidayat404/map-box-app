"use client";

import { deleteCoordinate } from "@/action/deleteCoordinate";
import { startTransition, useActionState } from "react";

type DataMap = {
  id: number;
  latitude: string;
  longitude: string;
  keterangan: string;
  createdAt: Date;
};

const DataTable = ({ dataMap }: {dataMap: DataMap[]}) => {
  console.log(dataMap);

  const [error, action, loading] = useActionState(deleteCoordinate);

  return (
    <table className="min-w-full table-auto bg-white">
      <thead className="bg-gray-800 text-white">
        <tr>
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
            ID
          </th>
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
            Latitude
          </th>
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
            Longitude
          </th>
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
            Keterangan
          </th>
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
            Dibuat
          </th>
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
            Action
          </th>
        </tr>
      </thead>
      <tbody className="text-gray-700 divide-y divide-gray-200">
        {dataMap?.map((map) => {
          return (
            <tr className="hover:bg-gray-100" key={map.id}>
              <td className="py-3 px-4">{map.id}</td>
              <td className="py-3 px-4">{map.latitude}</td>
              <td className="py-3 px-4">{map.longitude}</td>
              <td className="py-3 px-4">{map.keterangan}</td>
              <td className="py-3 px-4">
                {map.createdAt.toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "long",
                  day: "numeric", 
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit',
                })}
              </td>
              <td className="py-3 px-4">
                <button
                  className="bg-red-500 px-3 py-1 rounded-lg text-white font-semibold"
                  onClick={() => {
                    startTransition(() => {
                      action(map.id);
                    });
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
