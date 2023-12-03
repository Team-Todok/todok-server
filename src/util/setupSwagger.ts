import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

/**
 * Swagger 세팅
 *
 * @param {INestApplication} app
 */
export function setupSwagger(app: INestApplication): void {
  const options = new DocumentBuilder()
    .setTitle('토독 API Docs')
    .setDescription(
      `
      해당 API 명세서는 Swagger를 사용해 작성되었습니다.
      BASE URL: https://port-0-reading-talk-server-5mk12alp6wy34y.sel5.cloudtype.app/
    `,
    )
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/docs', app, document);
}
