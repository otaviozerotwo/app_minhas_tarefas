import { AppDataSource } from "../data-source";

export async function initializeDatabse() {
  try {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();

      console.log('Banco de dados inicializado com sucesso!');
    }
  } catch (error) {
    console.error('Erro ao inicializar o banco dados:', error);
  }
}