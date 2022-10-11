import styled from '@emotion/styled';
import { MainColor1 } from '@utils/constants/themeColor';

export default function UserCoupon({ userCoupon }) {
  return (
    <div className="usercoupon">
      <div className="usercoupon-table">
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {userCoupon.name}
            </th>
            <td class="py-4 px-6">{userCoupon.serialNo}</td>
            <td class="py-4 px-6">{userCoupon.sellerName}</td>
            <td class="py-4 px-6">{userCoupon.type}</td>
            <td class="py-4 px-6">{userCoupon.RateOrAmount}</td>
            <td class="py-4 px-6">{userCoupon.useState}</td>
            <td class="py-4 px-6">{userCoupon.useDate}</td>
            <td class="py-4 px-6">{userCoupon.acquiredDate}</td>
            <td class="py-4 px-6">{userCoupon.validAt}</td>
            <td class="py-4 px-6">{userCoupon.expiresAt}</td>
            <td class="py-4 px-6">{userCoupon.maxDiscountAmount}</td>
            <td class="py-4 px-6">{userCoupon.minPaymentAmount}</td>
          </tr>
        </tbody>
      </div>
    </div>
  );
}

const HighlightInfo = styled.span`
  color: ${MainColor1};
  font-weight: bold;
`;
