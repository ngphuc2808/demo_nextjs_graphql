import { Controller, useForm } from "react-hook-form";
import { Input } from "antd";
import { useGlobalContext } from "@/app/lib/context.wrapper";

interface SearchType {
  dataSearch: string;
}

const AppSearch = () => {
  const { setDataSearch } = useGlobalContext() as IGlobalContext;

  const { control, handleSubmit } = useForm<SearchType>();

  const handleSearch = (data: SearchType) => {
    setDataSearch(data.dataSearch);
  };

  return (
    <form
      onSubmit={handleSubmit(handleSearch)}
      className="flex lg:w-[80%] md:w-[80%] sm:w-full xs:w-full"
    >
      <Controller
        name="dataSearch"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Input.Search placeholder="Search..." size="middle" {...field} />
        )}
      />
      <input type="submit" style={{ display: "none" }} />
    </form>
  );
};

export default AppSearch;
