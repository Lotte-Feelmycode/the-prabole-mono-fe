import CommerceLayout from '@components/common/CommerceLayout';
import SiteHead from '@components/common/SiteHead.js';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import Input from '@components/input/Input';
import ImageUploader from '@components/input/ImageUploader';
import * as btn from '@components/input/Button';
import EventParticipantList from '@components/event/EventParticipantList';

export default function ProductDetail() {
  // TODO: userId를 가져올 때 저장되어있는 걸(cookie, localstorage)로 가져오게 변경
  const router = useRouter();
  const [userId, setUserId] = useState(router.query.id);
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [remain, setRemain] = useState();
  const [price, setPrice] = useState();
  const [thumbnailImg, setThumbnailImg] = useState();
  const [detailImg, setDetailImg] = useState([]);

  function setProduct() {
    {
      name, category, remain, price;
    }
    console.log(name, category, remain, price);
  }

  const buttonProperties = {
    buttonText: '상품 등록',
    onClickFunc: setProduct,
  };

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const onChangeRemain = (event) => {
    setRemain(event.target.value);
  };

  const onChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const onChangeThumbnailImg = (event) => {
    setThumbnailImg(event.target.value);
  };

  const onChangeDetailImg = (event) => {
    setDetailImg(event.target.value);
  };

  useEffect(() => {
    const userId = router.query.id;
    if (userId) setUserId(userId);
  }, [router.query]);

  return (
    <>
      <CommerceLayout>
        <SiteHead title="상품 등록" />
        <Div>
          상품명
          <br /> <Input onChange={onChangeName}></Input>
          <br />
          카테고리
          <br />
          <Input onChange={onChangeCategory}></Input>
          <br />
          재고
          <br />
          <Input onChange={onChangeRemain}></Input>
          <br />
          가격
          <br />
          <Input onChange={onChangePrice}></Input>
          <br />
          썸네일 이미지
          <br /> <ImageUploader></ImageUploader>
          <br />
          상세 이미지
          <br />
          <ImageUploader></ImageUploader>
          <br />
          <btn.Blue {...buttonProperties}></btn.Blue>
        </Div>
      </CommerceLayout>
      <EventParticipantList eventId={userId} />
    </>
  );
}
const Div = styled.div`
  width: 300px;
  margin: auto;
`;
