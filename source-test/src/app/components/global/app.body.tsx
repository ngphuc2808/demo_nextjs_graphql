"use client";

import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import { Spin } from "antd";

const AppBody = () => {
  const isFetching = useIsFetching();

  const isMutating = useIsMutating();
  return (
    <div>
      {isFetching + isMutating !== 0 && (
        <div role="status" className="fixed bottom-10 right-10">
          <Spin size="large" className="z-50" />
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default AppBody;
