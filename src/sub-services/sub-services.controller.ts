import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubServicesService } from './sub-services.service';
import { CreateSubServiceDto } from './dto/create-sub-service.dto';
import { UpdateSubServiceDto } from './dto/update-sub-service.dto';

@Controller('sub-services')
export class SubServicesController {
  constructor(private readonly subServicesService: SubServicesService) {}

  @Post()
  create(@Body() createSubServiceDto: CreateSubServiceDto) {
    return this.subServicesService.create(createSubServiceDto);
  }

  @Get()
  findAll() {
    return this.subServicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subServicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubServiceDto: UpdateSubServiceDto) {
    return this.subServicesService.update(+id, updateSubServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subServicesService.remove(+id);
  }
}
