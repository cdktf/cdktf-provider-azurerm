# `paloAltoLocalRulestackRule` Submodule <a name="`paloAltoLocalRulestackRule` Submodule" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PaloAltoLocalRulestackRule <a name="PaloAltoLocalRulestackRule" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule azurerm_palo_alto_local_rulestack_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_local_rulestack_rule

paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  applications: typing.List[str],
  destination: PaloAltoLocalRulestackRuleDestination,
  name: str,
  priority: typing.Union[int, float],
  rulestack_id: str,
  source: PaloAltoLocalRulestackRuleSource,
  audit_comment: str = None,
  category: PaloAltoLocalRulestackRuleCategory = None,
  decryption_rule_type: str = None,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  inspection_certificate_id: str = None,
  logging_enabled: typing.Union[bool, IResolvable] = None,
  negate_destination: typing.Union[bool, IResolvable] = None,
  negate_source: typing.Union[bool, IResolvable] = None,
  protocol: str = None,
  protocol_ports: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  timeouts: PaloAltoLocalRulestackRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#action PaloAltoLocalRulestackRule#action}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.applications">applications</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#applications PaloAltoLocalRulestackRule#applications}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.destination">destination</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination">PaloAltoLocalRulestackRuleDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#name PaloAltoLocalRulestackRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#priority PaloAltoLocalRulestackRule#priority}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.rulestackId">rulestack_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#rulestack_id PaloAltoLocalRulestackRule#rulestack_id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSource">PaloAltoLocalRulestackRuleSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.auditComment">audit_comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#audit_comment PaloAltoLocalRulestackRule#audit_comment}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.category">category</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategory">PaloAltoLocalRulestackRuleCategory</a></code> | category block. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.decryptionRuleType">decryption_rule_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#decryption_rule_type PaloAltoLocalRulestackRule#decryption_rule_type}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#description PaloAltoLocalRulestackRule#description}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#enabled PaloAltoLocalRulestackRule#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#id PaloAltoLocalRulestackRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.inspectionCertificateId">inspection_certificate_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#inspection_certificate_id PaloAltoLocalRulestackRule#inspection_certificate_id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.loggingEnabled">logging_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#logging_enabled PaloAltoLocalRulestackRule#logging_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.negateDestination">negate_destination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#negate_destination PaloAltoLocalRulestackRule#negate_destination}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.negateSource">negate_source</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#negate_source PaloAltoLocalRulestackRule#negate_source}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#protocol PaloAltoLocalRulestackRule#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.protocolPorts">protocol_ports</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#protocol_ports PaloAltoLocalRulestackRule#protocol_ports}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#tags PaloAltoLocalRulestackRule#tags}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeouts">PaloAltoLocalRulestackRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.action"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#action PaloAltoLocalRulestackRule#action}.

---

##### `applications`<sup>Required</sup> <a name="applications" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.applications"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#applications PaloAltoLocalRulestackRule#applications}.

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.destination"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination">PaloAltoLocalRulestackRuleDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#destination PaloAltoLocalRulestackRule#destination}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#name PaloAltoLocalRulestackRule#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#priority PaloAltoLocalRulestackRule#priority}.

---

##### `rulestack_id`<sup>Required</sup> <a name="rulestack_id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.rulestackId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#rulestack_id PaloAltoLocalRulestackRule#rulestack_id}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.source"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSource">PaloAltoLocalRulestackRuleSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#source PaloAltoLocalRulestackRule#source}

---

##### `audit_comment`<sup>Optional</sup> <a name="audit_comment" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.auditComment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#audit_comment PaloAltoLocalRulestackRule#audit_comment}.

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.category"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategory">PaloAltoLocalRulestackRuleCategory</a>

category block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#category PaloAltoLocalRulestackRule#category}

---

##### `decryption_rule_type`<sup>Optional</sup> <a name="decryption_rule_type" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.decryptionRuleType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#decryption_rule_type PaloAltoLocalRulestackRule#decryption_rule_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#description PaloAltoLocalRulestackRule#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#enabled PaloAltoLocalRulestackRule#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#id PaloAltoLocalRulestackRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inspection_certificate_id`<sup>Optional</sup> <a name="inspection_certificate_id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.inspectionCertificateId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#inspection_certificate_id PaloAltoLocalRulestackRule#inspection_certificate_id}.

