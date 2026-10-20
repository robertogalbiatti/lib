import { SetStateAction, useState, type ReactNode } from 'react';
import { translations, type Language } from './translations';
import { LibButton } from '../src/components/atoms/lib-button/lib-button';
import { LibCheckbox } from '../src/components/atoms/lib-checkbox/lib-checkbox';
import { LibChip } from '../src/components/atoms/lib-chip/lib-chip';
import { LibLoadingSpinner } from '../src/components/atoms/lib-loading-spinner/lib-loading-spinner';
import { LibRadioButton } from '../src/components/atoms/lib-radiobutton/lib-radiobutton';
import { LibRadioGroup } from '../src/components/molecules/lib-radiogroup/lib-radiogroup';
import { LibSelect } from '../src/components/atoms/lib-select/lib-select';
import { LibTextArea } from '../src/components/atoms/lib-text-area/lib-text-area';
import { LibTextField } from '../src/components/atoms/lib-text-field/lib-text-field';
import { LibAlert } from '../src/components/molecules/lib-alert/lib-alert';

// @ts-expect-error CSS module typings are not configured in this project.
import styles from './demo-page.module.scss';

type Section =
  | 'overview'
  | 'button'
  | 'chip'
  | 'checkbox'
  | 'radio'
  | 'select'
  | 'textfield'
  | 'textarea'
  | 'alert'
  | 'spinner';

const componentIds = [
  'button',
  'chip',
  'checkbox',
  'radio',
  'select',
  'textfield',
  'textarea',
  'alert',
  'spinner',
] as const;

type ComponentId = (typeof componentIds)[number];

const componentTranslationKeys: Record<
  ComponentId,
  | 'button'
  | 'chip'
  | 'checkbox'
  | 'radioButton'
  | 'select'
  | 'textField'
  | 'textArea'
  | 'alert'
  | 'loadingSpinner'
> = {
  button: 'button',
  chip: 'chip',
  checkbox: 'checkbox',
  radio: 'radioButton',
  select: 'select',
  textfield: 'textField',
  textarea: 'textArea',
  alert: 'alert',
  spinner: 'loadingSpinner',
};

