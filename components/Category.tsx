import { CATEGORY } from '@/constants/category';
import Image from 'next/image';

const Category = () => {
  return (
    <section>
      <h3>CATEGORY</h3>
      <h2>We Offer Best Services</h2>

      <ul>
        {CATEGORY.map(({ image, title, description }, idx) => (
          <li key={idx}>
            <Image
              src={image?.src}
              width={100}
              height={100}
              alt='icon category'
            />
            <h4>{title}</h4>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Category;