---

##### `logging_enabled`<sup>Optional</sup> <a name="logging_enabled" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.loggingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#logging_enabled PaloAltoLocalRulestackRule#logging_enabled}.

---

##### `negate_destination`<sup>Optional</sup> <a name="negate_destination" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.negateDestination"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#negate_destination PaloAltoLocalRulestackRule#negate_destination}.

---

##### `negate_source`<sup>Optional</sup> <a name="negate_source" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.negateSource"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#negate_source PaloAltoLocalRulestackRule#negate_source}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#protocol PaloAltoLocalRulestackRule#protocol}.

---

##### `protocol_ports`<sup>Optional</sup> <a name="protocol_ports" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.protocolPorts"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#protocol_ports PaloAltoLocalRulestackRule#protocol_ports}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#tags PaloAltoLocalRulestackRule#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeouts">PaloAltoLocalRulestackRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#timeouts PaloAltoLocalRulestackRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.putCategory">put_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.putDestination">put_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetAuditComment">reset_audit_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetCategory">reset_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetDecryptionRuleType">reset_decryption_rule_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetInspectionCertificateId">reset_inspection_certificate_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetLoggingEnabled">reset_logging_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetNegateDestination">reset_negate_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetNegateSource">reset_negate_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetProtocolPorts">reset_protocol_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_category` <a name="put_category" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.putCategory"></a>

```python
def put_category(
  custom_urls: typing.List[str],
  feeds: typing.List[str] = None
) -> None
```

###### `custom_urls`<sup>Required</sup> <a name="custom_urls" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.putCategory.parameter.customUrls"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#custom_urls PaloAltoLocalRulestackRule#custom_urls}.

---

###### `feeds`<sup>Optional</sup> <a name="feeds" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.putCategory.parameter.feeds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#feeds PaloAltoLocalRulestackRule#feeds}.

---

##### `put_destination` <a name="put_destination" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.putDestination"></a>

```python
def put_destination(
  cidrs: typing.List[str] = None,
  countries: typing.List[str] = None,
  feeds: typing.List[str] = None,
  local_rulestack_fqdn_list_ids: typing.List[str] = None,
  local_rulestack_prefix_list_ids: typing.List[str] = None
) -> None
```

###### `cidrs`<sup>Optional</sup> <a name="cidrs" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.putDestination.parameter.cidrs"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#cidrs PaloAltoLocalRulestackRule#cidrs}.

---

###### `countries`<sup>Optional</sup> <a name="countries" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.putDestination.parameter.countries"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#countries PaloAltoLocalRulestackRule#countries}.

---

###### `feeds`<sup>Optional</sup> <a name="feeds" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.putDestination.parameter.feeds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#feeds PaloAltoLocalRulestackRule#feeds}.

---

###### `local_rulestack_fqdn_list_ids`<sup>Optional</sup> <a name="local_rulestack_fqdn_list_ids" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.putDestination.parameter.localRulestackFqdnListIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#local_rulestack_fqdn_list_ids PaloAltoLocalRulestackRule#local_rulestack_fqdn_list_ids}.

---

###### `local_rulestack_prefix_list_ids`<sup>Optional</sup> <a name="local_rulestack_prefix_list_ids" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.putDestination.parameter.localRulestackPrefixListIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#local_rulestack_prefix_list_ids PaloAltoLocalRulestackRule#local_rulestack_prefix_list_ids}.

---

##### `put_source` <a name="put_source" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.putSource"></a>

```python
def put_source(
  cidrs: typing.List[str] = None,
  countries: typing.List[str] = None,
  feeds: typing.List[str] = None,
  local_rulestack_prefix_list_ids: typing.List[str] = None
) -> None
```

###### `cidrs`<sup>Optional</sup> <a name="cidrs" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.putSource.parameter.cidrs"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#cidrs PaloAltoLocalRulestackRule#cidrs}.

---

###### `countries`<sup>Optional</sup> <a name="countries" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.putSource.parameter.countries"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#countries PaloAltoLocalRulestackRule#countries}.

---

###### `feeds`<sup>Optional</sup> <a name="feeds" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.putSource.parameter.feeds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#feeds PaloAltoLocalRulestackRule#feeds}.

---

