import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import styles from "./SkillScreenStyles.js";

export default function SkillScreen() {
  const [openSections, setOpenSections] = useState({}); 

  const toggleSection = (category) => {
    setOpenSections((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const skills = {
    "Front-End": [
      { name: "JavaScript", level: "Avançado" },
      { name: "TypeScript", level: "Avançado" },
      { name: "React.js", level: "Avançado" },
      { name: "React Native", level: "Avançado" },
      { name: "Vue.js", level: "Intermediário" },
      { name: "Angular", level: "Intermediário" },
      { name: "Ionic", level: "Intermediário" },
      { name: "Java Web", level: "Iniciante" },
    ],
    "Back-End": [
      { name: "Node.js", level: "Intermediário" },
      { name: "Spring Boot", level: "Iniciante" },
      { name: "FastAPI", level: "Intermediário" },
      { name: "Python", level: "Intermediário" },
      { name: "Java", level: "Avançado" },
    ],
    "Ferramentas & Metodologias": [
      { name: "Git/GitHub", level: "Avançado" },
      { name: "Scrum", level: "Intermediário" },
      { name: "Kanban/Trello", level: "Intermediário" },
      { name: "Grafana", level: "Intermediário" },
      { name: "Zabbix", level: "Intermediário" },
      { name: "PRTG", level: "Intermediário" },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../assets/image.png")} style={styles.avatar} />
        <Text style={styles.name}>Vitor Augusto</Text>
        <Text style={styles.title}>Árvore de Habilidades</Text>
      </View>

      {Object.entries(skills).map(([category, items], index) => (
        <View key={index} style={styles.card}>
          <TouchableOpacity onPress={() => toggleSection(category)}>
            <Text style={styles.cardTitle}>
              {category} {openSections[category] ? "▲" : "▼"}
            </Text>
          </TouchableOpacity>

          {openSections[category] &&
            items.map((skill, i) => (
              <View key={i} style={styles.skillItem}>
                <Text style={styles.skillText}>{skill.name}</Text>
                <Text style={styles.skillLevel}>{skill.level}</Text>
              </View>
            ))}
        </View>
      ))}
    </ScrollView>
  );
}
