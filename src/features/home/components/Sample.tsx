"use client";

import { sampleAction } from "../serverActions/sample";

export function Sample() {
  return (
    <div>
      <button onClick={() => sampleAction().then(console.log)}>server action</button>
    </div>
  );
}