###### `local_rulestack_prefix_list_ids`<sup>Optional</sup> <a name="local_rulestack_prefix_list_ids" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.putSource.parameter.localRulestackPrefixListIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#local_rulestack_prefix_list_ids PaloAltoLocalRulestackRule#local_rulestack_prefix_list_ids}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#create PaloAltoLocalRulestackRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#delete PaloAltoLocalRulestackRule#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#read PaloAltoLocalRulestackRule#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#update PaloAltoLocalRulestackRule#update}.

---

##### `reset_audit_comment` <a name="reset_audit_comment" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetAuditComment"></a>

```python
def reset_audit_comment() -> None
```

##### `reset_category` <a name="reset_category" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetCategory"></a>

```python
def reset_category() -> None
```

##### `reset_decryption_rule_type` <a name="reset_decryption_rule_type" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetDecryptionRuleType"></a>

```python
def reset_decryption_rule_type() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_inspection_certificate_id` <a name="reset_inspection_certificate_id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetInspectionCertificateId"></a>

```python
def reset_inspection_certificate_id() -> None
```

##### `reset_logging_enabled` <a name="reset_logging_enabled" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetLoggingEnabled"></a>

```python
def reset_logging_enabled() -> None
```

##### `reset_negate_destination` <a name="reset_negate_destination" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetNegateDestination"></a>

```python
def reset_negate_destination() -> None
```

##### `reset_negate_source` <a name="reset_negate_source" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetNegateSource"></a>

```python
def reset_negate_source() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_protocol_ports` <a name="reset_protocol_ports" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetProtocolPorts"></a>

```python
def reset_protocol_ports() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PaloAltoLocalRulestackRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_local_rulestack_rule

paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_local_rulestack_rule

paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_local_rulestack_rule

paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_local_rulestack_rule

paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PaloAltoLocalRulestackRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PaloAltoLocalRulestackRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PaloAltoLocalRulestackRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PaloAltoLocalRulestackRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.category">category</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference">PaloAltoLocalRulestackRuleCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference">PaloAltoLocalRulestackRuleDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.source">source</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference">PaloAltoLocalRulestackRuleSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference">PaloAltoLocalRulestackRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.applicationsInput">applications_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.auditCommentInput">audit_comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.categoryInput">category_input</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategory">PaloAltoLocalRulestackRuleCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.decryptionRuleTypeInput">decryption_rule_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.destinationInput">destination_input</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination">PaloAltoLocalRulestackRuleDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.inspectionCertificateIdInput">inspection_certificate_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.loggingEnabledInput">logging_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.negateDestinationInput">negate_destination_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.negateSourceInput">negate_source_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.protocolPortsInput">protocol_ports_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.rulestackIdInput">rulestack_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.sourceInput">source_input</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSource">PaloAltoLocalRulestackRuleSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeouts">PaloAltoLocalRulestackRuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.applications">applications</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.auditComment">audit_comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.decryptionRuleType">decryption_rule_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.inspectionCertificateId">inspection_certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.loggingEnabled">logging_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.negateDestination">negate_destination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.negateSource">negate_source</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.protocolPorts">protocol_ports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.rulestackId">rulestack_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.category"></a>

```python
category: PaloAltoLocalRulestackRuleCategoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference">PaloAltoLocalRulestackRuleCategoryOutputReference</a>

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.destination"></a>

```python
destination: PaloAltoLocalRulestackRuleDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference">PaloAltoLocalRulestackRuleDestinationOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.source"></a>

```python
source: PaloAltoLocalRulestackRuleSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference">PaloAltoLocalRulestackRuleSourceOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.timeouts"></a>

```python
timeouts: PaloAltoLocalRulestackRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference">PaloAltoLocalRulestackRuleTimeoutsOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `applications_input`<sup>Optional</sup> <a name="applications_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.applicationsInput"></a>

```python
applications_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_comment_input`<sup>Optional</sup> <a name="audit_comment_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.auditCommentInput"></a>

```python
audit_comment_input: str
```

- *Type:* str

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.categoryInput"></a>

```python
category_input: PaloAltoLocalRulestackRuleCategory
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategory">PaloAltoLocalRulestackRuleCategory</a>

---

##### `decryption_rule_type_input`<sup>Optional</sup> <a name="decryption_rule_type_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.decryptionRuleTypeInput"></a>

