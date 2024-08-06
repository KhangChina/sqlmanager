import { Injectable } from '@nestjs/common';
import { CreateSubServiceDto } from './dto/create-sub-service.dto';
import { UpdateSubServiceDto } from './dto/update-sub-service.dto';
import { DataSource } from 'typeorm';

@Injectable()
export class SubServicesService {
  constructor(private dataSource: DataSource) {}
  create(createSubServiceDto: CreateSubServiceDto) {
    return 'This action adds a new subService';
  }

  async findAll() {
    const rawData = await this.dataSource.query("SELECT * FROM servicesubcategory LIMIT 3");
    return rawData;
  }

  async findOne(id: number) {
    const rawData = await this.dataSource.query(`SELECT * FROM servicesubcategory where id=${id}`);
    return rawData;
  }

  update(id: number, updateSubServiceDto: UpdateSubServiceDto) {
    return `This action updates a #${id} subService`;
  }

  remove(id: number) {
    return `This action removes a #${id} subService`;
  }
}
