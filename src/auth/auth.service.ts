import { Injectable } from '@nestjs/common'
import { InjectModel } from 'nestjs-typegoose'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { UserModel } from '../user/user.model'

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(UserModel)
    private readonly UserModel: ModelType<UserModel>
  ) {}

  async register(dto: any) {
    const newUser = new this.UserModel(dto)
    return newUser.save()
  }
}
