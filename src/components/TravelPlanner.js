import React, { useEffect, useState } from 'react';

const TravelPlanner = ({ data }) => {
  const [plannerDescription, setPlannerDescription] = useState('');

  const travel = () => {
    if (data?.weather && data.weather.length > 0) {
      const icon = data.weather[0].icon;

      if (icon === "01d" || icon === "01n") {
        setPlannerDescription("Travelers would probably appreciate a sunny day for exploring outdoor attractions, taking scenic walks, and capturing beautiful photographs.");
      } else if (icon === "02d" || icon === "02n") {
        setPlannerDescription('Cloudy weather may impact outdoor exploration plans, but it can also provide relief from intense sun exposure, making it more comfortable for certain activities.');
      } else if (
        icon === "03d" ||
        icon === "03n" ||
        icon === "04d" ||
        icon === "04n"
      ) {
        setPlannerDescription("Travelers may need to adjust their plans, seeking indoor activities or exploring destinations that are charming in drizzly weather. Some travelers might appreciate the quieter and cozier ambiance that drizzle brings.");
      } else if (icon === "09d" || icon === "09n") {
        setPlannerDescription(" Travelers may need to adjust plans and find indoor attractions, but some might enjoy the cozy and calming ambiance that rainy weather can bring.");
      } else if (icon === "10d" || icon === "10n") {
        setPlannerDescription(" Travelers might view snowy weather as an opportunity to experience winter activities, such as skiing or enjoying the charm of snow-covered landscapes. However, it could also disrupt travel plans and create transportation challenges.");
      } else {
        // Replace with the appropriate logic or remove if not needed
      }
    }
  };

  const former = () => {
    if (data?.weather && data.weather.length > 0) {
      const icon = data.weather[0].icon;

      if (icon === "01d" || icon === "01n") {
        setPlannerDescription(": A retired individual might feel a sense of nostalgia and warmth, reminiscing about the sunny days of their past, possibly associated with outdoor activities and vibrant memories.")
      } else if (icon === "02d" || icon === "02n") {
        setPlannerDescription(" A former professional might feel a sense of neutrality or could associate cloudy days with a mix of experiences depending on their past activities and memories associated with overcast weather.")
      } else if (
        icon === "03d" ||
        icon === "03n" ||
        icon === "04d" ||
        icon === "04n"
      ) {
        setPlannerDescription(" Depending on their background, a former professional might feel a sense of familiarity and comfort with drizzly weather, especially if it was common during their working years. It could trigger memories associated with working outdoors in light rain.")
      } else if (icon === "09d" || icon === "09n") {
        setPlannerDescription("A farmer might welcome the rain, associating it with positive outcomes for crops and a sense of relief after dry spells.")
      } else if (icon === "10d" || icon === "10n") {
        setPlannerDescription('A former professional, such as a retired person who worked outdoors, might have a mix of emotions. Positive associations may include memories of picturesque snowy landscapes, while negative aspects could involve the challenges associated with snow removal or working in cold conditions.')
      } 
    }
  };
  const Beachgoer = () => {
    if (data?.weather && data.weather.length > 0) {
      const icon = data.weather[0].icon;

      if (icon === "01d" || icon === "01n") {
        setPlannerDescription("Enthusiastic beach lovers would likely be thrilled, as a sunny day is perfect for sunbathing, swimming, and enjoying the beach atmosphere.") 
       } else if (icon === "02d" || icon === "02n") {
        setPlannerDescription("Those planning a beach day may find a cloudy sky less appealing as it might limit the enjoyment of the sun and create a cooler atmosphere. However, some beachgoers might appreciate the milder temperatures.") 
      } else if (
        icon === "03d" ||
        icon === "03n" ||
        icon === "04d" ||
        icon === "04n"
      ) {
        setPlannerDescription(" Drizzle might deter some beach enthusiasts due to the inconvenience of getting wet, while others may find it refreshing and enjoy the unique atmosphere it creates.")
       } else if (icon === "09d" || icon === "09n") {
        setPlannerDescription("Those planning a beach day may feel disappointed, as rain can limit outdoor beach activities and create an unfavorable atmosphere.") 
      } else if (icon === "10d" || icon === "10n") {
        setPlannerDescription("Individuals who typically enjoy beach activities may have a mixed response. Some might appreciate the beauty of snowfall but feel limited in terms of outdoor beach activities. Others may not be as accustomed to snowy conditions and find it less appealing.")  } 
    }
  };
  const Driver = () => {
    if (data?.weather && data.weather.length > 0) {
      const icon = data.weather[0].icon;

      if (icon === "01d" || icon === "01n") {
        setPlannerDescription("Drivers may find a sunny day pleasant for commuting, with clear visibility and dry roads contributing to a safer and more enjoyable driving experience.") 
      } else if (icon === "02d" || icon === "02n") {
        setPlannerDescription(" Cloudy days might contribute to reduced glare on the roads, making driving conditions more comfortable. However, prolonged overcast weather may impact visibility, especially during heavy cloud cover or rain.")
      } else if (
        icon === "03d" ||
        icon === "03n" ||
        icon === "04d" ||
        icon === "04n"
      ) {
        setPlannerDescription(" Drizzle can make driving conditions slippery, so drivers might approach the road with increased caution. On the positive side, it can also be a relief from more intense rain, providing better visibility and less risk of flooding.")
        } else if (icon === "09d" || icon === "09n") {
        setPlannerDescription("Rainy days might make driving more challenging, potentially leading to increased caution and concerns about road safety.")
       } else if (icon === "10d" || icon === "10n") {
        setPlannerDescription(" Snowy conditions present challenges for drivers, requiring extra caution due to slippery roads. While some drivers may find the winter scenery beautiful, others may feel stressed or anxious about navigating through snow and ice.")
       }
  };
};

  
  useEffect(() => {
    travel();
    former();
    Beachgoer();
  }, [data]);

  return (
    <div>
      <div className='travel_data'>
        <h3 onClick={travel}>Travel </h3>
        <h3 onClick={former}>Former </h3>
        <h3 onClick={Beachgoer}>Beachgoer</h3>
        <h3 onClick={Driver}>Driver </h3>
      </div>
      <div className='datadescription'><h3>{plannerDescription}</h3></div>
    </div>
  );
};

export default TravelPlanner;
