import { Typography } from "antd";

export const Header = () => {
  return (
    <div
      style={{
        height: 60,
        position: "sticky",
        top: 0,
        backgroundColor: "rgb(0, 21, 41)",
        display: "flex",
        alignItems: "center",
        padding: "1rem",
        zIndex: "999",
      }}
    >
      <Typography.Title level={3} style={{ color: "white" }}>
        Device management
      </Typography.Title>
    </div>
  );
};
