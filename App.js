import React, { useState, useRef, useEffect } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView, StyleSheet, useColorScheme,
  SafeAreaView, Animated, Dimensions, Linking,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Updates from 'expo-updates';
import SessionScreen from './src/SessionScreen';
import { MON_TUE, WED_THU, WEEK_LABEL } from './src/drills';

function UpdateScreen() {
  const [status, setStatus] = useState('checking');

  useEffect(() => {
    checkForUpdate();
  }, []);

  const checkForUpdate = async () => {
    try {
      if (!Updates.isEnabled) { setStatus('done'); return; }
      setStatus('checking');
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        setStatus('downloading');
        await Updates.fetchUpdateAsync();
        setStatus('ready');
        setTimeout(() => Updates.reloadAsync(), 1500);
      } else {
        setStatus('done');
      }
    } catch (e) {
      setStatus('done');
    }
  };

  if (status === 'done') return null;

  return (
    <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 999, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 28, fontWeight: '700', color: '#1D9E75', marginBottom: 30 }}>Coach's Plan</Text>
      {status === 'checking' && (
        <>
          <Text style={{ fontSize: 16, fontWeight: '600', color: '#8E8E93' }}>Checking for updates...</Text>
          <View style={{ width: 200, height: 4, backgroundColor: '#1C1C1E', borderRadius: 2, marginTop: 20, overflow: 'hidden' }}>
            <View style={{ width: '30%', height: '100%', backgroundColor: '#1D9E75', borderRadius: 2 }} />
          </View>
        </>
      )}
      {status === 'downloading' && (
        <>
          <Text style={{ fontSize: 16, fontWeight: '600', color: '#8E8E93' }}>Downloading update...</Text>
          <View style={{ width: 200, height: 4, backgroundColor: '#1C1C1E', borderRadius: 2, marginTop: 20, overflow: 'hidden' }}>
            <View style={{ width: '70%', height: '100%', backgroundColor: '#1D9E75', borderRadius: 2 }} />
          </View>
        </>
      )}
      {status === 'ready' && (
        <>
          <Text style={{ fontSize: 16, fontWeight: '600', color: '#1D9E75' }}>Update ready</Text>
          <Text style={{ fontSize: 14, color: '#8E8E93', marginTop: 8 }}>Restarting...</Text>
          <View style={{ width: 200, height: 4, backgroundColor: '#1C1C1E', borderRadius: 2, marginTop: 20, overflow: 'hidden' }}>
            <View style={{ width: '100%', height: '100%', backgroundColor: '#1D9E75', borderRadius: 2 }} />
          </View>
        </>
      )}
    </View>
  );
}

// Try to get PDF list from drills module
let DRILL_PDFS = [];
try {
  const drillsModule = require('./src/drills');
  if (drillsModule.DRILL_PDFS) DRILL_PDFS = drillsModule.DRILL_PDFS;
} catch (e) {}

const TABS = [
  { key: 'mon',    label: 'Mon/Tue', session: MON_TUE },
  { key: 'wed',    label: 'Wed/Thu', session: WED_THU },
  { key: 'pdfs',   label: 'PDFs' },
  { key: 'pm',     label: 'PlayMetrics' },
];

