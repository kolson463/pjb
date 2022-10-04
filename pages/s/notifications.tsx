import type { NextPage } from "next";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Link from "next/link";
import S_Header from "../../components/s_header";

const S_Notifications: NextPage = () => {
  type Notification = {
    id: string;
    title: string;
    type?: string;
    body: string;
    uploadDate: Date;
    tags?: string[];
    imageUrl?: string;
    projectApplications?: string[];
    viewed?: boolean;
  };

  let initNotifications: Notification[] = [
    {
      id: "1",
      title: "Message",
      body: "We liked your project",
      uploadDate: new Date(),
      viewed: true,
    },
    {
      id: "2",
      title: "Project Viewed",
      body: "CFB Project Viewed",
      uploadDate: new Date(),
      viewed: false,
    },
  ];

  const [notifications, setNotifications] = useState(initNotifications);

  const removeNotification = (id: string) => {
    let updatedNotifications = [...notifications].filter(
      (notification) => notification.id !== id
    );
    setNotifications(updatedNotifications);
  };

  return (
    <>
      {S_Header("/s/notifications")}

      <div>
        <h1>Username Notifications</h1>
        <Button
          variant="outline-danger"
          onClick={() => {
            setNotifications([]);
          }}
        >
          Clear All
        </Button>
        <main>
          {notifications.length > 0 ? (
            notifications.map((notification) => {
              return (
                <Card
                  style={{ width: "18rem" }}
                  key={notification.id}
                  className={
                    notification.viewed ? "" : " border border-2 border-info"
                  }
                >
                  <Card.Body>
                    <Card.Title>{notification.title}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    <Button
                      variant="outline-danger"
                      onClick={() => {
                        removeNotification(notification.id);
                      }}
                    >
                      Clear
                    </Button>
                  </Card.Body>
                </Card>
              );
            })
          ) : (
            <h1> No Notifications</h1>
          )}
        </main>
      </div>
    </>
  );
};

export default S_Notifications;
