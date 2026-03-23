import React, { useState, useEffect } from 'react';
import {
  View, Text, ScrollView, StyleSheet, useColorScheme, TextInput, TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrillCard from './DrillCard';

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function getBadgeColors(accentColor, dark) {
  const map = {
    '#1D9E75': { bg: dark ? '#0B2B22' : '#E1F5EE', text: dark ? '#5DCAA5' : '#085041' },
    '#185FA5': { bg: dark ? '#0A1E35' : '#E6F1FB', text: dark ? '#85B7EB' : '#0C447C' },
    '#534AB7': { bg: dark ? '#1C1945' : '#EEEDFE', text: dark ? '#AFA9EC' : '#3C3489' },
  };
  return map[accentColor] || { bg: '#eee', text: '#333' };
}

export default function SessionScreen({ session, storageKey, weekKey }) {
  const scheme = useColorScheme();
  const dark = scheme === 'dark';
  const [notes, setNotes] = useState('');
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState('');

  const { bg, text: badgeText } = getBadgeColors(session.color, dark);

  const notesKey = `${storageKey}_${weekKey}`;

  useEffect(() => {
    AsyncStorage.getItem(notesKey).then(val => { if (val) setNotes(val); else setNotes(''); });
  }, [notesKey]);

  const saveNotes = async () => {
    await AsyncStorage.setItem(notesKey, draft);
    setNotes(draft);
    setEditing(false);
  };

  const startEdit = () => { setDraft(notes); setEditing(true); };

  return (
    <ScrollView
      style={[styles.scroll, { backgroundColor: dark ? '#000' : '#F2F2F7' }]}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={[styles.card, { backgroundColor: dark ? '#1C1C1E' : '#fff' }]}>
        <View style={[styles.cardHeader, { backgroundColor: session.color }]}>
          <Text style={styles.cardTitle}>{session.title}</Text>
          <Text style={styles.cardSub}>{session.subtitle}</Text>
        </View>
        <View>
          {session.drills.map((drill, i) => (
            <DrillCard
              key={drill.id}
              drill={drill}
              index={i}
              accentColor={session.color}
              badgeBg={bg}
              badgeText={badgeText}
            />
          ))}
        </View>
      </View>

      <View style={[styles.notesCard, { backgroundColor: dark ? '#1C1C1E' : '#fff' }]}>
        <View style={styles.notesHeader}>
          <Text style={[styles.notesLabel, { color: dark ? '#8E8E93' : '#6C6C70' }]}>Coach notes this week</Text>
          {!editing && (
            <TouchableOpacity onPress={startEdit}>
              <Text style={[styles.editBtn, { color: session.color }]}>{notes ? 'Edit' : 'Add'}</Text>
            </TouchableOpacity>
          )}
        </View>
        {editing ? (
          <View>
            <TextInput
              style={[styles.textInput, {
                backgroundColor: dark ? '#2C2C2E' : '#F2F2F7',
                color: dark ? '#fff' : '#1C1C1E',
                borderColor: session.color,
              }]}
              value={draft}
              onChangeText={setDraft}
              multiline
              autoFocus
              placeholder="Add reminders, focus areas, adjustments..."
              placeholderTextColor={dark ? '#636366' : '#AEAEB2'}
            />
            <View style={styles.btnRow}>
              <TouchableOpacity
                style={[styles.saveBtn, { backgroundColor: session.color }]}
                onPress={saveNotes}
              >
                <Text style={styles.saveBtnText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.cancelBtn, { borderColor: dark ? '#3A3A3C' : '#E5E5EA' }]}
                onPress={() => setEditing(false)}
              >
                <Text style={[styles.cancelBtnText, { color: dark ? '#AEAEB2' : '#6C6C70' }]}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : notes ? (
          <Text style={[styles.notesText, { color: dark ? '#AEAEB2' : '#6C6C70' }]}>{notes}</Text>
        ) : (
          <Text style={[styles.emptyNotes, { color: dark ? '#636366' : '#C7C7CC' }]}>
            Tap Add to write notes for this week's session.
          </Text>
        )}
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1 },
  content: { padding: 14 },
  card: { borderRadius: 14, overflow: 'hidden', marginBottom: 12 },
  cardHeader: { paddingHorizontal: 16, paddingVertical: 14 },
  cardTitle: { fontSize: 17, fontWeight: '700', color: '#fff', letterSpacing: -0.3 },
  cardSub: { fontSize: 12, color: 'rgba(255,255,255,0.75)', marginTop: 2 },
  notesCard: { borderRadius: 14, padding: 14 },
  notesHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  notesLabel: { fontSize: 12, fontWeight: '600', textTransform: 'uppercase', letterSpacing: 0.5 },
  editBtn: { fontSize: 15, fontWeight: '500' },
  notesText: { fontSize: 14, lineHeight: 21 },
  emptyNotes: { fontSize: 14, fontStyle: 'italic' },
  textInput: {
    borderRadius: 10, padding: 12, fontSize: 14, lineHeight: 21,
    minHeight: 90, borderWidth: 1.5, textAlignVertical: 'top',
  },
  btnRow: { flexDirection: 'row', gap: 8, marginTop: 10 },
  saveBtn: { flex: 1, paddingVertical: 12, borderRadius: 10, alignItems: 'center' },
  saveBtnText: { color: '#fff', fontWeight: '600', fontSize: 15 },
  cancelBtn: { paddingVertical: 12, paddingHorizontal: 20, borderRadius: 10, borderWidth: 1, alignItems: 'center' },
  cancelBtnText: { fontWeight: '500', fontSize: 15 },
});
