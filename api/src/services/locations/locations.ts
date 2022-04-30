import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const locations = () => {
  return db.location.findMany()
}

export const location = ({ id }: Prisma.LocationWhereUniqueInput) => {
  return db.location.findUnique({
    where: { id },
  })
}

interface CreateLocationArgs {
  input: Prisma.LocationCreateInput
}

export const createLocation = ({ input }: CreateLocationArgs) => {
  return db.location.create({
    data: input,
  })
}

interface UpdateLocationArgs extends Prisma.LocationWhereUniqueInput {
  input: Prisma.LocationUpdateInput
}

export const updateLocation = ({ id, input }: UpdateLocationArgs) => {
  return db.location.update({
    data: input,
    where: { id },
  })
}

export const deleteLocation = ({ id }: Prisma.LocationWhereUniqueInput) => {
  return db.location.delete({
    where: { id },
  })
}

export const Location = {
  created_by_user: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof location>>
  ) => db.location.findUnique({ where: { id: root.id } }).created_by_user(),
}
