import React from 'react';

export async function getServerSideProps() {
  const res = {
    "John": "Hello World!",
    "Jane": "Hello World 1!",
    "Judy": "Hello World 2!"
  };

  return { props: { data: res } };
}

function MyPage({ data }) {
  return (
    <div>
      <h1>My Data:</h1>
      <ul>
        {Object.entries(data).map(([key, value]) => (
          <li key={key}>
            <strong>{key}: </strong>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyPage;