```python
decryption_rule_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.destinationInput"></a>

```python
destination_input: PaloAltoLocalRulestackRuleDestination
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination">PaloAltoLocalRulestackRuleDestination</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `inspection_certificate_id_input`<sup>Optional</sup> <a name="inspection_certificate_id_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.inspectionCertificateIdInput"></a>

```python
inspection_certificate_id_input: str
```

- *Type:* str

---

##### `logging_enabled_input`<sup>Optional</sup> <a name="logging_enabled_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.loggingEnabledInput"></a>

```python
logging_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `negate_destination_input`<sup>Optional</sup> <a name="negate_destination_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.negateDestinationInput"></a>

```python
negate_destination_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `negate_source_input`<sup>Optional</sup> <a name="negate_source_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.negateSourceInput"></a>

```python
negate_source_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `protocol_ports_input`<sup>Optional</sup> <a name="protocol_ports_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.protocolPortsInput"></a>

```python
protocol_ports_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rulestack_id_input`<sup>Optional</sup> <a name="rulestack_id_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.rulestackIdInput"></a>

```python
rulestack_id_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.sourceInput"></a>

```python
source_input: PaloAltoLocalRulestackRuleSource
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSource">PaloAltoLocalRulestackRuleSource</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, PaloAltoLocalRulestackRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeouts">PaloAltoLocalRulestackRuleTimeouts</a>]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `applications`<sup>Required</sup> <a name="applications" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.applications"></a>

```python
applications: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_comment`<sup>Required</sup> <a name="audit_comment" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.auditComment"></a>

```python
audit_comment: str
```

- *Type:* str

---

##### `decryption_rule_type`<sup>Required</sup> <a name="decryption_rule_type" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.decryptionRuleType"></a>

```python
decryption_rule_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inspection_certificate_id`<sup>Required</sup> <a name="inspection_certificate_id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.inspectionCertificateId"></a>

```python
inspection_certificate_id: str
```

- *Type:* str

---

##### `logging_enabled`<sup>Required</sup> <a name="logging_enabled" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.loggingEnabled"></a>

```python
logging_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `negate_destination`<sup>Required</sup> <a name="negate_destination" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.negateDestination"></a>

```python
negate_destination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `negate_source`<sup>Required</sup> <a name="negate_source" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.negateSource"></a>

```python
negate_source: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `protocol_ports`<sup>Required</sup> <a name="protocol_ports" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.protocolPorts"></a>

```python
protocol_ports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rulestack_id`<sup>Required</sup> <a name="rulestack_id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.rulestackId"></a>

```python
rulestack_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PaloAltoLocalRulestackRuleCategory <a name="PaloAltoLocalRulestackRuleCategory" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategory.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_local_rulestack_rule

paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategory(
  custom_urls: typing.List[str],
  feeds: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategory.property.customUrls">custom_urls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#custom_urls PaloAltoLocalRulestackRule#custom_urls}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategory.property.feeds">feeds</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#feeds PaloAltoLocalRulestackRule#feeds}. |

---

##### `custom_urls`<sup>Required</sup> <a name="custom_urls" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategory.property.customUrls"></a>

```python
custom_urls: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#custom_urls PaloAltoLocalRulestackRule#custom_urls}.

---

##### `feeds`<sup>Optional</sup> <a name="feeds" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategory.property.feeds"></a>

