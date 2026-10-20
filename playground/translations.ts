export type Language = 'pt' | 'en';

export const translations = {
  pt: {
    common: {
      overview: 'Visão geral',
      github: 'Ver no GitHub',
      exploreComponents: 'Explorar componentes',
      livePreview: 'PRÉ-VISUALIZAÇÃO INTERATIVA',
      example: 'Exemplo',
      usage: 'Uso',
      copyCode: 'Copiar código',
      copied: 'Copiado!',
      back: 'Voltar',
      enabled: 'Habilitado',
      disabled: 'Desabilitado',
      loading: 'Carregando',
      required: 'Obrigatório',
      optional: 'Opcional',
      close: 'Fechar',
      clear: 'Limpar',
      remove: 'Remover',
      selectOption: 'Selecione uma opção',
      noOptions: 'Nenhuma opção disponível',
      currentValue: 'Valor atual:',
      state: 'Estado: ',
      checkedState: 'marcado',
      uncheckedState: 'desmarcado',
    },

    navigation: {
      overview: 'Visão geral',
      foundations: 'Fundamentos',
      components: 'Componentes',
      atoms: 'Átomos',
      molecules: 'Moléculas',
      button: 'Button',
      checkbox: 'Checkbox',
      chip: 'Chip',
      textField: 'Text Field',
      textArea: 'Text Area',
      radioButton: 'Radio Button',
      radioGroup: 'Radio Group',
      select: 'Select',
      loadingSpinner: 'Loading Spinner',
      alert: 'Alert',
      groups: {
        overview: 'COMEÇANDO',
        actions: 'AÇÕES',
        data: 'DADOS',
        forms: 'FORMULÁRIOS',
        feedback: 'FEEDBACK',
        underDevelopment: 'Em desenvolvimento',
      },
    },

    hero: {
      eyebrow: 'BIBLIOTECA DE COMPONENTES REACT',
      title: 'Construa interfaces melhores com componentes reutilizáveis.',
      highlight: 'Desenvolvimento mais rápido.',
      description:
        'Uma coleção de componentes reutilizáveis para criar interfaces web consistentes, com exemplos interativos e código de uso.',
      explore: 'Explorar componentes',
      github: 'Ver no GitHub',
    },

    catalog: {
      eyebrow: 'CATÁLOGO',
      title: 'Componentes disponíveis',
      description:
        'Explore os componentes, teste suas propriedades e consulte exemplos de utilização.',
      count: 'componentes',
    },

    components: {
      button: {
        title: 'Button',
        description:
          'Botões reutilizáveis para ações primárias, secundárias e terciárias.',
        previewTitle: 'Variantes de botão',
        previewDescription:
          'Experimente as diferentes variantes e estados do componente.',
        primary: 'Botão primário',
        secondary: 'Botão secundário',
        tertiary: 'Botão terciário',
        disabled: 'Botão desabilitado',
        clicked: 'Botão clicado!',
        disabledMessage: 'Este botão está desabilitado.',
      },

      checkbox: {
        title: 'Checkbox',
        description: 'Campo de seleção para marcar uma ou mais opções.',
        previewTitle: 'Exemplos de checkbox',
        previewDescription: 'Teste a seleção e o estado desabilitado.',
        label: 'Clique para selecionar',
        checked: 'Selecionado',
        unchecked: 'Não selecionado',
        disabled: 'Checkbox desabilitado',
        terms: 'Aceito os termos de uso',
      },

      chip: {
        title: 'Chip',
        description:
          'Elemento compacto para exibir categorias, estados e informações.',
        previewTitle: 'Variantes de chip',
        previewDescription: 'Exemplos de chips com diferentes cores e estados.',
        primary: 'Primário',
        success: 'Sucesso',
        warning: 'Atenção',
        danger: 'Erro',
        removable: 'Removível',
      },

      textField: {
        title: 'Text Field',
        description:
          'Campo de entrada de texto com suporte a diferentes tipos e estados.',
        previewTitle: 'Exemplos de campos de texto',
        previewDescription:
          'Experimente os campos habilitados e desabilitados.',
        email: 'E-mail',
        emailPlaceholder: 'Digite seu e-mail',
        password: 'Senha',
        name: 'Nome completo',
        namePlaceholder: 'Digite seu nome',
        disabled: 'Campo desabilitado',
        helper: 'Digite a informação solicitada.',
      },

      textArea: {
        title: 'Text Area',
        description:
          'Campo de texto multilinha para descrições e mensagens longas.',
        previewTitle: 'Exemplos de área de texto',
        previewDescription: 'Experimente inserir textos com várias linhas.',
        label: 'Descrição',
        placeholder: 'Digite sua descrição...',
        disabled: 'Área de texto desabilitada',
        helper: 'Descreva sua solicitação em detalhes.',
      },

      radioButton: {
        title: 'Radio Button',
        description:
          'Opção de seleção única para escolher um item entre várias alternativas.',
        previewTitle: 'Exemplos de seleção',
        previewDescription: 'Escolha uma das opções disponíveis.',
        payment: 'Forma de pagamento',
        pix: 'PIX',
        credit: 'Cartão de crédito',
        cash: 'Dinheiro',
        coin: 'Moeda',
        framework: 'Framework',
        react: 'React',
        angular: 'Angular',
        vue: 'Vue',
      },

      radioGroup: {
        title: 'Radio Group',
        description:
          'Agrupa opções de radio buttons com seleção controlada e orientação configurável.',
        previewTitle: 'Grupo de radio buttons',
        previewDescription: 'Experimente os layouts vertical e horizontal.',
        vertical: 'Orientação vertical',
        horizontal: 'Orientação horizontal',
        titleDescription: 'Escolha um framework',
      },

      select: {
        title: 'Select',
        description:
          'Lista suspensa para selecionar uma opção entre várias alternativas.',
        previewTitle: 'Exemplos de seleção',
        previewDescription:
          'Escolha uma opção e teste a funcionalidade de limpeza.',
        label: 'Selecione um carro',
        placeholder: 'Selecione uma opção',
        volvo: 'Volvo',
        saab: 'Saab',
        mercedes: 'Mercedes',
      },

      loadingSpinner: {
        title: 'Loading Spinner',
        description:
          'Indicador visual para operações em andamento e carregamento de dados.',
        previewTitle: 'Tamanhos de loading spinner',
        previewDescription: 'Exemplos de indicadores com diferentes tamanhos.',
        small: 'Pequeno',
        medium: 'Médio',
        large: 'Grande',
        loading: 'Carregando dados',
      },

      alert: {
        title: 'Alert',
        description:
          'Mensagens de feedback para informar sucesso, atenção e erros.',
        previewTitle: 'Variantes de alert',
        previewDescription:
          'Experimente diferentes mensagens e feche os alertas removíveis.',
        primaryTitle: 'Alerta primário',
        primaryMessage: 'Esta é uma mensagem de alerta primário.',
        successTitle: 'Sucesso!',
        successMessage: 'Suas alterações foram salvas com sucesso.',
        warningTitle: 'Atenção!',
        warningMessage: 'Verifique as informações antes de continuar.',
        dangerTitle: 'Erro!',
        dangerMessage: 'Algo deu errado. Tente novamente.',
        infoTitle: 'Informação',
        infoMessage: 'Este alerta não possui título nem botão para fechar.',
      },
    },

    footer: {
      builtWith: 'Desenvolvido com',
      by: 'por',
      rights: 'Todos os direitos reservados.',
    },
  },

  en: {
    common: {
      overview: 'Overview',
      github: 'View on GitHub',
      exploreComponents: 'Explore components',
      livePreview: 'LIVE PREVIEW',
      example: 'Example',
      usage: 'Usage',
      copyCode: 'Copy code',
      copied: 'Copied!',
      back: 'Back',
      enabled: 'Enabled',
      disabled: 'Disabled',
      loading: 'Loading',
      required: 'Required',
      optional: 'Optional',
      close: 'Close',
      clear: 'Clear',
      remove: 'Remove',
      selectOption: 'Select an option',
      noOptions: 'No options available',
      currentValue: 'Current value:',
      state: 'State: ',
      checkedState: 'checked',
      uncheckedState: 'unchecked',
    },

    navigation: {
      overview: 'Overview',
      foundations: 'Foundations',
      components: 'Components',
      atoms: 'Atoms',
      molecules: 'Molecules',
      button: 'Button',
      checkbox: 'Checkbox',
      chip: 'Chip',
      textField: 'Text Field',
      textArea: 'Text Area',
      radioButton: 'Radio Button',
      radioGroup: 'Radio Group',
      select: 'Select',
      loadingSpinner: 'Loading Spinner',
      alert: 'Alert',
      groups: {
        overview: 'GETTING STARTED',
        actions: 'ACTIONS',
        data: 'DATA',
        forms: 'FORMS',
        feedback: 'FEEDBACK',
        underDevelopment: 'Work in progress',
      },
    },

    hero: {
      eyebrow: 'REACT COMPONENT LIBRARY',
      title: 'Build better interfaces with reusable components.',
      highlight: 'Faster development.',
      description:
        'A collection of reusable components for building consistent web interfaces, with interactive examples and usage code.',
      explore: 'Explore components',
      github: 'View on GitHub',
    },

    catalog: {
      eyebrow: 'CATALOG',
      title: 'Available components',
      description:
        'Explore the components, test their properties, and check usage examples.',
      count: 'components',
    },

    components: {
      button: {
        title: 'Button',
        description:
          'Reusable buttons for primary, secondary, and tertiary actions.',
        previewTitle: 'Button variants',
        previewDescription: 'Try the different variants and component states.',
        primary: 'Primary button',
        secondary: 'Secondary button',
        tertiary: 'Tertiary button',
        disabled: 'Disabled button',
        clicked: 'Button clicked!',
        disabledMessage: 'This button is disabled.',
      },

      checkbox: {
        title: 'Checkbox',
        description: 'Selection control for checking one or more options.',
        previewTitle: 'Checkbox examples',
        previewDescription: 'Test the selection and disabled states.',
        label: 'Click to select',
        checked: 'Selected',
        unchecked: 'Not selected',
        disabled: 'Disabled checkbox',
        terms: 'Accept use terms',
      },

      chip: {
        title: 'Chip',
        description:
          'Compact elements for displaying categories, states, and information.',
        previewTitle: 'Chip variants',
        previewDescription:
          'Examples of chips with different colors and states.',
        primary: 'Primary',
        success: 'Success',
        warning: 'Warning',
        danger: 'Error',
        removable: 'Removable',
      },

      textField: {
        title: 'Text Field',
        description: 'Text input field supporting different types and states.',
        previewTitle: 'Text field examples',
        previewDescription: 'Try the enabled and disabled fields.',
        email: 'Email',
        emailPlaceholder: 'Enter your email',
        password: 'Password',
        name: 'Full name',
        namePlaceholder: 'Enter your name',
        disabled: 'Disabled field',
        helper: 'Enter the requested information.',
      },

      textArea: {
        title: 'Text Area',
        description:
          'Multiline text input for descriptions and longer messages.',
        previewTitle: 'Text area examples',
        previewDescription: 'Try entering text across multiple lines.',
        label: 'Description',
        placeholder: 'Enter your description...',
        disabled: 'Disabled text area',
        helper: 'Describe your request in detail.',
      },

      radioButton: {
        title: 'Radio Button',
        description:
          'Single-selection control for choosing one item from several options.',
        previewTitle: 'Selection examples',
        previewDescription: 'Choose one of the available options.',
        payment: 'Payment method',
        pix: 'PIX',
        credit: 'Credit card',
        cash: 'Cash',
        coin: 'Coin',
        framework: 'Framework',
        react: 'React',
        angular: 'Angular',
        vue: 'Vue',
      },

      radioGroup: {
        title: 'Radio Group',
        description:
          'Groups radio buttons with controlled selection and configurable orientation.',
        previewTitle: 'Radio button group',
        previewDescription: 'Try the vertical and horizontal layouts.',
        vertical: 'Vertical orientation',
        horizontal: 'Horizontal orientation',
        titleDescription: 'Choose a framework',
      },

      select: {
        title: 'Select',
        description:
          'Dropdown list for selecting one option from several alternatives.',
        previewTitle: 'Select examples',
        previewDescription:
          'Choose an option and test the clear functionality.',
        label: 'Select a car',
        placeholder: 'Select an option',
        volvo: 'Volvo',
        saab: 'Saab',
        mercedes: 'Mercedes',
      },

      loadingSpinner: {
        title: 'Loading Spinner',
        description:
          'Visual indicator for ongoing operations and data loading.',
        previewTitle: 'Loading spinner sizes',
        previewDescription:
          'Examples of loading indicators in different sizes.',
        small: 'Small',
        medium: 'Medium',
        large: 'Large',
        loading: 'Loading data',
      },

      alert: {
        title: 'Alert',
        description: 'Feedback messages for success, warnings, and errors.',
        previewTitle: 'Alert variants',
        previewDescription:
          'Try different messages and dismiss the removable alerts.',
        primaryTitle: 'Primary alert',
        primaryMessage: 'This is a primary alert message.',
        successTitle: 'Success!',
        successMessage: 'Your changes have been saved successfully.',
        warningTitle: 'Warning!',
        warningMessage: 'Please check the information before continuing.',
        dangerTitle: 'Error!',
        dangerMessage: 'Something went wrong. Please try again.',
        infoTitle: 'Information',
        infoMessage: 'This alert has no title or close button.',
      },
    },

    footer: {
      builtWith: 'Built with',
      by: 'by',
      rights: 'All rights reserved.',
    },
  },
} as const;
