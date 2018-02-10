const validate = values => {
    const errors = {}
    if (!values.monster_name) {
      errors.monster_name = 'Required'
    }
    if (!values.monster_category) {
      errors.monster_category = 'Required'
    }
    if (!values.monster_level) {
      errors.monster_level = 'Required'
    }
    if (!values.monster_body_points) {
      errors.monster_body_points = 'Required'
    }
    if (!values.weapon_type) {
      errors.weapon_type = 'Required'
    }
    if (!values.plus_strength_level) {
      errors.plus_strength_level = 'Required'
    }
    return errors
  }
  
  export default validate