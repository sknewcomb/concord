import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

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

const messages = [
  {
    id: 1,
    user: "Alice",
    avatar: "A",
    content: "Hey everyone! 👋",
  },
  {
    id: 2,
    user: "Bob",
    avatar: "B",
    content: "Hi Alice! How's it going?",
  },
  {
    id: 3,
    user: "Charlie",
    avatar: "C",
    content: "Welcome to the Discord UI clone.",
  },
  {
    id: 4,
    user: "Alice",
    avatar: "A",
    content: "This looks really cool!",
  },
  {
    id: 5,
    user: "Bob",
    avatar: "B",
    content: "Yeah, I like the layout.",
  },
  {
    id: 6,
    user: "Charlie",
    avatar: "C",
    content: "Should we add more features?",
  },
  {
    id: 7,
    user: "Alice",
    avatar: "A",
    content: "Definitely! Maybe voice channels next?",
  },
  {
    id: 8,
    user: "Bob",
    avatar: "B",
    content: "Or emoji reactions!",
  },
  {
    id: 9,
    user: "Charlie",
    avatar: "C",
    content: "Let's keep it simple for now.",
  },
  {
    id: 10,
    user: "Alice",
    avatar: "A",
    content: "Agreed. This is a great start.",
  },
  {
    id: 11,
    user: "Bob",
    avatar: "B",
    content: "I'll test scrolling now.",
  },
  {
    id: 12,
    user: "Charlie",
    avatar: "C",
    content: "Scroll should work with all these messages!",
  },
];

export default function Home() {
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
              user={msg.user}
              avatar={msg.avatar}
              content={msg.content}
            />
          ))}
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
