import React, { useState, useRef, useEffect } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, useColorScheme,
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

const TABS = [
  { key: 'mon',    label: 'Mon/Tue', session: MON_TUE },
  { key: 'wed',    label: 'Wed/Thu', session: WED_THU },
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
    };
    const textMap = {
      '#1D9E75': dark ? '#5DCAA5' : '#085041',
      '#185FA5': dark ? '#85B7EB' : '#0C447C',
      '#534AB7': dark ? '#AFA9EC' : '#3C3489',
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
            style={[styles.actionBtn, { backgroundColor: dark ? '#1A3A2A' : '#E1F5EE' }]}
            onPress={() => Linking.openURL('playmetrics://')}
            activeOpacity={0.7}
          >
            <Text style={[styles.actionText, { color: '#1D9E75' }]}>Open PlayMetrics</Text>
          </TouchableOpacity>
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

      <SessionScreen
        key={activeTab}
        session={TABS[activeTab].session}
        storageKey={TABS[activeTab].key}
        weekKey={weekKey}
      />
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
});
