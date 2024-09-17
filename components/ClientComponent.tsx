"use client";
import { useEffect, useState } from "react";

export default function ClientComponent({ user, data }) {
  const [hello, setHello] = useState(null);
  
  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      <div className="flex flex-col gap-2 items-start">
        <h2 className="font-bold text-2xl mb-4">Your user details</h2>
        <pre className="text-xs font-mono p-3 rounded border max-h-32 overflow-auto">
          {JSON.stringify(user, null, 2)}
        </pre>
        <pre className="text-xs font-mono p-3 rounded border max-h-32 overflow-auto">
          {JSON.stringify(data)}
        </pre>
        {data && data.map((user) => <p key={user.id}>{user.email}</p>)}
      </div>
    </div>
  );
}
