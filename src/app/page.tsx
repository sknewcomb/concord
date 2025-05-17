"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";

// User and Message interfaces
type User = {
  id: string;
  username: string;
};

type Message = {
  id: string;
  userId: string;
  content: string;
};

// Reusable ServerIcon component
function ServerIcon({ children }: { children: React.ReactNode }) {
  return (
    <Button variant="ghost" size="icon">
      <Avatar>
        <AvatarFallback>{children}</AvatarFallback>
      </Avatar>
    </Button>
  );
}

// Reusable ChannelButton component
function ChannelButton({ name }: { name: string }) {
  return (
    <Button variant="ghost" className="justify-start">
      {name}
    </Button>
  );
}

// Reusable Message component
function Message({
  user,
  avatar,
  content,
}: {
  user: string;
  avatar: string;
  content: string;
}) {
  return (
    <Card className="p-4 flex gap-4 items-start">
      <Avatar>
        <AvatarFallback>{avatar}</AvatarFallback>
      </Avatar>
      <div>
        <div className="font-medium">{user}</div>
        <div>{content}</div>
      </div>
    </Card>
  );
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [channelId, setChannelId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fetch users
    fetch("/api/users")
      .then((res) => res.json())
      .then(setUsers);
    // Fetch servers, then channels for the demo server, then get the 'general' channel ID
    fetch("/api/servers")
      .then((res) => res.json())
      .then((servers) => {
        const demoServer = servers.find((s: { name: string }) => s.name === "Demo Server");
        if (!demoServer) return;
        fetch(`/api/channels?serverId=${demoServer.id}`)
          .then((res) => res.json())
          .then((channels) => {
            const general = channels.find((c: { name: string }) => c.name === "general");
            if (general) setChannelId(general.id);
          });
      });
  }, []);

  useEffect(() => {
    if (!channelId) return;
    fetch(`/api/messages?channelId=${channelId}`)
      .then((res) => res.json())
      .then(setMessages);
  }, [channelId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  return (
    <div className="flex h-screen bg-muted">
      {/* Sidebar: Servers */}
      <aside className="w-16 bg-background border-r flex flex-col items-center py-4 gap-2">
        <ServerIcon>D</ServerIcon>
        <ServerIcon>G</ServerIcon>
        {/* Add more server icons */}
      </aside>

      {/* Channel List */}
      <nav className="w-56 bg-card border-r flex flex-col p-4 gap-2">
        <h2 className="font-bold mb-2">Channels</h2>
        <ChannelButton name="# general" />
        <ChannelButton name="# random" />
        {/* Add more channels */}
      </nav>

      {/* Chat Area */}
      <main className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="h-14 border-b flex items-center px-6 font-semibold bg-background">
          # general
        </div>
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg) => (
            <Message
              key={msg.id}
              user={users.find((u) => u.id === msg.userId)?.username || msg.userId}
              avatar={users.find((u) => u.id === msg.userId)?.username?.[0] || "?"}
              content={msg.content}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
        {/* Message Input */}
        <form className="border-t p-4 flex gap-2 bg-background">
          <Input placeholder="Type a message..." />
          <Button type="submit">Send</Button>
        </form>
      </main>
    </div>
  );
}
