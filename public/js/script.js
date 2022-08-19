const values = {
  regina: 'regina',
  anton: 'anton',
  alisa: 'alisa',
  nadya: 'nadya',
  volodya: 'volodya',
  olya: 'olya',
};

const map = {
  q1: {
    v1: values.regina,
    v2: values.anton,
    v3: values.volodya,
    v4: values.alisa,
    v5: values.nadya,
    v6: values.olya,
  },
  q2: {
    v1: values.regina,
    v2: values.nadya,
    v3: values.olya,
    v4: values.anton,
    v5: values.alisa,
    v6: values.volodya,
  },
  q3: {
    v1: values.alisa,
    v2: values.nadya,
    v3: values.anton,
    v4: values.regina,
    v5: values.olya,
    v6: values.volodya,
  },
  q4: {
    v1: values.nadya,
    v2: values.volodya,
    v3: values.anton,
    v4: values.alisa,
    v5: values.regina,
    v6: values.olya,
  },
  q5: {
    v1: values.olya,
    v2: values.alisa,
    v3: values.regina,
    v4: values.anton,
    v5: values.nadya,
    v6: values.volodya,
  },
  q6: {
    v1: values.anton,
    v2: values.regina,
    v3: values.alisa,
    v4: values.nadya,
    v5: values.volodya,
    v6: values.olya,
  },
  q7: {
    v1: values.olya,
    v2: values.anton,
    v3: values.alisa,
    v4: values.volodya,
    v5: values.nadya,
    v6: values.regina,
  },
  q8: {
    v1: values.volodya,
    v2: values.olya,
    v3: values.nadya,
    v4: values.regina,
    v5: values.anton,
    v6: values.alisa,
  },
  q9: {
    v1: values.regina,
    v2: values.volodya,
    v3: values.olya,
    v4: values.alisa,
    v5: values.nadya,
    v6: values.anton,
  },
  q10: {
    v1: values.olya,
    v2: values.alisa,
    v3: values.regina,
    v4: values.anton,
    v5: values.nadya,
    v6: values.volodya,
  },
  q11: {
    v1: values.olya,
    v2: values.regina,
    v3: values.alisa,
    v4: values.volodya,
    v5: values.nadya,
    v6: values.anton,
  },
  q12: {
    v1: values.nadya,
    v2: values.volodya,
    v3: values.anton,
    v4: values.alisa,
    v5: values.regina,
    v6: values.olya,
  },
  q13: {
    v1: values.regina,
    v2: values.nadya,
    v3: values.olya,
    v4: values.anton,
    v5: values.alisa,
    v6: values.volodya,
  },
};

const res = {
  regina: {
    name: 'Регина 🍰',
    descr: 'Ты можешь дать пизды и дашь пизды, но сделаешь это изящно',
  },
  anton: {
    name: '✨ Антон ✨',
    descr:
      'Ты не хочешь давать пизды, но у тебя получится это сделать лучше всех',
  },
  alisa: {
    name: 'Алиса 👑',
    descr: 'Ты милый и легко можешь дать пизды, когда этого никто не ожидает',
  },
  nadya: {
    name: 'Надя 🏀',
    descr: 'Ты не хочешь и не будешь давать пизды, потому что выше этого',
  },
  volodya: {
    name: 'Володя 🐸',
    descr: 'Ты хотел бы дать пизды, но у тебя не получится',
  },
  olya: {
    name: 'Оля 🌸',
    descr:
      'Ты точно захочешь дать пизды, но чуть-чуть возможно, что подобреешь в последний момент',
  },
};

function go() {
  const answers = {
    regina: 0,
    anton: 0,
    alisa: 0,
    nadya: 0,
    volodya: 0,
    olya: 0,
  };

  for (const q of Object.entries(map)) {
    const [question, opts] = q;
    const data = Array.from(document.getElementsByName(question));

    const selected = data.find((opt) => opt.checked);

    if (selected) {
      const [, n] = selected.id.split('-');
      const selectedValue = opts[`v${n}`];
      answers[selectedValue] += 1;
    } else {
      document.getElementById('error').style.display = 'block';
      return;
    }
  }

  const max = Math.max(...Object.values(answers));

  const results = [];

  for (const nameData of Object.entries(answers)) {
    const [name, numberOf] = nameData;
    if (numberOf === max) {
      results.push(name);
    }
  }

  let finalResult;

  if (results.length > 1) {
    const min = Math.ceil(0);
    const max = Math.floor(results.length - 1);
    const n = Math.floor(Math.random() * (max - min + 1)) + min;
    finalResult = results[n];
  } else {
    finalResult = results[0];
  }

  form.style.display = 'none';

  const resultNode = document.createElement('section');
  const resultName = document.createElement('h2');
  const resultDescr = document.createElement('p');

  resultName.textContent = res[finalResult].name;
  resultDescr.textContent = res[finalResult].descr;

  resultNode.append(resultName);
  resultNode.append(resultDescr);

  document.body.append(resultNode);
}

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  go();
});
