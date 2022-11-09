import { GET_DATA } from '@apis/defaultApi';
import SellerLayout from '@components/seller/SellerLayout';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Heading from '@components/input/Heading';
import styled from '@emotion/styled';
import * as btn from '@components/input/Button';
import { useGetToken } from '@hooks/useGetToken';

export default function ProductList() {
  const router = useRouter();
  const [productList, setProductList] = useState([]);

  // TODO : 로그인 정보 가져오기
  // const userId = localStorage.getItem("ID");
  const userId = 1;

  useEffect(() => {
    let sellerId, role;
    if (typeof window !== 'undefined' && typeof window !== undefined) {
      sellerId = localStorage.getItem('sellerId');
      role = localStorage.getItem('role');
    }
    if (
      sellerId === 'undefined' ||
      sellerId === undefined ||
      sellerId === 'null' ||
      role === 'ROLE_USER'
    ) {
      alert('판매자 페이지입니다.');
      router.push('/');
    }

    useGetToken();

    GET_DATA(`/product/list`, { sellerId: userId }).then((res) => {
      if (res) {
        setProductList(res.content);
      }
    });
  }, []);

  return (
    <>
      <SellerLayout>
        <Heading title="상품 목록" type="h1" />
        <Divider />
        <table className="w-full text-m text-center">
          <thead className="text-m text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="h-12">
              <th scope="col" className="py-1 w-10">
                상품명
              </th>
              <th scope="col" className="py-1 px-10 w-24">
                재고
              </th>
              <th scope="col" className="py-1 px-10 w-40">
                가격
              </th>
              <th scope="col" className="py-1 px-10 w-40">
                카테고리
              </th>
            </tr>
          </thead>
          <tbody>
            {productList &&
            Array.isArray(productList) &&
            productList.length > 0 ? (
              productList.map((product, index) => (
                <tr className="h-16 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td>{product.productName}</td>
                  <td>{product.productRemains}</td>
                  <td>{product.productPrice}</td>
                  <td>{product.productCategory}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="py-10">
                  등록된 상품이 없습니다. 상품을 등록해주세요.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <Div>
          <btn.SmallPink
            buttonText="등록하기"
            name="btnPost"
            onClickFunc={() => {
              router.push('/seller/product/index');
            }}
          />
        </Div>
      </SellerLayout>
    </>
  );
}

const Divider = styled.hr`
  color: black;
  margin-bottom: 20px;
`;

const Tags = styled.span`
  background-color: black;
  color: #fff;
  font-size: 0.8rem;
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 3rem;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 20px;
`;
