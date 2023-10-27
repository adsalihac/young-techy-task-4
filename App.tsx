import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function App() {
  const [selectedCalender, setSelectedCalender] = React.useState(0);

  const [calender, setCalender] = React.useState([
    {
      day: "Monday",
      date: 1,
    },
    {
      day: "Tuesday",
      date: 2,
    },
    {
      day: "Wednesday",
      date: 3,
    },
    {
      day: "Thursday",
      date: 4,
    },
    {
      day: "Friday",
      date: 5,
    },
    {
      day: "Saturday",
      date: 6,
    },
    {
      day: "Sunday",
      date: 7,
    },
  ]);

  const [activities, setActivities] = React.useState([
    {
      title: "Workout",
      time: "6:00 AM",
    },
    {
      title: "Breakfast",
      time: "7:00 AM",
    },
    {
      title: "Work",
      time: "8:00 AM",
    },
    {
      title: "Lunch",
      time: "12:00 PM",
    },
    {
      title: "Work",
      time: "1:00 PM",
    },
    {
      title: "Dinner",
      time: "7:00 PM",
    },
    {
      title: "Sleep",
      time: "10:00 PM",
    },
  ]);



  return (
    <View style={styles.container}>
      <View
        style={{
          height: 70,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#000",
            fontSize: 14,
            fontWeight: "bold",
          }}
        >
          Create Task
        </Text>
      </View>

      <View>
        <FlatList
          data={calender}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          contentContainerStyle={{
            paddingHorizontal: 20,
          }}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => setSelectedCalender(index)}
              style={{
                height: 80,
                width: 70,
                backgroundColor:
                  selectedCalender === index ? "#4047BF" : "#F3F3F3",
                marginRight: 10,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: selectedCalender === index ? "#fff" : "#000",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {item.date}
              </Text>

              <Text
                style={{
                  color: selectedCalender === index ? "#fff" : "#000",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {item.day.substring(0, 3)}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={{
        marginTop: 20,
      }}>
        <FlatList
          data={activities}
          contentContainerStyle={{
            paddingHorizontal: 20,
          }}
          ListEmptyComponent={
            <View style={{
              flex:1,
              justifyContent:"center",
              alignItems:"center"
            }}>
              <Text>No Activities</Text>
            </View>
          }
          renderItem={({ item, index }) => (
            <View
              style={{
                height: 80,
                width: "100%",
                backgroundColor: "#F3F3F3",
                borderRadius: 10,
                marginBottom: 10,
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 20,
              }}
            >
              <Text style={{
                fontSize: 17,
                fontWeight: "bold",
              }}>{item.title}</Text>
              <Text style={{
                fontSize: 12,
                fontWeight: "bold",
              }}>{item.time}</Text>
            </View>
          )}
          ListHeaderComponent={
            <View>
              <Text>Header</Text>
            </View>
           }
         ListFooterComponent={
          <View>
            <Text>Footer</Text>
          </View>
         }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
