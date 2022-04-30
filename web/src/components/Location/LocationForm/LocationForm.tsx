import {
  Form,
  FormError,
  FieldError,
  Label,
  DatetimeLocalField,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'


const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}


const LocationForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.location?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="created_at"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Created at
        </Label>
        
          <DatetimeLocalField
            name="created_at"
            defaultValue={formatDatetime(props.location?.created_at)}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="created_at" className="rw-field-error" />

        <Label
          name="created_by_user_id"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Created by user id
        </Label>
        
          <TextField
            name="created_by_user_id"
            defaultValue={props.location?.created_by_user_id}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="created_by_user_id" className="rw-field-error" />

        <Label
          name="updated_at"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Updated at
        </Label>
        
          <DatetimeLocalField
            name="updated_at"
            defaultValue={formatDatetime(props.location?.updated_at)}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="updated_at" className="rw-field-error" />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        
          <TextField
            name="name"
            defaultValue={props.location?.name}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="is_public"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Is public
        </Label>
        
          <CheckboxField
            name="is_public"
            defaultChecked={props.location?.is_public}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="is_public" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default LocationForm