```python
feeds: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#feeds PaloAltoLocalRulestackRule#feeds}.

---

### PaloAltoLocalRulestackRuleConfig <a name="PaloAltoLocalRulestackRuleConfig" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_local_rulestack_rule

paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  applications: typing.List[str],
  destination: PaloAltoLocalRulestackRuleDestination,
  name: str,
  priority: typing.Union[int, float],
  rulestack_id: str,
  source: PaloAltoLocalRulestackRuleSource,
  audit_comment: str = None,
  category: PaloAltoLocalRulestackRuleCategory = None,
  decryption_rule_type: str = None,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  inspection_certificate_id: str = None,
  logging_enabled: typing.Union[bool, IResolvable] = None,
  negate_destination: typing.Union[bool, IResolvable] = None,
  negate_source: typing.Union[bool, IResolvable] = None,
  protocol: str = None,
  protocol_ports: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  timeouts: PaloAltoLocalRulestackRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#action PaloAltoLocalRulestackRule#action}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.applications">applications</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#applications PaloAltoLocalRulestackRule#applications}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination">PaloAltoLocalRulestackRuleDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#name PaloAltoLocalRulestackRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#priority PaloAltoLocalRulestackRule#priority}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.rulestackId">rulestack_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#rulestack_id PaloAltoLocalRulestackRule#rulestack_id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.source">source</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSource">PaloAltoLocalRulestackRuleSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.auditComment">audit_comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#audit_comment PaloAltoLocalRulestackRule#audit_comment}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.category">category</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategory">PaloAltoLocalRulestackRuleCategory</a></code> | category block. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.decryptionRuleType">decryption_rule_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#decryption_rule_type PaloAltoLocalRulestackRule#decryption_rule_type}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#description PaloAltoLocalRulestackRule#description}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#enabled PaloAltoLocalRulestackRule#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#id PaloAltoLocalRulestackRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.inspectionCertificateId">inspection_certificate_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#inspection_certificate_id PaloAltoLocalRulestackRule#inspection_certificate_id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.loggingEnabled">logging_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#logging_enabled PaloAltoLocalRulestackRule#logging_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.negateDestination">negate_destination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#negate_destination PaloAltoLocalRulestackRule#negate_destination}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.negateSource">negate_source</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#negate_source PaloAltoLocalRulestackRule#negate_source}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#protocol PaloAltoLocalRulestackRule#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.protocolPorts">protocol_ports</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#protocol_ports PaloAltoLocalRulestackRule#protocol_ports}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#tags PaloAltoLocalRulestackRule#tags}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeouts">PaloAltoLocalRulestackRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#action PaloAltoLocalRulestackRule#action}.

---

##### `applications`<sup>Required</sup> <a name="applications" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.applications"></a>

```python
applications: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#applications PaloAltoLocalRulestackRule#applications}.

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.destination"></a>

```python
destination: PaloAltoLocalRulestackRuleDestination
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination">PaloAltoLocalRulestackRuleDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#destination PaloAltoLocalRulestackRule#destination}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#name PaloAltoLocalRulestackRule#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#priority PaloAltoLocalRulestackRule#priority}.

---

##### `rulestack_id`<sup>Required</sup> <a name="rulestack_id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.rulestackId"></a>

```python
rulestack_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#rulestack_id PaloAltoLocalRulestackRule#rulestack_id}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.source"></a>

```python
source: PaloAltoLocalRulestackRuleSource
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSource">PaloAltoLocalRulestackRuleSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#source PaloAltoLocalRulestackRule#source}

---

##### `audit_comment`<sup>Optional</sup> <a name="audit_comment" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.auditComment"></a>

```python
audit_comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#audit_comment PaloAltoLocalRulestackRule#audit_comment}.

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.category"></a>

```python
category: PaloAltoLocalRulestackRuleCategory
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategory">PaloAltoLocalRulestackRuleCategory</a>

category block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#category PaloAltoLocalRulestackRule#category}

---

##### `decryption_rule_type`<sup>Optional</sup> <a name="decryption_rule_type" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.decryptionRuleType"></a>

```python
decryption_rule_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#decryption_rule_type PaloAltoLocalRulestackRule#decryption_rule_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#description PaloAltoLocalRulestackRule#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#enabled PaloAltoLocalRulestackRule#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#id PaloAltoLocalRulestackRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inspection_certificate_id`<sup>Optional</sup> <a name="inspection_certificate_id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.inspectionCertificateId"></a>

```python
inspection_certificate_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#inspection_certificate_id PaloAltoLocalRulestackRule#inspection_certificate_id}.

---

##### `logging_enabled`<sup>Optional</sup> <a name="logging_enabled" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.loggingEnabled"></a>

```python
logging_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#logging_enabled PaloAltoLocalRulestackRule#logging_enabled}.

---

##### `negate_destination`<sup>Optional</sup> <a name="negate_destination" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.negateDestination"></a>

```python
negate_destination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#negate_destination PaloAltoLocalRulestackRule#negate_destination}.

---

##### `negate_source`<sup>Optional</sup> <a name="negate_source" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.negateSource"></a>

```python
negate_source: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#negate_source PaloAltoLocalRulestackRule#negate_source}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#protocol PaloAltoLocalRulestackRule#protocol}.

