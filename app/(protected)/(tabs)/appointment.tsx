import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useEffect, useState } from "react";
import {
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import api from "../../../api/api";
import { globalStyles } from "../../../global";

type Vaccin = {
  id: number;
  name: string;
};

export default function AppointmentScreen() {
  const [vaccins, setVaccins] = useState<Vaccin[]>([]);
  const [search, setSearch] = useState("");

  const getVaccinList = async () => {
    try {
      const response = await api.get("/api/v1/vaccin/");
      setVaccins(response.data);
    } catch (error) {
      console.log("Erro ao recuperar a lista de vacinas: ", error);
    }
  };

  const getVaccinByName = async (name: string) => {
    try {
      const response = await api.get(`/api/v1/vaccin?name=${name}`);
      setVaccins(response.data);
    } catch (error) {
      console.log("Erro ao recuperar a lista de vacinas: ", error);
    }
  };

  useEffect(() => {
    getVaccinList();
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      getVaccinList();
    } else {
      getVaccinByName(search);
    }
  }, [search]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyles.appointmentMainView}>
        <Text style={globalStyles.appointmentScreenTitle}>
          Escolha sua próxima dose!
        </Text>

        <View style={globalStyles.appointmentSearchContainer}>
          <FontAwesome5
            name="search"
            size={18}
            color="#555"
            style={globalStyles.appointmentSearchIcon}
          />
          <TextInput
            style={globalStyles.appointmentSearchInput}
            placeholder="Pesquisar vacina"
            placeholderTextColor="#888"
            value={search}
            onChangeText={setSearch}
          />
        </View>

        <FlatList
          data={vaccins}
          keyExtractor={(item) =>
            item.id?.toString() ?? Math.random().toString()
          }
          renderItem={({ item }) => (
            <View style={globalStyles.appointmentFlatListItem}>
              <Text style={globalStyles.appointmentFlatListText}>
                <FontAwesome5 name="syringe" size={20} color="#022757" />{" "}
                {item.name}
              </Text>
            </View>
          )}
          ListEmptyComponent={
            <Text style={globalStyles.appointmentEmptyText}>
              Ops... Nenhuma vacina encontrada!
            </Text>
          }
          contentContainerStyle={globalStyles.appointmentFlatListContainer}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}