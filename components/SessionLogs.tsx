import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { getSessionLogs, SessionLog } from "../redux/actions";
import { Button, FlatList, View } from "react-native";
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
      dispatch(removeLog(log));
    }
  };

  return (
    <View style={{ flex: 1, marginTop: 44, paddingHorizontal: 20 }}>
      <MontserratText style={{ fontSize: 22, textDecorationLine: "none" }}>
        Session Logs
      </MontserratText>
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
                  borderTopColor: "green",
                  borderBottomColor: "green",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 10,
                    alignItems: "center",
                  }}
                >
                  <MontserratText
                    style={{
                      fontSize: 20,
                      paddingLeft: 10,
                      color: "#64676D",
                      textDecorationLine: "none",
                    }}
                  >
                    Date: {item.date}
                  </MontserratText>
                  <MontserratText
                    style={{
                      fontSize: 18,
                      paddingLeft: 10,
                      color: "#64676D",
                      textDecorationLine: "none",
                    }}
                  >
                    Duration: {item.duration} Minutes
                  </MontserratText>
                  <MontserratText
                    style={{
                      fontSize: 18,
                      paddingLeft: 10,
                      color: "#64676D",
                      textDecorationLine: "none",
                    }}
                  >
                    Notes: [{item.notes}]
                  </MontserratText>
                  <Button title={"🗑"} onPress={() => removeLog(item)} />
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
