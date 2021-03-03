export const Conditional = ({ sunnyWeather, horizontalPlace }) => {
  let url = sunnyWeather
    ? 'https://source.unsplash.com/800x600/?sun,'
    : 'https://source.unsplash.com/800x600/?rain'
  return (
    <div style={{ display: 'flex', justifyContent: horizontalPlace }}>
      <img
        src={`${url}`}
        style={{ boxShadow: '20px 20px #f2ff34', marginTop: '50px' }}
        alt='weather'
      />
    </div>
  )
}