export default function DemoPage() {
  const [activeSection, setActiveSection] = useState<Section>('overview');
  const [checked, setChecked] = useState(true);
  const [framework, setFramework] = useState('react');
  const [name, setName] = useState('');
  const [showChip, setShowChip] = useState(true);
  const [showAlert, setShowAlert] = useState(true);
  const [language, setLanguage] = useState<Language>('pt');

  const t = translations[language];

  const isEnglish = language === 'en';

  const examples: Record<Exclude<Section, 'overview'>, string> = {
    button: isEnglish
      ? '<LibButton>Primary</LibButton>\n<LibButton variant="secondary">Secondary</LibButton>'
      : '<LibButton>Primário</LibButton>\n<LibButton variant="secondary">Secundário</LibButton>',

    chip: '<LibChip label="React" />\n<LibChip label="Angular" />',

    checkbox: isEnglish
      ? '<LibCheckbox label="Accept the terms" checked={checked} onChange={handleChange} />'
      : '<LibCheckbox label="Aceito os termos" checked={checked} onChange={handleChange} />',

    radio:
      '<LibRadioGroup name="framework" label="Framework" value={value} onValueChange={setValue}>\n  <LibRadioButton value="react" label="React" />\n  <LibRadioButton value="angular" label="Angular" />\n</LibRadioGroup>',

    select: isEnglish
      ? '<LibSelect id="framework" label="Favorite framework" value={framework}>\n  <option value="react">React</option>\n  <option value="angular">Angular</option>\n</LibSelect>'
      : '<LibSelect id="framework" label="Framework favorito" value={framework}>\n  <option value="react">React</option>\n  <option value="angular">Angular</option>\n</LibSelect>',

    textfield: isEnglish
      ? '<LibTextField id="name" label="Full name" value={name} onChange={handleChange} />'
      : '<LibTextField id="name" label="Nome completo" value={name} onChange={handleChange} />',

    textarea: isEnglish
      ? '<LibTextArea id="description" label="Description" rows={4} />'
      : '<LibTextArea id="description" label="Descrição" rows={4} />',

    alert: isEnglish
      ? '<LibAlert variant="success" title="Success!" dismissible>\n  Operation completed successfully.\n</LibAlert>'
      : '<LibAlert variant="success" title="Tudo certo!" dismissible>\n  Operação concluída com sucesso.\n</LibAlert>',

    spinner: isEnglish
      ? '<LibLoadingSpinner size={3} label="Loading..." />'
      : '<LibLoadingSpinner size={3} label="Carregando..." />',
  };

  const components = [
    {
      id: 'overview' as const,
      label: t.navigation.overview,
      category: t.navigation.overview,
      description: t.catalog.description,
    },
    ...componentIds.map((id) => {
      const key = componentTranslationKeys[id];
      const component = t.components[key];

      const category =
        id === 'button'
          ? t.navigation.groups.actions
          : id === 'chip'
            ? t.navigation.groups.data
            : ['checkbox', 'radio', 'select', 'textfield', 'textarea'].includes(
                  id,
                )
              ? t.navigation.groups.forms
              : t.navigation.groups.feedback;

      return {
        id,
        label: component.title,
        category,
        description: component.description,
      };
    }),
  ];

  const activeComponent = components.find(
    (component) => component.id === activeSection,
  );

  const groupedComponents = components.reduce<
    Record<string, typeof components>
  >((groups, component) => {
    groups[component.category] ??= [];
    groups[component.category].push(component);
    return groups;
  }, {});

  function renderComponent() {
    switch (activeSection) {
      case 'button':
        return (
          <Preview
            title={t.components.button.previewTitle}
            description={t.components.button.previewDescription}
            code={examples.button}
            isEnglish={isEnglish}
          >
            <LibButton
              onClick={() => window.alert(t.components.button.clicked)}
            >
              {t.components.button.primary}
            </LibButton>

            <LibButton variant="secondary">
              {t.components.button.secondary}
            </LibButton>

            <LibButton variant="tertiary">
              {t.components.button.tertiary}
            </LibButton>

            <LibButton disabled>{t.components.button.disabled}</LibButton>
          </Preview>
        );

      case 'chip':
        return (
          <Preview
            title={t.components.chip.previewTitle}
            description={t.components.chip.previewDescription}
            code={examples.chip}
            isEnglish={isEnglish}
          >
            {/* <LibChip label="Default" /> */}
            <LibChip label="React" color="#20232a" />
            <LibChip label="Angular" color="#7f1d1d" />
            {showChip ? (
              <LibChip
                label={t.components.chip.removable}
                color="#f70000"
                onRemove={() => setShowChip(false)}
              />
            ) : (
              <LibButton variant="secondary" onClick={() => setShowChip(true)}>
                Restaurar chip
              </LibButton>
            )}
          </Preview>
        );

      case 'checkbox':
        return (
          <Preview
            title={t.components.checkbox.previewTitle}
            description={t.components.checkbox.previewDescription}
            code={examples.checkbox}
            isEnglish={isEnglish}
          >
            <div className={styles.stacked}>
              <LibCheckbox
                label={t.components.checkbox.terms}
                checked={checked}
                onChange={(event) => setChecked(event.target.checked)}
              />
              <LibCheckbox label={t.components.checkbox.disabled} disabled />
              <span className={styles.helper}>
                {t.common.state}
                {checked ? t.common.checkedState : t.common.uncheckedState}
              </span>
            </div>
          </Preview>
        );

      case 'radio':
        return (
          <Preview
            title={t.components.radioButton.previewTitle}
            description={t.components.radioButton.previewDescription}
            code={examples.radio}
            isEnglish={isEnglish}
          >
            <div className={styles.stacked}>
              <LibRadioGroup
                name="demo-framework"
                label={t.components.radioGroup.titleDescription}
                onValueChange={setFramework}
                value={framework}
                orientation="vertical"
              >
                <LibRadioButton value="react" label="React" />
                <LibRadioButton value="angular" label="Angular" />
                <LibRadioButton value="vue" label="Vue" />
              </LibRadioGroup>
            </div>
          </Preview>
        );

      case 'select':
        return (
          <Preview
            title={t.components.select.previewTitle}
            description={t.components.select.previewDescription}
            code={examples.select}
            isEnglish={isEnglish}
          >
            <div className={styles.formExample}>
              <LibSelect
                id="demo-framework"
                label="Framework favorito"
                value={framework}
                clearable
                onChange={(event) => setFramework(event.target.value)}
              >
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
              </LibSelect>
              <span className={styles.helper}>
                {t.common.currentValue} {framework || 'nenhum'}
              </span>
            </div>
          </Preview>
        );

      case 'textfield':
        return (
          <Preview
            title={t.components.textField.previewTitle}
            description={t.components.textField.previewDescription}
            code={examples.textfield}
            isEnglish={isEnglish}
          >
            <div className={styles.formExample}>
              <LibTextField
                id="demo-name"
                label={t.components.textField.name}
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <LibTextField
                id="demo-email"
                label="E-mail"
                type="email"
                required
              />
              <span className={styles.helper}>
                {name ? `Olá, ${name}!` : t.components.textField.helper}
              </span>
            </div>
          </Preview>
        );

      case 'textarea':
        return (
          <Preview
            title={t.components.textArea.previewTitle}
            description={t.components.textArea.previewDescription}
            code={examples.textarea}
            isEnglish={isEnglish}
          >
            <div className={styles.formExample}>
              <LibTextArea id="demo-description" label="" rows={4} />
            </div>
          </Preview>
        );

      case 'alert':
        return (
          <Preview
            title={t.components.alert.previewTitle}
            description={t.components.alert.previewDescription}
            code={examples.alert}
            isEnglish={isEnglish}
          >
            <div className={styles.stacked}>
              {showAlert ? (
                <LibAlert
                  variant="success"
                  title={t.components.alert.successTitle}
                  dismissible
                  onClose={() => setShowAlert(false)}
                >
                  {t.components.alert.successMessage}
                </LibAlert>
              ) : (
                <LibButton
                  variant="secondary"
                  onClick={() => setShowAlert(true)}
                >
                  {t.components.alert.warningTitle}
                </LibButton>
              )}
              <LibAlert variant="info" title={t.components.alert.infoTitle}>
                {t.components.alert.infoMessage}
              </LibAlert>
              <LibAlert
                variant="warning"
                title={t.components.alert.warningTitle}
              >
                {t.components.alert.warningMessage}
              </LibAlert>
            </div>
          </Preview>
        );

      case 'spinner':
        return (
          <Preview
            title={t.components.loadingSpinner.previewTitle}
            description={t.components.loadingSpinner.previewDescription}
            code={examples.spinner}
            isEnglish={isEnglish}
          >
            <div className={styles.spinnerExamples}>
              <div>
                <span>{t.components.loadingSpinner.small}</span>
                <LibLoadingSpinner size={0.3} label="Carregando pequeno" />
              </div>
              <div>
                <span>{t.components.loadingSpinner.medium}</span>
                <LibLoadingSpinner size={0.5} label="Carregando médio" />
              </div>
              <div>
                <span>{t.components.loadingSpinner.large}</span>
                <LibLoadingSpinner size={1} label="Carregando grande" />
              </div>
            </div>
          </Preview>
        );

      case 'overview':
      default:
        return (
          <>
            <section className={styles.hero}>
              <span className={styles.eyebrow}>{t.hero.eyebrow}</span>
              <h1>
                {t.hero.title}
                <br />
                <span>{t.hero.highlight}</span>
              </h1>
              <p>{t.hero.description}</p>
              <div className={styles.heroActions}>
                <LibButton onClick={() => setActiveSection('button')}>
                  {t.hero.explore}
                </LibButton>
                <a
                  href="https://github.com/robertogalbiatti/lib"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.githubLink}
                >
                  {t.hero.github} ↗
                </a>
              </div>
            </section>

            <section className={styles.catalog}>
              <div className={styles.catalogHeading}>
                <div>
                  <span className={styles.eyebrow}>{t.catalog.eyebrow}</span>
                  <h2>{t.catalog.title}</h2>
                </div>
                <span className={styles.count}>
                  {components.length - 1} {t.catalog.count}
                </span>
              </div>

              <div className={styles.componentGrid}>
                {components
                  .filter((component) => component.id !== 'overview')
                  .map((component) => (
                    <button
                      key={component.id}
                      className={styles.componentCard}
                      onClick={() => setActiveSection(component.id)}
                    >
                      <span className={styles.cardIcon}>
                        {component.label.slice(0, 1)}
                      </span>
                      <span className={styles.cardContent}>
                        <strong>{component.label}</strong>
                        <small>{component.description}</small>
                      </span>
                      <span className={styles.arrow}>↗</span>
                    </button>
                  ))}
              </div>
            </section>
          </>
        );
    }
  }

  return (
    <div className={styles.appShell}>
      <aside className={styles.sidebar}>
        <button
          className={styles.brand}
          onClick={() => setActiveSection('overview')}
          aria-label="Ir para a página inicial"
        >
          <span className={styles.brandMark}>L</span>
          <span className={styles.brandText}>
            <strong>
              lib<span>.</span>
            </strong>
            <small>COMPONENT SYSTEM</small>
          </span>
        </button>

        <div className={styles.sidebarDivider} />

        <nav className={styles.navigation} aria-label="Componentes">
          {Object.entries(groupedComponents).map(([group, items]) => (
            <div className={styles.navGroup} key={group}>
              <span className={styles.navHeading}>{group}</span>
              {items.map((component) => (
                <button
                  key={component.id}
                  className={`${styles.navItem} ${
                    activeSection === component.id ? styles.navItemActive : ''
                  }`}
                  onClick={() => setActiveSection(component.id)}
                >
                  <span className={styles.navDot} />
                  {component.label}
                </button>
              ))}
            </div>
          ))}
        </nav>

        <div className={styles.sidebarFooter}>
          <span className={styles.statusDot} />
          <span>{t.navigation.groups.underDevelopment}</span>
          <small>v0.1.0</small>
        </div>
      </aside>

      <main className={styles.mainContent}>
        <header className={styles.topbar}>
          <div className={styles.breadcrumb}>
            <span>Library</span>
            <span>/</span>
            <strong>{activeComponent?.label ?? t.navigation.overview}</strong>
          </div>
          <a
            href="https://github.com/robertogalbiatti/lib"
            target="_blank"
            rel="noreferrer"
            className={styles.topbarLink}
          >
            GitHub ↗
          </a>
          <button
            type="button"
            className={styles.languageButton}
            onClick={() =>
              setLanguage((current) => (current === 'pt' ? 'en' : 'pt'))
            }
            aria-label={
              language === 'pt' ? 'Switch to English' : 'Mudar para português'
            }
          >
            {language.toUpperCase()}
          </button>
        </header>

        {activeSection === 'overview' ? (
          renderComponent()
        ) : (
          <div className={styles.detailPage}>
            <div className={styles.detailHeading}>
              <span className={styles.eyebrow}>
                {activeComponent?.category}
              </span>
              <h1>{activeComponent?.label}</h1>
              <p>{activeComponent?.description}</p>
            </div>
            {renderComponent()}
          </div>
        )}

        <footer className={styles.footer}>
          {t.footer.builtWith} <span>♥</span>
        </footer>
      </main>
    </div>
  );
}

function Preview({
  title,
  description,
  code,
  children,
  isEnglish,
}: {
  title: string;
  description: string;
  code: string;
  children: ReactNode;
  isEnglish: boolean;
}) {
  return (
    <section className={styles.previewPanel}>
      <header className={styles.panelHeader}>
        <div>
          <h2>
            {title} {isEnglish ? 'preview' : '— demonstração'}
          </h2>
          <p>{description}</p>
        </div>

        <span className={styles.liveBadge}>
          <span />
          {isEnglish ? 'LIVE' : 'AO VIVO'}
        </span>
      </header>

      <div className={styles.previewArea}>{children}</div>

      <div className={styles.codeHeading}>
        <span>{isEnglish ? 'USAGE EXAMPLE' : 'EXEMPLO DE USO'}</span>
        <span>TSX</span>
      </div>

      <pre className={styles.codeBlock}>
        <code>{code}</code>
      </pre>
    </section>
  );
}
