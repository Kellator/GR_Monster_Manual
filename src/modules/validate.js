const validate = values => {
    const errors = {}
    if (!values.monster_name) {
      errors.monster_name = 'Required'
    }
    if (!values.monster_category) {
      errors.monster_type = 'Required'
    }
    if (!values.monster_level) {
      errors.monster_level = 'Required'
    }
    if (!values.monster_body_points) {
      errors.monster_body_points = 'Required'
    }
    return errors
  }
  
  export default validate