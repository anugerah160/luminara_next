import { getAllCategories } from '@/services/categoryService'
import CategoryBar from '@/components/CategoryBar'

export default async function HomePage() {
  const categories = await getAllCategories()
  return (
    <main>
      <CategoryBar categories={categories} currentCategoryId={null} />
    </main>
  );
}
