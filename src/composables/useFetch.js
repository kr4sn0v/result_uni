import { ref } from 'vue'

export function useFetch() {
  const isLoading = ref(false)
  const error = ref('')

  async function fetchData(url, options = {}) {
    isLoading.value = true
    error.value = ''

    try {
      const response = await fetch(url, {
        ...options,
        body: options.body ? JSON.stringify(options.body) : null,
      })

      if (!response.ok) {
        throw new Error('Fetch error')
      }

      return await response.json()
    } catch (err) {
      error.value = err.message
    } finally {
      isLoading.value = false
    }
  }
  return { isLoading, error, fetchData }
}
