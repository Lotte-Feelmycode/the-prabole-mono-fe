import SiteHead from '@components/common/SiteHead.js';
import { GET } from '@apis/defaultApi';
import { useEffect, useState } from 'react';
import CouponListChk from '@components/coupon/CouponListChk';
import styled from '@emotion/styled';
import UserSearchBar from '@components/coupon/UserSearchBar';
import { useRouter } from 'next/router';
import SellerLayout from '@components/seller/SellerLayout';
import * as btn from '@components/input/Button';
import Heading from '@components/input/Heading';

export default function CouponAssign() {
  // TODO:
  // setUserId(현재로그인되어있는userId-세션,쿠키 등에서 얻어올 것임);
  const uidFromStorage = 4;

  const router = useRouter();
  const [role, setRole] = useState();
  const [userId, setUserId] = useState(uidFromStorage);
  const [sellerId, setSellerId] = useState();

  useEffect(() => {
    GET(`/user/role`, { userId }).then((res) => {
      if (res.message === 'ROLE_USER') {
        alert('잘못된 접근입니다.');
        router.push('/');
      } else if (res.message === 'ROLE_SELLER') {
        setRole('SELLER');
        setSellerId(res.data);
      } else {
        alert('로그인 후에 사용 가능합니다.');
        router.push('/user/signin');
      }
    });
  }, []);

  const sellerProps = {
    sellerId: sellerId,
  };

  if (role === 'SELLER') {
    return (
      <SellerLayout>
        <SiteHead title="Seller's Coupon List" />
        <Heading title="쿠폰 배정" type="h1" />
        <PageContainer>
          <Split>
            <CouponListChk {...sellerProps}></CouponListChk>
          </Split>
          <Split>
            <UserSearchBar></UserSearchBar>
            <btn.SmallPink
              buttonText="쿠폰 배정"
              onClickFunc={() => router.push('./assignAf')}
              css
            />
          </Split>
        </PageContainer>
      </SellerLayout>
    );
  }
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Split = styled.div`
  flex: 1;
  padding: 1rem;
`;