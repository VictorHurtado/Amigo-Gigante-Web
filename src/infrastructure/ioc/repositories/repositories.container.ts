import { ContainerModule, ContainerModuleLoadOptions } from "inversify";

import type { IAnimalRepository } from "@/domain/repositories/IAnimalRepository";
import type { IAuthRepository } from "@/domain/repositories/IAuthRepository";
import type { IDebugRepository } from "@/domain/repositories/IDebugRepository";
import type { IFoundationRepository } from "@/domain/repositories/IFoundationRepository";
import { AnimalRepository } from "@/infrastructure/repositories/AnimalRepository";
import { AuthRepository } from "@/infrastructure/repositories/AuthRepository";
import { DebugRepository } from "@/infrastructure/repositories/DebugRepository";
import { FoundationRepository } from "@/infrastructure/repositories/FoundationRepository";
import { REPOSITORY_TYPES } from "./repositories.types";

const repositoriesModule = new ContainerModule(
  ({ bind }: ContainerModuleLoadOptions) => {
    bind<IDebugRepository>(REPOSITORY_TYPES.DebugRepository)
      .to(DebugRepository)
      .inSingletonScope();

    bind<IAnimalRepository>(REPOSITORY_TYPES.AnimalRepository)
      .to(AnimalRepository)
      .inSingletonScope();

    bind<IAuthRepository>(REPOSITORY_TYPES.AuthRepository)
      .to(AuthRepository)
      .inSingletonScope();

    bind<IFoundationRepository>(REPOSITORY_TYPES.FoundationRepository)
      .to(FoundationRepository)
      .inSingletonScope();
  },
);

export { repositoriesModule };
