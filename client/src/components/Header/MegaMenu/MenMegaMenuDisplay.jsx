import CategoryImageBox from './CategoryImageBox';
import LinkItem from './LinkItem';

const MenMegaMenuDisplay = () => {
  return (
    <section className='border-t'>
      <div className='relative z-50 mx-auto hidden max-w-7xl gap-10 bg-white px-3 py-8 sm:px-6 lg:flex lg:px-8'>
        <div className='grid w-full grid-cols-12 gap-8'>
          <div className='col-span-2'>
            <h6 className='mb-6 text-sm font-semibold text-slate-900'>
              categories
            </h6>
            <ul className='flex flex-col gap-y-3'>
              <LinkItem url='#' label="Men's Fashion" />
              <LinkItem url='#' label='New Arrivals' />
              <LinkItem url='#' label='Clothings' />
              <LinkItem url='#' label='Shoes' />
              <LinkItem url='#' label='Watches' />
              <LinkItem url='#' label='Backpacks' />
              <LinkItem url='#' label='Jewellery' />
              <LinkItem url='#' label='Luggage' />
            </ul>
          </div>
          <div className='col-span-2'>
            <h6 className='mb-6 text-sm font-semibold text-slate-900'>
              Top Brands
            </h6>
            <ul className='flex flex-col gap-y-3'>
              <LinkItem url='#' label='Nike' />
              <LinkItem url='#' label='New Balance' />
              <LinkItem url='#' label='Durag' />
              <LinkItem url='#' label='Converse' />
              <LinkItem url='#' label='Louis Vuitton' />
              <LinkItem url='#' label='Adidas' />
              <LinkItem url='#' label='Gucci' />
              <LinkItem url='#' label='Dior' />
            </ul>
          </div>
          <div className='col-span-5'>
            <CategoryImageBox
              url='#'
              imageUrl='/images/men-watches-category.jpg'
              label="Men's Watches"
              height='h-72'
            />
          </div>
          <div className='col-span-3'>
            <CategoryImageBox
              url='#'
              imageUrl='/images/mens-suit-category.jpg'
              label="Men's Suits"
              height='h-72'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenMegaMenuDisplay;
