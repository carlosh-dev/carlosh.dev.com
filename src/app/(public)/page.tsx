export default function Home() {
  return (
    <section className="flex w-full py-9">
      <div className="flex-1 space-y-9 ">
        <h1 className="text-7xl">keep coding.</h1>
        <h1 className="text-7xl">
          keep <span className="bg-purple-950">learning</span>.
        </h1>
      </div>

      <div className="text-1xl max-w-xs space-y-6">
        <p>
          Olá, <span className="text-purple-400">mundo</span>!{" "}
        </p>

        <p className="leading-relaxed">
          Bem-vindo ao meu site. Aqui falarei sobre quem sou e o que eu estou{" "}
          <span className="text-purple-400">codando</span>.
        </p>
      </div>
    </section>
  );
}
