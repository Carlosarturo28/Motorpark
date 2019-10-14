import apisauce from 'apisauce'

const create = () => {
  const api = apisauce.create({
    headers: {
      Authorization: 'Bearer',
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json'
    },
    timeout: 20000
  })

  const getVehicles = () => api.get('/vehicles')
  const updateVehicle = (data, id) => api.put(`/vehicles/${id}`, data)
  const searchVehicle = brand => api.get(`/vehicles/search/${brand}`)
  const addBrand = newBrand => api.post(`/brands`, newBrand)
  const addVehicle = data => api.post(`/vehicles/`, data)
  const deleteVehicle = id => api.delete(`/vehicles/${id}`)
  const getBrands = () => api.get('/brands')

  return {
    getVehicles,
    addBrand,
    addVehicle,
    updateVehicle,
    searchVehicle,
    deleteVehicle,
    getBrands
  }
}

const api = create()

export default api