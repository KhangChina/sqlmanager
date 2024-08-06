import { Injectable } from '@nestjs/common';
import { CreateSubServiceDto } from './dto/create-sub-service.dto';
import { UpdateSubServiceDto } from './dto/update-sub-service.dto';

@Injectable()
export class SubServicesService {
  create(createSubServiceDto: CreateSubServiceDto) {
    return 'This action adds a new subService';
  }

  findAll() {
    return `This action returns all subServices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subService`;
  }

  update(id: number, updateSubServiceDto: UpdateSubServiceDto) {
    return `This action updates a #${id} subService`;
  }

  remove(id: number) {
    return `This action removes a #${id} subService`;
  }
}
