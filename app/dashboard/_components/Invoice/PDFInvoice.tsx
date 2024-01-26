"use client";
import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Font,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
  },
  table: {
    // display: "table",
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    marginTop: 10,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCell: {
    width: "10%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    padding: 8,
    fontFamily: "Times-Roman",
  },
});

const PDFInvoice = () => {
  return (
    <p>PDF Document</p>
    // <Document>
    //   <Page size="SRA0" style={styles.page}>
    //     <View style={styles.table}>
    //       <View style={styles.tableRow}>
    //         <Text
    //           style={{
    //             fontWeight: 800,
    //             width: "10%",
    //             borderStyle: "solid",
    //             borderWidth: 1,
    //             borderColor: "#bfbfbf",
    //             padding: 8,
    //             fontSize: 20,
    //           }}
    //         >
    //           Comment
    //         </Text>
    //       </View>
    //     </View>
    //   </Page>
    // </Document>
  );
};

export default PDFInvoice;
