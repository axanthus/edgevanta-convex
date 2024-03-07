'use client'
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useState } from "react";

export default function Alice() {
  const name = 'Alice'
  const messages = useQuery(api.messages.list);
  const sendMessage = useMutation(api.messages.send);

  const [newMessage, setNewMessage] = useState("");

  async function handleSendMessage (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    await sendMessage({ body: newMessage, author: name });
    setNewMessage("");
  }

  function handleNewMessage (e: React.ChangeEvent<HTMLInputElement>) {
    setNewMessage(e.target.value);
  }

  return (
    <main className="space-y-12">
      <header><h1>Alice and Bob`&apos;s Chat</h1></header>
      <section className="flex flex-col gap-y-10">
        {messages?.map((message) => (
          <article key={message._id}>
            <h5>{message.author}</h5>
            <p>{message.body}</p>
          </article>
        ))}
      </section>
      <form>
        <input type='text' value={newMessage} placeholder="Message" onChange={handleNewMessage} />
        <button type="submit" disabled={!newMessage} onClick={handleSendMessage}>Send</button>
      </form>
    </main>
  )
}