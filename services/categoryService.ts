export interface Category {
    id: number
    name: string
    icon: string
  }
  
  export async function getAllCategories(): Promise<Category[]> {
    const res = await fetch(`${process.env.API_URL}/categories`, {
      cache: 'no-store',
    })
    if (!res.ok) throw new Error('Failed to fetch categories')
    return res.json()
  }
  