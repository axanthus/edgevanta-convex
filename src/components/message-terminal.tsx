'use client'

import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from "react";

export default function MessageTerminal({ name }: { name: string}) {
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
    <form className=" border border-gray-400 rounded-xl text-gray-500 max-w-3xl w-full ">
      <div className="p-3 px-4 ">
        <input type='text' value={newMessage} placeholder="Message" onChange={handleNewMessage}
          className="placeholder:font-thin bg-transparent w-full text-gray-300 " />
      </div>

      <div className="p-3 px-4 flex justify-end bg-slate-600 rounded-b-xl">
        <button className=" disabled:text-slate-500 text-gray-300 " type="submit" disabled={!newMessage} onClick={handleSendMessage}>Send</button>
      </div>
    </form>
  )
}