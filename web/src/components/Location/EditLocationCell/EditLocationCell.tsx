import type { EditLocationById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import LocationForm from 'src/components/Location/LocationForm'

export const QUERY = gql`
  query EditLocationById($id: String!) {
    location: location(id: $id) {
      id
      created_at
      updated_at
      name
    }
  }
`
const UPDATE_LOCATION_MUTATION = gql`
  mutation UpdateLocationMutation($id: String!, $input: UpdateLocationInput!) {
    updateLocation(id: $id, input: $input) {
      id
      created_at
      updated_at
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ location }: CellSuccessProps<EditLocationById>) => {
  const [updateLocation, { loading, error }] = useMutation(UPDATE_LOCATION_MUTATION, {
    onCompleted: () => {
      toast.success('Location updated')
      navigate(routes.locations())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateLocation({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Location {location.id}</h2>
      </header>
      <div className="rw-segment-main">
        <LocationForm location={location} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