function getWeekKey() {
  const now = new Date();
  const day = now.getDay() || 7;
  const mon = new Date(now);
  mon.setDate(now.getDate() - day + 1);
  return mon.toISOString().slice(0, 10);
}

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const scheme = useColorScheme();
  const dark = scheme === 'dark';
  const weekKey = getWeekKey();

  const [refreshing, setRefreshing] = useState(false);

  const checkNewDrills = async () => {
    setRefreshing(true);
    try {
      if (Updates.isEnabled) {
        const update = await Updates.checkForUpdateAsync();
        if (update.isAvailable) {
          await Updates.fetchUpdateAsync();
          Updates.reloadAsync();
          return;
        }
      }
    } catch (e) {}
    setRefreshing(false);
    setTimeout(() => setRefreshing(false), 2000);
  };

  const TAB_COLORS = {
    mon: '#185FA5',
    wed: '#534AB7',
    pdfs: '#D4842A',
    pm: '#1D9E75',
  };

  const activeColor = TAB_COLORS[TABS[activeTab].key];

  const getTabStyle = (i) => {
    const isActive = i === activeTab;
    const color = TAB_COLORS[TABS[i].key];
    if (!isActive) return {
      bg: 'transparent',
      text: dark ? '#8E8E93' : '#6C6C70',
    };
    const bgMap = {
      '#1D9E75': dark ? '#0B2B22' : '#E1F5EE',
      '#185FA5': dark ? '#0A1E35' : '#E6F1FB',
      '#534AB7': dark ? '#1C1945' : '#EEEDFE',
      '#D4842A': dark ? '#2B1E0A' : '#FFF3E6',
    };
    const textMap = {
      '#1D9E75': dark ? '#5DCAA5' : '#085041',
      '#185FA5': dark ? '#85B7EB' : '#0C447C',
      '#534AB7': dark ? '#AFA9EC' : '#3C3489',
      '#D4842A': dark ? '#E8A050' : '#8B5A1A',
    };
    return { bg: bgMap[color], text: textMap[color] };
  };

  return (
    <SafeAreaView style={[styles.root, { backgroundColor: dark ? '#000' : '#F2F2F7' }]}>
      <StatusBar style={dark ? 'light' : 'dark'} />
      <UpdateScreen />

      <View style={[styles.header, {
        backgroundColor: dark ? '#1C1C1E' : '#fff',
        borderBottomColor: dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.1)',
      }]}>
        <View style={styles.headerRow}>
          <Text style={[styles.appTitle, { color: dark ? '#fff' : '#1C1C1E' }]}>Coach's Plan</Text>
          <View style={[styles.weekChip, {
            backgroundColor: dark ? '#2C2C2E' : '#F2F2F7',
            borderColor: dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
          }]}>
            <Text style={[styles.weekChipText, { color: dark ? '#8E8E93' : '#6C6C70' }]}>{WEEK_LABEL}</Text>
          </View>
        </View>

        <View style={styles.tabBar}>
          {TABS.map((tab, i) => {
            const s = getTabStyle(i);
            return (
              <TouchableOpacity
                key={tab.key}
                style={[styles.tab, { backgroundColor: s.bg }]}
                onPress={() => setActiveTab(i)}
                activeOpacity={0.7}
              >
                <Text style={[styles.tabText, { color: s.text }]}>{tab.label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.quickActions}>
          <TouchableOpacity
            style={[styles.actionBtn, { backgroundColor: dark ? '#2C2C2E' : '#F2F2F7' }]}
            onPress={checkNewDrills}
            activeOpacity={0.7}
          >
            <Text style={[styles.actionText, { color: dark ? '#8E8E93' : '#6C6C70' }]}>
              {refreshing ? 'Checking...' : 'Check for New Drills'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Drill sessions */}
      {(TABS[activeTab].key === 'mon' || TABS[activeTab].key === 'wed') && (
        <SessionScreen
          key={activeTab}
          session={TABS[activeTab].session}
          storageKey={TABS[activeTab].key}
          weekKey={weekKey}
        />
      )}

      {/* PDFs tab */}
      {TABS[activeTab].key === 'pdfs' && (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16 }}>
          {DRILL_PDFS.length > 0 ? DRILL_PDFS.map((pdf, i) => (
            <TouchableOpacity key={i} onPress={() => Linking.openURL(pdf.url)}
              style={[styles.pdfCard, { backgroundColor: dark ? '#1C1C1E' : '#fff', borderColor: dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.1)' }]}>
              <Text style={{ fontSize: 15, fontWeight: '600', color: dark ? '#fff' : '#1C1C1E' }}>{pdf.name}</Text>
              {pdf.drill && <Text style={{ fontSize: 12, color: dark ? '#8E8E93' : '#6C6C70', marginTop: 4 }}>{pdf.drill}</Text>}
            </TouchableOpacity>
          )) : (
            <>
              <Text style={{ fontSize: 14, color: dark ? '#8E8E93' : '#6C6C70', textAlign: 'center', marginTop: 40 }}>
                Drill PDFs will appear here when received from weekly emails.
              </Text>
              <Text style={{ fontSize: 12, color: dark ? '#555' : '#999', textAlign: 'center', marginTop: 8 }}>
                PDFs are automatically grabbed from Mauro's training session emails.
              </Text>
            </>
          )}
        </ScrollView>
      )}

      {/* PlayMetrics tab */}
      {TABS[activeTab].key === 'pm' && (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
          <TouchableOpacity
            onPress={() => {
              // Universal link — iOS opens the app directly if installed
              Linking.openURL('https://app.playmetrics.com');
            }}
            style={{ paddingVertical: 16, paddingHorizontal: 40, borderRadius: 12, backgroundColor: '#1D9E75', marginBottom: 16 }}
            activeOpacity={0.7}
          >
            <Text style={{ fontSize: 16, fontWeight: '700', color: '#fff' }}>Open PlayMetrics</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://app.playmetrics.com')}
            style={{ paddingVertical: 12, paddingHorizontal: 30, borderRadius: 10, borderWidth: 1, borderColor: dark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)' }}
            activeOpacity={0.7}
          >
            <Text style={{ fontSize: 14, fontWeight: '600', color: dark ? '#8E8E93' : '#6C6C70' }}>Open PlayMetrics Web</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  header: {
    paddingBottom: 10,
    borderBottomWidth: 0.5,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingTop: 12,
    paddingBottom: 10,
  },
  appTitle: { fontSize: 24, fontWeight: '700', letterSpacing: -0.5 },
  weekChip: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 0.5,
  },
  weekChipText: { fontSize: 12, fontWeight: '500' },
  tabBar: {
    flexDirection: 'row',
    paddingHorizontal: 14,
    gap: 6,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  tabText: { fontSize: 13, fontWeight: '600' },
  quickActions: {
    flexDirection: 'row',
    paddingHorizontal: 14,
    paddingTop: 8,
    gap: 6,
  },
  actionBtn: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  actionText: { fontSize: 12, fontWeight: '600' },
  pdfCard: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 0.5,
    marginBottom: 8,
  },
});
