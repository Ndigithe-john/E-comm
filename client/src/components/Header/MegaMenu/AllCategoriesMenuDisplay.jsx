import CategoryImageBox from './CategoryImageBox';

const AllCategoriesMenuDisplay = () => {
  return (
    <section className='border-t'>
      <div className='relative z-50 mx-auto hidden max-w-7xl gap-10 bg-white px-3 py-8 sm:px-6 lg:flex lg:px-8'>
        <div className='grid w-full grid-cols-12 gap-8'>
          <div className='col-span-3'>
            <CategoryImageBox
              url='#'
              imageUrl='/images/men-category.jpg'
              label='men'
            />
          </div>
          <div className='col-span-3'>
            <CategoryImageBox
              url='#'
              imageUrl='/images/women-category.jpg'
              label='women'
            />
          </div>
          <div className='col-span-3'>
            <CategoryImageBox
              url='#'
              imageUrl='/images/kids-category.jpg'
              label='kids'
            />
          </div>
          <div className='col-span-3'>
            <CategoryImageBox
              url='#'
              imageUrl='/images/accessories-category.jpg'
              label='accessories'
            />
          </div>
          <div className='col-span-3'>
            <CategoryImageBox
              url='#'
              imageUrl='/images/collections-category.jpg'
              label='collection'
            />
          </div>
          <div className='col-span-3'>
            <CategoryImageBox
              url='#'
              imageUrl='/images/mens-suit-category.jpg'
              label='suit'
            />
          </div>
          <div className='col-span-3'>
            <CategoryImageBox
              url='#'
              imageUrl='/images/men-watches-category.jpg'
              label='men-watches'
            />
          </div>
          <div className='col-span-3'>
            <CategoryImageBox
              url='#'
              imageUrl='/images/watches-category.jpg'
              label='watches'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCategoriesMenuDisplay;
