import { Await, defer, json, useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';
import { Suspense } from 'react';

function EventsPage() {
  const { events } = useLoaderData();
  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }
  // const events = data.events;
  // <EventsList events={events} />;

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadEvents) => <EventsList events={loadEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    //return { isError: true, message: 'Could not fetch events' };
    // throw new Response(
    //   JSON.stringify({ messagle: 'Could not fetch events.' }),
    //   { status: 500 }
    // );

    throw json({ message: 'Could not fetch events' }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export function loader() {
  return defer({
    events: loadEvents(),
  });
}
