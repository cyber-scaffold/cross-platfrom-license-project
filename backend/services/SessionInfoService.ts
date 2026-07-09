import { v4 as uuidv4 } from "uuid";
import { injectable, inject } from "inversify";

import { IOCContainer } from "@/backend/cores/IOCContainer";
import { ApplicationConfigManager } from "@/backend/commons/Application/ApplicationConfigManager";

import type { interfaces } from "inversify";

/**
 * 会话级别的服务就特别适合用 RequestScope 作用域
 * **/
@injectable()
export class SessionInfoService {

  private id = uuidv4();

  constructor (
    @inject(ApplicationConfigManager) private readonly $ApplicationConfigManager: ApplicationConfigManager
  ) { };

  public async getSessionInfo() {
    return this.id;
  };

};

IOCContainer.bind(SessionInfoService).toSelf().inRequestScope();