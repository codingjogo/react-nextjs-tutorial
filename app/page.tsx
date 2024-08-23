import { Post } from "@/components/Post";
import ImageOfMinions from '@/public/images/minions.jpg';

export default function Home() {
  return (
    <main className="container py-12">
      <h1 className="text-4xl mb-4">Passing Props to a Component?</h1>
      {/* #1 Intialize */}
      {/* #3 Import */}
      {/* #4 write props */}
      <Post title={'title'} image={ImageOfMinions} data={{
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero quasi eaque voluptatum ipsam ipsum optio voluptas doloremque veniam quis voluptatem rem qui cumque dolore, facilis blanditiis! Itaque consectetur sunt doloribus.',
        author: 'Jogo'
      }}/>
    </main>
  );
}
