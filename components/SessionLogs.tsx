import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { getSessionLogs, SessionLog } from "../redux/actions";
import { Button, FlatList, TouchableOpacity, View } from "react-native";
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
    const index = logs.indexOf(log);
    if (index !== -1) {
      console.log("DELETE LOG:", log);
    }
  };

  return (
    <View style={{ flex: 1, marginTop: 44, paddingHorizontal: 20 }}>
      <MontserratText style={{ fontSize: 22 }}>Session Logs</MontserratText>
      <View style={{ flex: 1, marginTop: 12 }}>
        <FlatList
          data={logs}
          keyExtractor={(item) => logs.indexOf(item).toString()}
          renderItem={({ item }) => {
            return (
              <View style={{ marginVertical: 12 }}>
                <View style={{ flexDirection: "row", flex: 1 }}>
                  <View style={{ flex: 1, marginLeft: 12 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 10,
                        alignItems: "center",
                      }}
                    >
                      <MontserratText
                        style={{
                          fontSize: 18,
                          paddingLeft: 10,
                          color: "#64676D",
                        }}
                      >
                        Date: {item.date}
                      </MontserratText>
                      <MontserratText
                        style={{
                          fontSize: 18,
                          paddingLeft: 10,
                          color: "#64676D",
                        }}
                      >
                        Duration: {item.duration}
                      </MontserratText>
                      <MontserratText
                        style={{
                          fontSize: 18,
                          paddingLeft: 10,
                          color: "#64676D",
                        }}
                      >
                        Notes: {item.notes}
                      </MontserratText>
                      <Button title={"X"} onPress={() => removeLog(item)} />
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
