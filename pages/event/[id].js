import { POST, GET } from '@apis/defaultApi';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import EventPrize from '@components/event/EventPrize';
import CommerceLayout from '@components/common/CommerceLayout';

export default function EventDetail() {
  const [eventInfo, setEventInfo] = useState([]);
  const [eventImage, setEventImage] = useState([]);
  const router = useRouter();
  const [eventId, setEventId] = useState(router.query.id);
  const [eventDetail, setEventDetail] = useState([]);

  useEffect(() => {
    const eventId = router.query.id;

    GET('/event/', { eventId }).then((res) => {
      if (res && res[0]) {
        setEventInfo(res[0]);
        setEventImage(res[0].eventImage);
        setEventDetail(res[0].eventPrizes);
        console.log(res[0]);
        console.log(eventDetail);
        console.log(eventDetail.eventId);
        setEventId(eventId);
      }
    });
  }, [router.query.id]);

  return (
    <CommerceLayout>
      <section className="flex min-h-screen flex-col text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="event-detail-startAt">
            {eventInfo.startAt} ~ {eventInfo.endAt}
          </div>
          <div className="event-detail-img">
            <img src={eventImage.eventDetailImg} style={{ width: '100%' }} />
          </div>
          <div className="event-detail-descript">{eventInfo.descript}</div>

          <div className="flex flex-wrap">
            {eventDetail &&
              eventDetail.map((event) => (
                <div key={event.eventPrizeId} style={{ width: '33%' }}>
                  <EventPrize event={event} eventId={eventId} />
                </div>
              ))}
          </div>
        </div>
      </section>
    </CommerceLayout>
  );
}
