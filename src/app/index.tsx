import { HomeHeader } from "@/components/HomeHeader";
import { List } from "@/components/List";
import { Target } from "@/components/Target";
import { View } from "react-native";

const summary = {
  total: "R$ 2.680,00",
  input: { label: "Entradas", value: "R$ 6.184,90" },
  output: { label: "Saídas", value: "-R$ 883,65" },
};

const targets = [
  {
    id: "1",
    name: "Comprar uma cadeira ergonômica",
    percentage: "75%",
    current: "900,00",
    target: "1.200,00",
  },
  {
    id: "2",
    name: "Comprar uma ventilador",
    percentage: "15%",
    current: "15,00",
    target: "200,00",
  },
  {
    id: "3",
    name: "Comprar PC",
    percentage: "5%",
    current: "150,00",
    target: "4.000,00",
  },
];

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={summary} />

      <List
        title="Metas"
        emptyMessage="Nenhuma meta encontrada!"
        data={targets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Target data={item} />}
        containerStyle={{ paddingHorizontal: 24 }}
      />
    </View>
  );
}
