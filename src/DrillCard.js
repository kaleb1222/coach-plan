import React, { useState, useRef } from 'react';
import {
  View, Text, TouchableOpacity, Animated, StyleSheet, useColorScheme, Modal,
  SafeAreaView, ActivityIndicator, Dimensions,
} from 'react-native';
import { WebView } from 'react-native-webview';
import * as Haptics from 'expo-haptics';

export default function DrillCard({ drill, index, accentColor, badgeBg, badgeText }) {
  const [open, setOpen] = useState(false);
  const [pdfVisible, setPdfVisible] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(true);
  const anim = useRef(new Animated.Value(0)).current;
  const scheme = useColorScheme();
  const dark = scheme === 'dark';

  const toggle = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    const toValue = open ? 0 : 1;
    setOpen(!open);
    Animated.spring(anim, { toValue, useNativeDriver: false, tension: 80, friction: 10 }).start();
  };

  const openPdf = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setPdfLoading(true);
    setPdfVisible(true);
  };

  const rotate = anim.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '90deg'] });

  return (
    <View style={[styles.item, { borderBottomColor: dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' }]}>
      <TouchableOpacity onPress={toggle} style={styles.row} activeOpacity={0.7}>
        <View style={[styles.num, { backgroundColor: badgeBg }]}>
          <Text style={[styles.numText, { color: badgeText }]}>{index + 1}</Text>
        </View>
        <View style={styles.rowBody}>
          <Text style={[styles.name, { color: dark ? '#fff' : '#1C1C1E' }]}>{drill.name}</Text>
          <Text style={[styles.summary, { color: dark ? '#8E8E93' : '#6C6C70' }]}>{drill.summary}</Text>
        </View>
        <Animated.Text style={[styles.chevron, { color: dark ? '#636366' : '#C7C7CC', transform: [{ rotate }] }]}>
          ›
        </Animated.Text>
      </TouchableOpacity>

      {open && (
        <View style={styles.detail}>
          <Text style={[styles.detailText, { color: dark ? '#AEAEB2' : '#6C6C70' }]}>{drill.detail}</Text>
          {drill.points && drill.points.length > 0 && (
            <View style={styles.points}>
              {drill.points.map((pt, i) => (
                <View key={i} style={styles.pointRow}>
                  <Text style={[styles.dot, { color: dark ? '#636366' : '#C7C7CC' }]}>·</Text>
                  <Text style={[styles.pointText, { color: dark ? '#AEAEB2' : '#6C6C70' }]}>{pt}</Text>
                </View>
              ))}
            </View>
          )}
          <View style={styles.badgeRow}>
            <View style={[styles.badge, { backgroundColor: badgeBg }]}>
              <Text style={[styles.badgeText, { color: badgeText }]}>{drill.badge}</Text>
            </View>
            {drill.pdfUrl && (
              <TouchableOpacity onPress={openPdf} style={[styles.pdfBtn, { backgroundColor: badgeBg }]} activeOpacity={0.7}>
                <Text style={[styles.pdfBtnText, { color: badgeText }]}>View Diagram</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}

      {drill.pdfUrl && (
        <Modal visible={pdfVisible} animationType="slide" presentationStyle="pageSheet">
          <SafeAreaView style={[styles.modalContainer, { backgroundColor: dark ? '#000' : '#F2F2F7' }]}>
            <View style={[styles.modalHeader, { backgroundColor: dark ? '#1C1C1E' : '#fff', borderBottomColor: dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.1)' }]}>
              <Text style={[styles.modalTitle, { color: dark ? '#fff' : '#1C1C1E' }]} numberOfLines={1}>{drill.name}</Text>
              <TouchableOpacity onPress={() => setPdfVisible(false)} style={[styles.closeBtn, { backgroundColor: dark ? '#2C2C2E' : '#E5E5EA' }]} activeOpacity={0.7}>
                <Text style={[styles.closeBtnText, { color: dark ? '#fff' : '#1C1C1E' }]}>Done</Text>
              </TouchableOpacity>
            </View>
            {pdfLoading && (
              <View style={styles.loadingOverlay}>
                <ActivityIndicator size="large" color={accentColor} />
                <Text style={{ color: dark ? '#8E8E93' : '#6C6C70', marginTop: 10, fontSize: 14 }}>Loading diagram...</Text>
              </View>
            )}
            <WebView
              source={{ uri: 'https://docs.google.com/gview?embedded=true&url=' + encodeURIComponent(drill.pdfUrl) }}
              style={{ flex: 1, backgroundColor: dark ? '#000' : '#F2F2F7' }}
              onLoadEnd={() => setPdfLoading(false)}
              startInLoadingState={false}
            />
          </SafeAreaView>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    borderBottomWidth: 0.5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 13,
    gap: 12,
  },
  num: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  numText: { fontSize: 12, fontWeight: '600' },
  rowBody: { flex: 1 },
  name: { fontSize: 15, fontWeight: '600', letterSpacing: -0.2 },
  summary: { fontSize: 12, marginTop: 2, lineHeight: 17 },
  chevron: { fontSize: 22, fontWeight: '300', lineHeight: 26 },
  detail: {
    paddingLeft: 54,
    paddingRight: 16,
    paddingBottom: 14,
  },
  detailText: { fontSize: 13, lineHeight: 20 },
  points: { marginTop: 8, gap: 2 },
  pointRow: { flexDirection: 'row', gap: 6, alignItems: 'flex-start' },
  dot: { fontSize: 16, lineHeight: 20, fontWeight: '700' },
  pointText: { fontSize: 13, lineHeight: 20, flex: 1 },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 10,
    flexWrap: 'wrap',
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeText: { fontSize: 11, fontWeight: '600', letterSpacing: 0.2 },
  pdfBtn: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  pdfBtnText: { fontSize: 11, fontWeight: '600', letterSpacing: 0.2 },
  modalContainer: { flex: 1 },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
  },
  modalTitle: { fontSize: 16, fontWeight: '600', flex: 1, marginRight: 12 },
  closeBtn: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20 },
  closeBtnText: { fontSize: 15, fontWeight: '600' },
  loadingOverlay: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});