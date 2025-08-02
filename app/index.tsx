// app/index.tsx
import { FontAwesome5 } from "@expo/vector-icons";
import { ScrollView, View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  const trafficSigns = [
    {
      name: "ban",
      label: "Dilarang Masuk",
      caption:
        "Rambu ini menunjukkan bahwa kendaraan tidak diperkenankan melewati jalan ini dari arah Anda datang.",
    },
    {
      name: "road",
      label: "Satu Arah",
      caption:
        "Digunakan untuk menandai bahwa jalan hanya dapat dilalui ke satu arah saja.",
    },
    {
      name: "traffic-light",
      label: "Lampu Lalin",
      caption:
        "Patuhi urutan warna: Merah untuk berhenti, Kuning untuk bersiap, dan Hijau untuk jalan.",
    },
    {
      name: "walking",
      label: "Khusus Pejalan Kaki",
      caption:
        "Zona ini diprioritaskan untuk orang yang berjalan kaki. Kendaraan dilarang mengganggu jalur ini.",
    },
    {
      name: "bicycle",
      label: "Jalur Sepeda",
      caption:
        "Lintasan ini disediakan khusus bagi pesepeda demi keselamatan dan ketertiban.",
    },
    {
      name: "exclamation-triangle",
      label: "Area Bahaya",
      caption:
        "Tanda peringatan agar pengendara lebih waspada terhadap kondisi jalan yang berisiko.",
    },
    {
      name: "parking",
      label: "Tempat Parkir",
      caption:
        "Lokasi yang secara resmi diizinkan untuk kendaraan berhenti atau parkir.",
    },
    {
      name: "arrow-circle-up",
      label: "Hanya Lurus",
      caption:
        "Pengemudi diwajibkan untuk terus maju dan tidak berbelok pada titik ini.",
    },
    {
      name: "car",
      label: "Mobil",
      caption:
        "Rambu yang menandai jalur prioritas untuk kendaraan roda empat.",
    },
    {
      name: "bus",
      label: "Jalur Bus",
      caption: "Jalur ini hanya boleh dilalui oleh kendaraan umum seperti bus.",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <Text style={styles.header}>Simbol Rambu Lalu Lintas</Text>

      <View style={styles.gridWrapper}>
        {trafficSigns.map((item, idx) => (
          <View key={idx.toString()} style={styles.cardBox}>
            <FontAwesome5 name={item.name} size={38} color="#b22222" />
            <Text style={styles.cardTitle}>{item.label}</Text>
            <Text style={styles.cardDescription}>{item.caption}</Text>
          </View>
        ))}
      </View>

      <View style={styles.signature}>
        <Text style={styles.signatureText}>
          © 2025 Fauzan Azhari Rahman – 105841109622
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    backgroundColor: "#f9f9f9",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a1a1a",
    textAlign: "center",
    marginBottom: 20,
  },
  gridWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardBox: {
    width: "47%",
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 14,
    marginBottom: 18,
    alignItems: "center",
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
    marginTop: 10,
    textAlign: "center",
  },
  cardDescription: {
    fontSize: 13,
    color: "#555",
    marginTop: 6,
    textAlign: "center",
  },
  signature: {
    marginTop: 30,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    alignItems: "center",
  },
  signatureText: {
    fontSize: 12,
    color: "#888",
    fontStyle: "italic",
    textAlign: "center",
  },
});
