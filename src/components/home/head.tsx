export default function Head() {
  return (
    <span className="mt-16 flex w-full flex-col items-center space-y-4">
      <h1 className="flex cursor-default text-2xl font-bold">
        E aí, Mundo!
        <div className="animante-delay-1000 animate-handshake [animation-delay:_2s] hover:animate-handshake-infinite">
          👋
        </div>
      </h1>
      <p className="cursor-default text-center leading-6">
        Eu sou o{' '}
        <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">Carlos</span>
        ,
        <br />e eu programo coisas.
      </p>
    </span>
  );
}
