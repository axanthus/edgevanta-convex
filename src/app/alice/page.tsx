import MessageTerminal from "@/components/message-terminal";
import MessageDisplay from "@/components/message-display";

export default function Alice() {
  const name = 'Alice'

  return (
    <main className=" flex flex-col items-center justify-center gap-10 h-full">
      <MessageDisplay name={name} />
      <MessageTerminal name={name} />
    </main>
  )
}