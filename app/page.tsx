import Gallaria from '@/components/Galleria';
import Home from '@/components/Home';
import Products from '@/components/Products';
import { RightMargin, SideMargin } from '@/components/SideMargin';
export default function Page() {
  return (
    <main>
      <SideMargin />
      <Home />
      <Gallaria />
      <RightMargin />
      <Products />
    </main>
  );
}
