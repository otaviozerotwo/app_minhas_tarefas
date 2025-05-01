import 'reflect-metadata';
import React, { useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { initializeDatabse } from "./src/services/database";
import { Routes } from './src/navigation';

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    const setup = async () => {
      await initializeDatabse();
      setDbInitialized(true);
    }

    setup();
  }, []);

  if (!dbInitialized) {
    return (
      <SafeAreaView>
        <Text>Carregando...</Text>
      </SafeAreaView>
    )
  }
  return <Routes />
}