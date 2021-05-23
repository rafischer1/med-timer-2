import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { getSessionLogs, removeSession, SessionLog } from "../redux/actions";
import { Button, FlatList, StyleSheet, View } from "react-native";
import { MontserratText } from "./MontserratText";
import { SessionLogsState } from "../redux/reducers";

export default function SessionLogs() {
  const [logs, setLogs] = useState([]);
  let sessionLogs = useSelector((state: SessionLogsState) => state.sessionLogs);

  const dispatch = useDispatch();

  const fetchSessionLogs = () => dispatch(getSessionLogs());

  useEffect(() => {
    sessionLogs = fetchSessionLogs().payload;
    setLogs(() => sessionLogs);
  }, []);

  const removeLog = (log: SessionLog) => {
    // dispatch(removeSession(log));
    const index = logs.indexOf(log);
    if (index !== -1) {
      logs.length > 1
        ? setLogs(() => logs.filter((l) => l !== log))
        : setLogs(() => []);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        marginTop: 10,
        marginBottom: 20,
        borderBottomWidth: 2,
        minHeight: 300,
      }}
    >
      <MontserratText
        style={{
          fontSize: 22,
          textAlign: "center",
          borderBottomColor: "#78BFEF",
        }}
      >
        Session Logs
      </MontserratText>
      {logs.length > 0 ? (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
            maxHeight: 10,
          }}
        >
          <MontserratText style={styles.theadFont}>Date</MontserratText>
          <MontserratText style={styles.theadFont}>Duration</MontserratText>
          <MontserratText style={styles.theadFont}>Notes</MontserratText>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
            maxHeight: 10,
          }}
        >
          <MontserratText style={styles.font}>
            (No Sessions)
          </MontserratText>
        </View>
      )}

      <View style={{ flex: 1, marginTop: 12 }}>
        <FlatList
          data={logs}
          keyExtractor={(item) => logs.indexOf(item).toString()}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  flex: 1,
                  marginLeft: 12,
                  borderRadius: 5,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 5,
                    marginBottom: 5,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <MontserratText style={styles.font}>
                    {item.date}
                  </MontserratText>
                  <MontserratText style={styles.font}>
                    {item.duration} Minutes
                  </MontserratText>
                  <MontserratText style={styles.font}>
                    {item.notes}
                  </MontserratText>
                  <Button
                    title={"🗑"}
                    onPress={() => removeLog(item)}
                    color={"#f1f1f1"}
                  />
                </View>
              </View>
            );
          }}
          showsVerticalScrollIndicator={true}
          centerContent={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  font: {
    fontSize: 18,
    textDecorationLine: "underline",
    textDecorationColor: "white",
    color: "#333",
  },
  theadFont: {
    fontSize: 20,
    borderBottomColor: "#333",
  },
});
