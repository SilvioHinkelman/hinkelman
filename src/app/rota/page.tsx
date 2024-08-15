"use client";

const videos = [
  { video: 465, height: "256" },
  { video: 465, height: "256" },
  { video: 465, height: "256" },
  { video: 465, height: "256" },
];

const array = [
  { title: "Um", items: videos },
  {
    title: "Dois",
    items: videos,
  },
  {
    title: "tres",
    items: videos,
  },
  {
    title: "quatro",
    items: videos,
  },
];
console.log("TCL: array", array);

console.log("TCL: ");
export default function Rota() {
  return (
    <div>
      {array.map((x: any) => {
        return (
          <div>
            <h1>
              {x.title}
              <div className="flex gap-8">
                {x.items.map((f: any, o: number) => {
                  return <h1>{f.video}</h1>;
                })}
              </div>
            </h1>
          </div>
        );
      })}
      <h1>ROTA</h1>
    </div>
  );
}
