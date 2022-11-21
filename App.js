import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.titulo}>
          <Text style={styles.titulo}>Calcule seu IMC</Text>
        </View>
        <View>
          <Text style={styles.texto}>
            Informe os dados solicitados abaixo:{" "}
          </Text>
        </View>
        <View style={styles.formularios}>
          <TextInput
            style={styles.forms}
            // value={number}
            placeholder="Peso"
            keyboardType="numeric"
          />

          <TextInput
            style={styles.forms}
            // value={number}
            placeholder="Altura"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.botao}>
          <Button
            title="Calcule"
            color={"grey"}
            borderWidth={1}
            width={"90%"}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,

    // alignItems: "center",
    // justifyContent: "center",
  },
  container: {
    backgroundColor: "grey",
    backgroundColor: "black",
    width: "100%",
    height: "15%",
  },
  titulo: {
    fontSize: 42,
    fontWeight: "bold",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
  },
  forms: {
    height: 40,
    width: "40%",
    margin: 15,
    borderWidth: 1,
    padding: 5,
  },
  formularios: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  texto: {
    margin: 10,
    fontSize: 18,
  },
  botao: {
    alignItems: "center",
    width: "50%",
  },
});