---

##### `protocol_ports`<sup>Optional</sup> <a name="protocol_ports" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.protocolPorts"></a>

```python
protocol_ports: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#protocol_ports PaloAltoLocalRulestackRule#protocol_ports}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#tags PaloAltoLocalRulestackRule#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.timeouts"></a>

```python
timeouts: PaloAltoLocalRulestackRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeouts">PaloAltoLocalRulestackRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#timeouts PaloAltoLocalRulestackRule#timeouts}

---

### PaloAltoLocalRulestackRuleDestination <a name="PaloAltoLocalRulestackRuleDestination" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_local_rulestack_rule

paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination(
  cidrs: typing.List[str] = None,
  countries: typing.List[str] = None,
  feeds: typing.List[str] = None,
  local_rulestack_fqdn_list_ids: typing.List[str] = None,
  local_rulestack_prefix_list_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination.property.cidrs">cidrs</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#cidrs PaloAltoLocalRulestackRule#cidrs}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination.property.countries">countries</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#countries PaloAltoLocalRulestackRule#countries}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination.property.feeds">feeds</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#feeds PaloAltoLocalRulestackRule#feeds}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination.property.localRulestackFqdnListIds">local_rulestack_fqdn_list_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#local_rulestack_fqdn_list_ids PaloAltoLocalRulestackRule#local_rulestack_fqdn_list_ids}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination.property.localRulestackPrefixListIds">local_rulestack_prefix_list_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#local_rulestack_prefix_list_ids PaloAltoLocalRulestackRule#local_rulestack_prefix_list_ids}. |

---

##### `cidrs`<sup>Optional</sup> <a name="cidrs" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination.property.cidrs"></a>

```python
cidrs: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#cidrs PaloAltoLocalRulestackRule#cidrs}.

---

##### `countries`<sup>Optional</sup> <a name="countries" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination.property.countries"></a>

```python
countries: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#countries PaloAltoLocalRulestackRule#countries}.

---

##### `feeds`<sup>Optional</sup> <a name="feeds" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination.property.feeds"></a>

```python
feeds: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#feeds PaloAltoLocalRulestackRule#feeds}.

---

##### `local_rulestack_fqdn_list_ids`<sup>Optional</sup> <a name="local_rulestack_fqdn_list_ids" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination.property.localRulestackFqdnListIds"></a>

```python
local_rulestack_fqdn_list_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#local_rulestack_fqdn_list_ids PaloAltoLocalRulestackRule#local_rulestack_fqdn_list_ids}.

---

##### `local_rulestack_prefix_list_ids`<sup>Optional</sup> <a name="local_rulestack_prefix_list_ids" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination.property.localRulestackPrefixListIds"></a>

```python
local_rulestack_prefix_list_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#local_rulestack_prefix_list_ids PaloAltoLocalRulestackRule#local_rulestack_prefix_list_ids}.

---

### PaloAltoLocalRulestackRuleSource <a name="PaloAltoLocalRulestackRuleSource" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSource.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_local_rulestack_rule

paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSource(
  cidrs: typing.List[str] = None,
  countries: typing.List[str] = None,
  feeds: typing.List[str] = None,
  local_rulestack_prefix_list_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSource.property.cidrs">cidrs</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#cidrs PaloAltoLocalRulestackRule#cidrs}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSource.property.countries">countries</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#countries PaloAltoLocalRulestackRule#countries}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSource.property.feeds">feeds</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#feeds PaloAltoLocalRulestackRule#feeds}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSource.property.localRulestackPrefixListIds">local_rulestack_prefix_list_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#local_rulestack_prefix_list_ids PaloAltoLocalRulestackRule#local_rulestack_prefix_list_ids}. |

---

##### `cidrs`<sup>Optional</sup> <a name="cidrs" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSource.property.cidrs"></a>

```python
cidrs: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#cidrs PaloAltoLocalRulestackRule#cidrs}.

---

##### `countries`<sup>Optional</sup> <a name="countries" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSource.property.countries"></a>

```python
countries: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#countries PaloAltoLocalRulestackRule#countries}.

---

##### `feeds`<sup>Optional</sup> <a name="feeds" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSource.property.feeds"></a>

```python
feeds: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#feeds PaloAltoLocalRulestackRule#feeds}.

---

##### `local_rulestack_prefix_list_ids`<sup>Optional</sup> <a name="local_rulestack_prefix_list_ids" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSource.property.localRulestackPrefixListIds"></a>

```python
local_rulestack_prefix_list_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#local_rulestack_prefix_list_ids PaloAltoLocalRulestackRule#local_rulestack_prefix_list_ids}.

---

### PaloAltoLocalRulestackRuleTimeouts <a name="PaloAltoLocalRulestackRuleTimeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_local_rulestack_rule

paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#create PaloAltoLocalRulestackRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#delete PaloAltoLocalRulestackRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#read PaloAltoLocalRulestackRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#update PaloAltoLocalRulestackRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#create PaloAltoLocalRulestackRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#delete PaloAltoLocalRulestackRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#read PaloAltoLocalRulestackRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/palo_alto_local_rulestack_rule#update PaloAltoLocalRulestackRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PaloAltoLocalRulestackRuleCategoryOutputReference <a name="PaloAltoLocalRulestackRuleCategoryOutputReference" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_local_rulestack_rule

paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.resetFeeds">reset_feeds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_feeds` <a name="reset_feeds" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.resetFeeds"></a>

```python
def reset_feeds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.property.customUrlsInput">custom_urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.property.feedsInput">feeds_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.property.customUrls">custom_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.property.feeds">feeds</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategory">PaloAltoLocalRulestackRuleCategory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_urls_input`<sup>Optional</sup> <a name="custom_urls_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.property.customUrlsInput"></a>

```python
custom_urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `feeds_input`<sup>Optional</sup> <a name="feeds_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.property.feedsInput"></a>

```python
feeds_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_urls`<sup>Required</sup> <a name="custom_urls" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.property.customUrls"></a>

```python
custom_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `feeds`<sup>Required</sup> <a name="feeds" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.property.feeds"></a>

```python
feeds: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.property.internalValue"></a>

```python
internal_value: PaloAltoLocalRulestackRuleCategory
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategory">PaloAltoLocalRulestackRuleCategory</a>

---


### PaloAltoLocalRulestackRuleDestinationOutputReference <a name="PaloAltoLocalRulestackRuleDestinationOutputReference" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_local_rulestack_rule

paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.resetCidrs">reset_cidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.resetCountries">reset_countries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.resetFeeds">reset_feeds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.resetLocalRulestackFqdnListIds">reset_local_rulestack_fqdn_list_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.resetLocalRulestackPrefixListIds">reset_local_rulestack_prefix_list_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cidrs` <a name="reset_cidrs" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.resetCidrs"></a>

```python
def reset_cidrs() -> None
```

##### `reset_countries` <a name="reset_countries" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.resetCountries"></a>

```python
def reset_countries() -> None
```

##### `reset_feeds` <a name="reset_feeds" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.resetFeeds"></a>

```python
def reset_feeds() -> None
```

##### `reset_local_rulestack_fqdn_list_ids` <a name="reset_local_rulestack_fqdn_list_ids" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.resetLocalRulestackFqdnListIds"></a>

```python
def reset_local_rulestack_fqdn_list_ids() -> None
```

##### `reset_local_rulestack_prefix_list_ids` <a name="reset_local_rulestack_prefix_list_ids" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.resetLocalRulestackPrefixListIds"></a>

```python
def reset_local_rulestack_prefix_list_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.cidrsInput">cidrs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.countriesInput">countries_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.feedsInput">feeds_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.localRulestackFqdnListIdsInput">local_rulestack_fqdn_list_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.localRulestackPrefixListIdsInput">local_rulestack_prefix_list_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.cidrs">cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.countries">countries</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.feeds">feeds</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.localRulestackFqdnListIds">local_rulestack_fqdn_list_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.localRulestackPrefixListIds">local_rulestack_prefix_list_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination">PaloAltoLocalRulestackRuleDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidrs_input`<sup>Optional</sup> <a name="cidrs_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.cidrsInput"></a>

```python
cidrs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `countries_input`<sup>Optional</sup> <a name="countries_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.countriesInput"></a>

```python
countries_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `feeds_input`<sup>Optional</sup> <a name="feeds_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.feedsInput"></a>

```python
feeds_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `local_rulestack_fqdn_list_ids_input`<sup>Optional</sup> <a name="local_rulestack_fqdn_list_ids_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.localRulestackFqdnListIdsInput"></a>

```python
local_rulestack_fqdn_list_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `local_rulestack_prefix_list_ids_input`<sup>Optional</sup> <a name="local_rulestack_prefix_list_ids_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.localRulestackPrefixListIdsInput"></a>

```python
local_rulestack_prefix_list_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cidrs`<sup>Required</sup> <a name="cidrs" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.cidrs"></a>

```python
cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `countries`<sup>Required</sup> <a name="countries" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.countries"></a>

```python
countries: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `feeds`<sup>Required</sup> <a name="feeds" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.feeds"></a>

```python
feeds: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `local_rulestack_fqdn_list_ids`<sup>Required</sup> <a name="local_rulestack_fqdn_list_ids" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.localRulestackFqdnListIds"></a>

```python
local_rulestack_fqdn_list_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `local_rulestack_prefix_list_ids`<sup>Required</sup> <a name="local_rulestack_prefix_list_ids" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.localRulestackPrefixListIds"></a>

```python
local_rulestack_prefix_list_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.internalValue"></a>

```python
internal_value: PaloAltoLocalRulestackRuleDestination
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination">PaloAltoLocalRulestackRuleDestination</a>

---


### PaloAltoLocalRulestackRuleSourceOutputReference <a name="PaloAltoLocalRulestackRuleSourceOutputReference" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_local_rulestack_rule

paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.resetCidrs">reset_cidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.resetCountries">reset_countries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.resetFeeds">reset_feeds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.resetLocalRulestackPrefixListIds">reset_local_rulestack_prefix_list_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cidrs` <a name="reset_cidrs" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.resetCidrs"></a>

```python
def reset_cidrs() -> None
```

##### `reset_countries` <a name="reset_countries" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.resetCountries"></a>

```python
def reset_countries() -> None
```

##### `reset_feeds` <a name="reset_feeds" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.resetFeeds"></a>

```python
def reset_feeds() -> None
```

##### `reset_local_rulestack_prefix_list_ids` <a name="reset_local_rulestack_prefix_list_ids" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.resetLocalRulestackPrefixListIds"></a>

```python
def reset_local_rulestack_prefix_list_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.cidrsInput">cidrs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.countriesInput">countries_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.feedsInput">feeds_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.localRulestackPrefixListIdsInput">local_rulestack_prefix_list_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.cidrs">cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.countries">countries</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.feeds">feeds</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.localRulestackPrefixListIds">local_rulestack_prefix_list_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSource">PaloAltoLocalRulestackRuleSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidrs_input`<sup>Optional</sup> <a name="cidrs_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.cidrsInput"></a>

```python
cidrs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `countries_input`<sup>Optional</sup> <a name="countries_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.countriesInput"></a>

```python
countries_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `feeds_input`<sup>Optional</sup> <a name="feeds_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.feedsInput"></a>

```python
feeds_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `local_rulestack_prefix_list_ids_input`<sup>Optional</sup> <a name="local_rulestack_prefix_list_ids_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.localRulestackPrefixListIdsInput"></a>

```python
local_rulestack_prefix_list_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cidrs`<sup>Required</sup> <a name="cidrs" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.cidrs"></a>

```python
cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `countries`<sup>Required</sup> <a name="countries" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.countries"></a>

```python
countries: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `feeds`<sup>Required</sup> <a name="feeds" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.feeds"></a>

```python
feeds: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `local_rulestack_prefix_list_ids`<sup>Required</sup> <a name="local_rulestack_prefix_list_ids" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.localRulestackPrefixListIds"></a>

```python
local_rulestack_prefix_list_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.internalValue"></a>

```python
internal_value: PaloAltoLocalRulestackRuleSource
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSource">PaloAltoLocalRulestackRuleSource</a>

---


### PaloAltoLocalRulestackRuleTimeoutsOutputReference <a name="PaloAltoLocalRulestackRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_local_rulestack_rule

paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeouts">PaloAltoLocalRulestackRuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PaloAltoLocalRulestackRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeouts">PaloAltoLocalRulestackRuleTimeouts</a>]

---



