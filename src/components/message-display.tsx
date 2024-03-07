'use client'

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useEffect, useRef } from "react";
import clsx from "clsx";

export default function MessageDisplay({ name }: { name: string }) {

  const messages = useQuery(api.messages.list);

  const scrollRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setTimeout(() => {
      if (scrollRef.current)
        scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth",});
    }, 0);
  }, [messages]);

  return (
    <section ref={scrollRef} className="flex flex-col gap-y-6 bg-gray-800 max-w-6xl w-full p-8 h-2/3 rounded-xl overflow-scroll overflow-x-hidden">
        {messages?.map((message) => {
          const isAuthor = message.author === name;
          const msgBgColor = isAuthor ? "bg-purple-700" : "bg-slate-700";
          const authorColor = isAuthor ? "text-green-500" : "text-red-400";
          return (
            <article key={message._id} className={clsx("space-y-0.5", { "self-end": isAuthor })}>
              <h5 className={clsx(authorColor, { "text-right mr-2": isAuthor }, { "ml-2": !isAuthor })}>
                {message.author}
              </h5>
              <p className={clsx(msgBgColor, " text-gray-200 p-3 max-w-fit rounded-xl")}>{message.body}</p>
            </article>
          )
        })}
    </section>
  )
}