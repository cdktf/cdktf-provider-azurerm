# `azurerm_synapse_workspace_extended_auditing_policy`

Refer to the Terraform Registory for docs: [`azurerm_synapse_workspace_extended_auditing_policy`](https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy).

# `synapseWorkspaceExtendedAuditingPolicy` Submodule <a name="`synapseWorkspaceExtendedAuditingPolicy` Submodule" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapseWorkspaceExtendedAuditingPolicy <a name="SynapseWorkspaceExtendedAuditingPolicy" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy azurerm_synapse_workspace_extended_auditing_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_workspace_extended_auditing_policy

synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  synapse_workspace_id: str,
  id: str = None,
  log_monitoring_enabled: typing.Union[bool, IResolvable] = None,
  retention_in_days: typing.Union[int, float] = None,
  storage_account_access_key: str = None,
  storage_account_access_key_is_secondary: typing.Union[bool, IResolvable] = None,
  storage_endpoint: str = None,
  timeouts: SynapseWorkspaceExtendedAuditingPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.synapseWorkspaceId">synapse_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#synapse_workspace_id SynapseWorkspaceExtendedAuditingPolicy#synapse_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#id SynapseWorkspaceExtendedAuditingPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.logMonitoringEnabled">log_monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#log_monitoring_enabled SynapseWorkspaceExtendedAuditingPolicy#log_monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#retention_in_days SynapseWorkspaceExtendedAuditingPolicy#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#storage_account_access_key SynapseWorkspaceExtendedAuditingPolicy#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.storageAccountAccessKeyIsSecondary">storage_account_access_key_is_secondary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#storage_account_access_key_is_secondary SynapseWorkspaceExtendedAuditingPolicy#storage_account_access_key_is_secondary}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.storageEndpoint">storage_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#storage_endpoint SynapseWorkspaceExtendedAuditingPolicy#storage_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts">SynapseWorkspaceExtendedAuditingPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `synapse_workspace_id`<sup>Required</sup> <a name="synapse_workspace_id" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.synapseWorkspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#synapse_workspace_id SynapseWorkspaceExtendedAuditingPolicy#synapse_workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#id SynapseWorkspaceExtendedAuditingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_monitoring_enabled`<sup>Optional</sup> <a name="log_monitoring_enabled" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.logMonitoringEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#log_monitoring_enabled SynapseWorkspaceExtendedAuditingPolicy#log_monitoring_enabled}.

---

##### `retention_in_days`<sup>Optional</sup> <a name="retention_in_days" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.retentionInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#retention_in_days SynapseWorkspaceExtendedAuditingPolicy#retention_in_days}.

---

##### `storage_account_access_key`<sup>Optional</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.storageAccountAccessKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#storage_account_access_key SynapseWorkspaceExtendedAuditingPolicy#storage_account_access_key}.

---

##### `storage_account_access_key_is_secondary`<sup>Optional</sup> <a name="storage_account_access_key_is_secondary" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.storageAccountAccessKeyIsSecondary"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#storage_account_access_key_is_secondary SynapseWorkspaceExtendedAuditingPolicy#storage_account_access_key_is_secondary}.

---

##### `storage_endpoint`<sup>Optional</sup> <a name="storage_endpoint" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.storageEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#storage_endpoint SynapseWorkspaceExtendedAuditingPolicy#storage_endpoint}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts">SynapseWorkspaceExtendedAuditingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#timeouts SynapseWorkspaceExtendedAuditingPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetLogMonitoringEnabled">reset_log_monitoring_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetRetentionInDays">reset_retention_in_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetStorageAccountAccessKey">reset_storage_account_access_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetStorageAccountAccessKeyIsSecondary">reset_storage_account_access_key_is_secondary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetStorageEndpoint">reset_storage_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#create SynapseWorkspaceExtendedAuditingPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#delete SynapseWorkspaceExtendedAuditingPolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#read SynapseWorkspaceExtendedAuditingPolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#update SynapseWorkspaceExtendedAuditingPolicy#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_log_monitoring_enabled` <a name="reset_log_monitoring_enabled" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetLogMonitoringEnabled"></a>

