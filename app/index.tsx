import { ScrollView, StyleSheet, View } from "react-native";
import { ScrollProvider, useSetScrollY } from "../constants/scrollcontext";

import About from "../components/about";
import Certificates from "../components/certificates";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Projects from "../components/projects";
import Skills from "../components/skills";

function PageContent() {
  const setScrollY = useSetScrollY();

  return (
    <View style={styles.root}>
      <Navbar />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        bounces={false}
        overScrollMode="never"
        onScroll={(e) => setScrollY(e.nativeEvent.contentOffset.y)}
        scrollEventThrottle={16}
      >
        <Hero />
        <About />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
        <Footer />
      </ScrollView>
    </View>
  );
}

export default function IndexPage() {
  return (
    <ScrollProvider>
      <PageContent />
    </ScrollProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#0f1217",
  },
  scroll: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
});
