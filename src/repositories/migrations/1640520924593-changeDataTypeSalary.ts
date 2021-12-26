import {MigrationInterface, QueryRunner} from "typeorm";

export class changeDataTypeSalary1640520924593 implements MigrationInterface {
    name = 'changeDataTypeSalary1640520924593'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`employee\` CHANGE \`salary\` \`salary\` decimal(8,2) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`employee\` CHANGE \`salary\` \`salary\` decimal(6,2) NOT NULL`);
    }

}