```python
def reset_log_monitoring_enabled() -> None
```

##### `reset_retention_in_days` <a name="reset_retention_in_days" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetRetentionInDays"></a>

```python
def reset_retention_in_days() -> None
```

##### `reset_storage_account_access_key` <a name="reset_storage_account_access_key" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetStorageAccountAccessKey"></a>

```python
def reset_storage_account_access_key() -> None
```

##### `reset_storage_account_access_key_is_secondary` <a name="reset_storage_account_access_key_is_secondary" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetStorageAccountAccessKeyIsSecondary"></a>

```python
def reset_storage_account_access_key_is_secondary() -> None
```

##### `reset_storage_endpoint` <a name="reset_storage_endpoint" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetStorageEndpoint"></a>

```python
def reset_storage_endpoint() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_workspace_extended_auditing_policy

synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_workspace_extended_auditing_policy

synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_workspace_extended_auditing_policy

synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference">SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.logMonitoringEnabledInput">log_monitoring_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.retentionInDaysInput">retention_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.storageAccountAccessKeyInput">storage_account_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondaryInput">storage_account_access_key_is_secondary_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.storageEndpointInput">storage_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.synapseWorkspaceIdInput">synapse_workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts">SynapseWorkspaceExtendedAuditingPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.logMonitoringEnabled">log_monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondary">storage_account_access_key_is_secondary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.storageEndpoint">storage_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.synapseWorkspaceId">synapse_workspace_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.timeouts"></a>

```python
timeouts: SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference">SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_monitoring_enabled_input`<sup>Optional</sup> <a name="log_monitoring_enabled_input" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.logMonitoringEnabledInput"></a>

```python
log_monitoring_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_in_days_input`<sup>Optional</sup> <a name="retention_in_days_input" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.retentionInDaysInput"></a>

```python
retention_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_account_access_key_input`<sup>Optional</sup> <a name="storage_account_access_key_input" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.storageAccountAccessKeyInput"></a>

```python
storage_account_access_key_input: str
```

- *Type:* str

---

##### `storage_account_access_key_is_secondary_input`<sup>Optional</sup> <a name="storage_account_access_key_is_secondary_input" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondaryInput"></a>

```python
storage_account_access_key_is_secondary_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_endpoint_input`<sup>Optional</sup> <a name="storage_endpoint_input" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.storageEndpointInput"></a>

```python
storage_endpoint_input: str
```

- *Type:* str

---

##### `synapse_workspace_id_input`<sup>Optional</sup> <a name="synapse_workspace_id_input" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.synapseWorkspaceIdInput"></a>

```python
synapse_workspace_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SynapseWorkspaceExtendedAuditingPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts">SynapseWorkspaceExtendedAuditingPolicyTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `log_monitoring_enabled`<sup>Required</sup> <a name="log_monitoring_enabled" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.logMonitoringEnabled"></a>

```python
log_monitoring_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_in_days`<sup>Required</sup> <a name="retention_in_days" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.retentionInDays"></a>

```python
retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_account_access_key`<sup>Required</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.storageAccountAccessKey"></a>

```python
storage_account_access_key: str
```

- *Type:* str

---

##### `storage_account_access_key_is_secondary`<sup>Required</sup> <a name="storage_account_access_key_is_secondary" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondary"></a>

```python
storage_account_access_key_is_secondary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_endpoint`<sup>Required</sup> <a name="storage_endpoint" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.storageEndpoint"></a>

```python
storage_endpoint: str
```

- *Type:* str

---

##### `synapse_workspace_id`<sup>Required</sup> <a name="synapse_workspace_id" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.synapseWorkspaceId"></a>

```python
synapse_workspace_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SynapseWorkspaceExtendedAuditingPolicyConfig <a name="SynapseWorkspaceExtendedAuditingPolicyConfig" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_workspace_extended_auditing_policy

synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  synapse_workspace_id: str,
  id: str = None,
  log_monitoring_enabled: typing.Union[bool, IResolvable] = None,
  retention_in_days: typing.Union[int, float] = None,
  storage_account_access_key: str = None,
  storage_account_access_key_is_secondary: typing.Union[bool, IResolvable] = None,
  storage_endpoint: str = None,
  timeouts: SynapseWorkspaceExtendedAuditingPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.synapseWorkspaceId">synapse_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#synapse_workspace_id SynapseWorkspaceExtendedAuditingPolicy#synapse_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#id SynapseWorkspaceExtendedAuditingPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.logMonitoringEnabled">log_monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#log_monitoring_enabled SynapseWorkspaceExtendedAuditingPolicy#log_monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#retention_in_days SynapseWorkspaceExtendedAuditingPolicy#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#storage_account_access_key SynapseWorkspaceExtendedAuditingPolicy#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.storageAccountAccessKeyIsSecondary">storage_account_access_key_is_secondary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#storage_account_access_key_is_secondary SynapseWorkspaceExtendedAuditingPolicy#storage_account_access_key_is_secondary}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.storageEndpoint">storage_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#storage_endpoint SynapseWorkspaceExtendedAuditingPolicy#storage_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts">SynapseWorkspaceExtendedAuditingPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `synapse_workspace_id`<sup>Required</sup> <a name="synapse_workspace_id" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.synapseWorkspaceId"></a>

```python
synapse_workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#synapse_workspace_id SynapseWorkspaceExtendedAuditingPolicy#synapse_workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#id SynapseWorkspaceExtendedAuditingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_monitoring_enabled`<sup>Optional</sup> <a name="log_monitoring_enabled" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.logMonitoringEnabled"></a>

```python
log_monitoring_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#log_monitoring_enabled SynapseWorkspaceExtendedAuditingPolicy#log_monitoring_enabled}.

---

##### `retention_in_days`<sup>Optional</sup> <a name="retention_in_days" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.retentionInDays"></a>

```python
retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#retention_in_days SynapseWorkspaceExtendedAuditingPolicy#retention_in_days}.

---

##### `storage_account_access_key`<sup>Optional</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.storageAccountAccessKey"></a>

```python
storage_account_access_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#storage_account_access_key SynapseWorkspaceExtendedAuditingPolicy#storage_account_access_key}.

---

##### `storage_account_access_key_is_secondary`<sup>Optional</sup> <a name="storage_account_access_key_is_secondary" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.storageAccountAccessKeyIsSecondary"></a>

```python
storage_account_access_key_is_secondary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#storage_account_access_key_is_secondary SynapseWorkspaceExtendedAuditingPolicy#storage_account_access_key_is_secondary}.

---

##### `storage_endpoint`<sup>Optional</sup> <a name="storage_endpoint" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.storageEndpoint"></a>

```python
storage_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#storage_endpoint SynapseWorkspaceExtendedAuditingPolicy#storage_endpoint}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.timeouts"></a>

```python
timeouts: SynapseWorkspaceExtendedAuditingPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts">SynapseWorkspaceExtendedAuditingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#timeouts SynapseWorkspaceExtendedAuditingPolicy#timeouts}

---

### SynapseWorkspaceExtendedAuditingPolicyTimeouts <a name="SynapseWorkspaceExtendedAuditingPolicyTimeouts" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_workspace_extended_auditing_policy

synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#create SynapseWorkspaceExtendedAuditingPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#delete SynapseWorkspaceExtendedAuditingPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#read SynapseWorkspaceExtendedAuditingPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#update SynapseWorkspaceExtendedAuditingPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#create SynapseWorkspaceExtendedAuditingPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#delete SynapseWorkspaceExtendedAuditingPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#read SynapseWorkspaceExtendedAuditingPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/synapse_workspace_extended_auditing_policy#update SynapseWorkspaceExtendedAuditingPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference <a name="SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_workspace_extended_auditing_policy

synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts">SynapseWorkspaceExtendedAuditingPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SynapseWorkspaceExtendedAuditingPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts">SynapseWorkspaceExtendedAuditingPolicyTimeouts</a>]

---



