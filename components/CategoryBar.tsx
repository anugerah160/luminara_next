import Link from 'next/link'
import * as FaIcons from 'react-icons/fa'
import { Category } from '@/services/categoryService'

interface Props {
  categories: Category[]
  currentCategoryId: string | null
}

export default function CategoryBar({ categories, currentCategoryId }: Props) {
  return (
    <div className="w-full bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center overflow-x-auto py-4">
          <div className="flex gap-3 flex-wrap justify-center">
            {categories.map((cat) => {
              const IconComponent = FaIcons[cat.icon as keyof typeof FaIcons]
              const isActive = String(cat.id) === currentCategoryId

              return (
                <Link
                  key={cat.id}
                  href={`/category/${cat.id}`}
                  className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border shadow-sm hover:shadow-md hover:-translate-y-0.5
                    ${
                      isActive
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'
                    }
                  `}
                >
                  {IconComponent && <IconComponent className="text-lg" />}
                  {cat.name}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
