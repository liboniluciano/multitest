import {MigrationInterface, QueryRunner} from "typeorm";

export class createEmployee1640393784738 implements MigrationInterface {
    name = 'createEmployee1640393784738'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`employee\` (\`id\` int NOT NULL AUTO_INCREMENT, \`registration_date\` datetime NOT NULL, \`cpf\` bigint NOT NULL, \`name\` varchar(100) NOT NULL, \`uf_born\` varchar(2) NOT NULL, \`salary\` decimal(6,2) NOT NULL, \`status\` bit NOT NULL, \`id_level\` int NULL, \`id_role\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`employee\` ADD CONSTRAINT \`FK_b9af4219f510d553762e9f584ce\` FOREIGN KEY (\`id_level\`) REFERENCES \`level\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`employee\` ADD CONSTRAINT \`FK_a8c8de607bfbb7352b16a6ee903\` FOREIGN KEY (\`id_role\`) REFERENCES \`role\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`employee\` DROP FOREIGN KEY \`FK_a8c8de607bfbb7352b16a6ee903\``);
        await queryRunner.query(`ALTER TABLE \`employee\` DROP FOREIGN KEY \`FK_b9af4219f510d553762e9f584ce\``);
        await queryRunner.query(`DROP TABLE \`employee\``);
    }

}
