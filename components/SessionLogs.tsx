import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { getSessionLogs, removeSession, SessionLog } from "../redux/actions";
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

  const removeLog = (log: SessionLog) => dispatch(removeSession(log));

  return (
    <View
      style={{
        flex: 1,
        marginTop: 10,
        marginBottom: 20,
        borderBottomColor: "#78BFEF",
        borderBottomWidth: 2,
        minHeight: 300,
      }}
    >
      <MontserratText
        style={{
          fontSize: 22,
          textDecorationLine: "none",
          textAlign: "center",
        }}
      >
        Session Logs
      </MontserratText>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-evenly",
          maxHeight: 10,
        }}
      >
        <MontserratText
          style={{
            fontSize: 18,
            textDecorationLine: "none",
          }}
        >
          Date
        </MontserratText>
        <MontserratText
          style={{
            fontSize: 18,
            textDecorationLine: "none",
          }}
        >
          Duration
        </MontserratText>
        <MontserratText
          style={{
            fontSize: 18,
            textDecorationLine: "none",
          }}
        >
          Notes
        </MontserratText>
      </View>
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
                  <MontserratText
                    style={{
                      fontSize: 20,
                      paddingLeft: 10,
                      color: "#64676D",
                      textDecorationLine: "none",
                    }}
                  >
                    {item.date}
                  </MontserratText>
                  <MontserratText
                    style={{
                      fontSize: 18,
                      paddingLeft: 10,
                      color: "#64676D",
                      textDecorationLine: "none",
                    }}
                  >
                    {item.duration} Minutes
                  </MontserratText>
                  <MontserratText
                    style={{
                      fontSize: 18,
                      paddingLeft: 10,
                      color: "#64676D",
                      textDecorationLine: "none",
                    }}
                  >
                    {item.notes}
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
