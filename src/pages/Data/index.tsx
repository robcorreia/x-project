import { DataContainer, DataContent, SearchForm } from "./styles";
import { useAuth } from "../../contexts/AuthContext";
import { FixedSizeList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { MagnifyingGlass } from "phosphor-react";

export function Data() {
  const { data } = useAuth();

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
          alignItems: "center",
          padding: "0.4rem",
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
        <SearchForm>
          <input placeholder="Digite sua pesquisa..." />
          <button>
            <MagnifyingGlass size={16} weight="bold" />
            Buscar
          </button>
        </SearchForm>
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
