import { DataContainer, DataContent, SearchForm, GridHeader } from "./styles";
import { FixedSizeList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { MagnifyingGlass } from "phosphor-react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useState } from "react";
import { getProducts, setData } from "../../store/Products.store";
import { useAppDispatch, useAppSelector } from "../../hooks/useReducers";

const searchFormSchema = yup.object({
  query: yup.string(),
});
interface SearchFormInput {
  query: string;
}

export function Products() {
  const dispatch = useAppDispatch();
  const {
    payload: {
      products: { data },
    },
  } = useAppSelector(setData);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInput>({
    resolver: yupResolver(searchFormSchema),
  });

  const fetchData = useCallback(async (query?: string) => {
    await dispatch(getProducts(query));
  }, []);

  async function handleSearchSubmitForm(data: SearchFormInput) {
    await fetchData(data.query);
  }

  const Row = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => {
    const item = data[index];

    return (
      <div
        style={{
          ...style,
          display: "grid",
          width: "1120px",
          overflowX: "auto",
          overflowY: "hidden",
          alignItems: "center",
          padding: "0.4rem",
          justifyContent: "center",
          textAlign: "center",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 2fr 1fr",
          background: "rgba(245,245,245,0.8)",
          border: "2px solid black",
          borderRadius: "4px",
          fontWeight: "500",
          color: "black",
          gap: "2rem",
        }}
      >
        <div>{item.product}</div>
        <div>{item.quantity}</div>
        <div>{item.price}</div>
        <div>{item.type}</div>
        <div>{item.industry}</div>
        <div>{item.origin}</div>
      </div>
    );
  };

  return (
    <DataContainer>
      <DataContent>
        <h2>Listagem dos produtos</h2>
        <SearchForm onSubmit={handleSubmit(handleSearchSubmitForm)}>
          <input
            {...register("query")}
            name="query"
            placeholder="Digite sua pesquisa..."
          />
          <button>
            {isSubmitting ? (
              "Buscando..."
            ) : (
              <>
                Buscar
                <MagnifyingGlass size={16} weight="bold" />
              </>
            )}
          </button>
        </SearchForm>
        <GridHeader>
          <div>
            <h4>Produto</h4>
          </div>
          <div>
            <h4>Quantidade</h4>
          </div>
          <div>
            <h4>Preço</h4>
          </div>
          <div>
            <h4>Tipo</h4>
          </div>
          <div>
            <h4>Indústria</h4>
          </div>
          <div>
            <h4>Origem</h4>
          </div>
        </GridHeader>
        <AutoSizer>
          {({ height, width }) => (
            <FixedSizeList
              height={height}
              itemCount={data.length}
              itemSize={50}
              width={width}
            >
              {Row}
            </FixedSizeList>
          )}
        </AutoSizer>
      </DataContent>
    </DataContainer>
  );
}
