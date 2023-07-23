import React, { ReactNode } from "react";
import { BiPencil } from "react-icons/bi";
import COLORS from "../Constants/COLORS";

function AcctOverviewRight() {
  return (
    <div className="bg-white rounded-xl flex-[0.75]">
      <div className="p-5 border-b-2 border-gray-200">
        <p className="font-medium text-xl text-grayBlack">Account Overview</p>
      </div>
      <div className="m-4 flex justify-between gap-3 flex-col 804xl:flex-row ">
        <AcctOverviewRightCard>
          <p className="font-medium text-grayBlack mb-3">Justina Anya</p>
          <p className="text-grayBlack text-sm">Justina@cashtoken.ng</p>
        </AcctOverviewRightCard>

        <AcctOverviewRightCard edit={true} headertext="Address Book">
          <p className="font-medium text-grayBlack mb-3">
            Your Default Shipping Address
          </p>
          <p className="text-grayBlack text-sm mb-3">
            No. 177, Moshood Olugbani Street, Off Ligali Ayorinde Street,
            Victoria Island, Lagos
          </p>
          <p className="font-medium text-grayBlack">+23481467890748</p>
        </AcctOverviewRightCard>
      </div>
    </div>
  );
}

export default AcctOverviewRight;

export const AcctOverviewRightCard = ({
  headertext,
  edit = false,
  children,
}: {
  headertext?: string;
  edit?: boolean;
  children: ReactNode;
}) => {
  return (
    <div className="flex-[.47] border-2 border-gray-200 rounded-md pb-3">
      <div className="flex justify-between p-4 border-b border-gray-200">
        <p className="text-grayBlack font-medium">
          {headertext || "Account Details"}
        </p>
        {edit && <BiPencil size={24} color={COLORS.primary} />}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};
