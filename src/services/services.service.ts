import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { DataSource } from 'typeorm';

@Injectable()
export class ServicesService {
  constructor(private dataSource: DataSource) {}
  create(createServiceDto: CreateServiceDto) {
    return 'This action adds a new service';
  }

  async findAll() {
    const rawData = await this.dataSource.query("SELECT id,name,org_id,servicefamily_id,description FROM service LIMIT 3");
    return rawData;
  }

  async findOne(id: number) {
    const rawData = await this.dataSource.query(`SELECT id,name,org_id,servicefamily_id,description FROM service where id= ${id}`);
    return rawData[0];
  }

  update(id: number, updateServiceDto: UpdateServiceDto) {
    return `This action updates a #${id} service`;
  }

  remove(id: number) {
    return `This action removes a #${id} service`;
  }

}
