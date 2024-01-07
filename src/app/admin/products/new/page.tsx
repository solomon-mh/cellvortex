import PageHeader from "../../_components/PageHeader";
import ProductForm from "../_components/ProductForm";

const NewProductPage = () => {
  return (
    <div>
      <PageHeader className="text-red-500 font-bold w-fit border-2 px-6 py-2 my-3">
        Add Product
      </PageHeader>
      <ProductForm />
    </div>
  );
};

export default NewProductPage;
