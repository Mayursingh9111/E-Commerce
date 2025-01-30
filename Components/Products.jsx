import React from 'react'
import ProductCard from './ProductCard'

const Products = ({ products }) => {
  return (
    <div className='py-10'>
      <div className='flex flex-col items-center gap-4 '>
        <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>Shopping everyday</h1>
        <span className='w-20 h-[3px] bg-black'></span>
        <p className='max-w-[700px] text-gray-600 text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aliquid maxime quam blanditiis magnam ullam illo omnis odit, voluptatem mollitia possimus neque quia perferendis delectus assumenda corrupti laboriosam eos, ipsa voluptates. Adipisci veniam deleniti eius neque eaque ut impedit saepe facere nulla ratione beatae eos vero est, aliquam natus? Temporibus?
        </p>
      </div>
      <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10'>
        {products.map((item) => (
          <ProductCard key={item._id} products={item} />
        ))}
      </div>
    </div>
  )
}

export default Products
