# `synapseWorkspaceSecurityAlertPolicy` Submodule <a name="`synapseWorkspaceSecurityAlertPolicy` Submodule" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapseWorkspaceSecurityAlertPolicy <a name="SynapseWorkspaceSecurityAlertPolicy" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy azurerm_synapse_workspace_security_alert_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_workspace_security_alert_policy

synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  policy_state: str,
  synapse_workspace_id: str,
  disabled_alerts: typing.List[str] = None,
  email_account_admins_enabled: typing.Union[bool, IResolvable] = None,
  email_addresses: typing.List[str] = None,
  id: str = None,
  retention_days: typing.Union[int, float] = None,
  storage_account_access_key: str = None,
  storage_endpoint: str = None,
  timeouts: SynapseWorkspaceSecurityAlertPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.policyState">policy_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#policy_state SynapseWorkspaceSecurityAlertPolicy#policy_state}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.synapseWorkspaceId">synapse_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#synapse_workspace_id SynapseWorkspaceSecurityAlertPolicy#synapse_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.disabledAlerts">disabled_alerts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#disabled_alerts SynapseWorkspaceSecurityAlertPolicy#disabled_alerts}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.emailAccountAdminsEnabled">email_account_admins_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#email_account_admins_enabled SynapseWorkspaceSecurityAlertPolicy#email_account_admins_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.emailAddresses">email_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#email_addresses SynapseWorkspaceSecurityAlertPolicy#email_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#id SynapseWorkspaceSecurityAlertPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#retention_days SynapseWorkspaceSecurityAlertPolicy#retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#storage_account_access_key SynapseWorkspaceSecurityAlertPolicy#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.storageEndpoint">storage_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#storage_endpoint SynapseWorkspaceSecurityAlertPolicy#storage_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts">SynapseWorkspaceSecurityAlertPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy_state`<sup>Required</sup> <a name="policy_state" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.policyState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#policy_state SynapseWorkspaceSecurityAlertPolicy#policy_state}.

---

##### `synapse_workspace_id`<sup>Required</sup> <a name="synapse_workspace_id" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.synapseWorkspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#synapse_workspace_id SynapseWorkspaceSecurityAlertPolicy#synapse_workspace_id}.

---

##### `disabled_alerts`<sup>Optional</sup> <a name="disabled_alerts" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.disabledAlerts"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#disabled_alerts SynapseWorkspaceSecurityAlertPolicy#disabled_alerts}.

---

##### `email_account_admins_enabled`<sup>Optional</sup> <a name="email_account_admins_enabled" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.emailAccountAdminsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#email_account_admins_enabled SynapseWorkspaceSecurityAlertPolicy#email_account_admins_enabled}.

---

##### `email_addresses`<sup>Optional</sup> <a name="email_addresses" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.emailAddresses"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#email_addresses SynapseWorkspaceSecurityAlertPolicy#email_addresses}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#id SynapseWorkspaceSecurityAlertPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retention_days`<sup>Optional</sup> <a name="retention_days" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.retentionDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#retention_days SynapseWorkspaceSecurityAlertPolicy#retention_days}.

---

##### `storage_account_access_key`<sup>Optional</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.storageAccountAccessKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#storage_account_access_key SynapseWorkspaceSecurityAlertPolicy#storage_account_access_key}.

---

##### `storage_endpoint`<sup>Optional</sup> <a name="storage_endpoint" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.storageEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#storage_endpoint SynapseWorkspaceSecurityAlertPolicy#storage_endpoint}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts">SynapseWorkspaceSecurityAlertPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#timeouts SynapseWorkspaceSecurityAlertPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetDisabledAlerts">reset_disabled_alerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetEmailAccountAdminsEnabled">reset_email_account_admins_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetEmailAddresses">reset_email_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetRetentionDays">reset_retention_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetStorageAccountAccessKey">reset_storage_account_access_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetStorageEndpoint">reset_storage_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#create SynapseWorkspaceSecurityAlertPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#delete SynapseWorkspaceSecurityAlertPolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#read SynapseWorkspaceSecurityAlertPolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#update SynapseWorkspaceSecurityAlertPolicy#update}.

---

##### `reset_disabled_alerts` <a name="reset_disabled_alerts" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetDisabledAlerts"></a>

```python
def reset_disabled_alerts() -> None
```

##### `reset_email_account_admins_enabled` <a name="reset_email_account_admins_enabled" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetEmailAccountAdminsEnabled"></a>

```python
def reset_email_account_admins_enabled() -> None
```

##### `reset_email_addresses` <a name="reset_email_addresses" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetEmailAddresses"></a>

```python
def reset_email_addresses() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_retention_days` <a name="reset_retention_days" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetRetentionDays"></a>

```python
def reset_retention_days() -> None
```

##### `reset_storage_account_access_key` <a name="reset_storage_account_access_key" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetStorageAccountAccessKey"></a>

```python
def reset_storage_account_access_key() -> None
```

##### `reset_storage_endpoint` <a name="reset_storage_endpoint" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetStorageEndpoint"></a>

```python
def reset_storage_endpoint() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SynapseWorkspaceSecurityAlertPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_workspace_security_alert_policy

synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_workspace_security_alert_policy

synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_workspace_security_alert_policy

synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_workspace_security_alert_policy

synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SynapseWorkspaceSecurityAlertPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SynapseWorkspaceSecurityAlertPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SynapseWorkspaceSecurityAlertPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SynapseWorkspaceSecurityAlertPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference">SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.disabledAlertsInput">disabled_alerts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.emailAccountAdminsEnabledInput">email_account_admins_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.emailAddressesInput">email_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.policyStateInput">policy_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.retentionDaysInput">retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.storageAccountAccessKeyInput">storage_account_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.storageEndpointInput">storage_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.synapseWorkspaceIdInput">synapse_workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts">SynapseWorkspaceSecurityAlertPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.disabledAlerts">disabled_alerts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.emailAccountAdminsEnabled">email_account_admins_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.emailAddresses">email_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.policyState">policy_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.storageEndpoint">storage_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.synapseWorkspaceId">synapse_workspace_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.timeouts"></a>

```python
timeouts: SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference">SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference</a>

---

##### `disabled_alerts_input`<sup>Optional</sup> <a name="disabled_alerts_input" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.disabledAlertsInput"></a>

```python
disabled_alerts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_account_admins_enabled_input`<sup>Optional</sup> <a name="email_account_admins_enabled_input" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.emailAccountAdminsEnabledInput"></a>

```python
email_account_admins_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `email_addresses_input`<sup>Optional</sup> <a name="email_addresses_input" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.emailAddressesInput"></a>

```python
email_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `policy_state_input`<sup>Optional</sup> <a name="policy_state_input" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.policyStateInput"></a>

```python
policy_state_input: str
```

- *Type:* str

---

##### `retention_days_input`<sup>Optional</sup> <a name="retention_days_input" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.retentionDaysInput"></a>

```python
retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_account_access_key_input`<sup>Optional</sup> <a name="storage_account_access_key_input" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.storageAccountAccessKeyInput"></a>

```python
storage_account_access_key_input: str
```

- *Type:* str

---

##### `storage_endpoint_input`<sup>Optional</sup> <a name="storage_endpoint_input" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.storageEndpointInput"></a>

```python
storage_endpoint_input: str
```

- *Type:* str

---

##### `synapse_workspace_id_input`<sup>Optional</sup> <a name="synapse_workspace_id_input" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.synapseWorkspaceIdInput"></a>

```python
synapse_workspace_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SynapseWorkspaceSecurityAlertPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts">SynapseWorkspaceSecurityAlertPolicyTimeouts</a>]

---

##### `disabled_alerts`<sup>Required</sup> <a name="disabled_alerts" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.disabledAlerts"></a>

```python
disabled_alerts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_account_admins_enabled`<sup>Required</sup> <a name="email_account_admins_enabled" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.emailAccountAdminsEnabled"></a>

```python
email_account_admins_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `email_addresses`<sup>Required</sup> <a name="email_addresses" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.emailAddresses"></a>

```python
email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `policy_state`<sup>Required</sup> <a name="policy_state" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.policyState"></a>

```python
policy_state: str
```

- *Type:* str

---

##### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_account_access_key`<sup>Required</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.storageAccountAccessKey"></a>

```python
storage_account_access_key: str
```

- *Type:* str

---

##### `storage_endpoint`<sup>Required</sup> <a name="storage_endpoint" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.storageEndpoint"></a>

```python
storage_endpoint: str
```

- *Type:* str

---

##### `synapse_workspace_id`<sup>Required</sup> <a name="synapse_workspace_id" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.synapseWorkspaceId"></a>

```python
synapse_workspace_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SynapseWorkspaceSecurityAlertPolicyConfig <a name="SynapseWorkspaceSecurityAlertPolicyConfig" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_workspace_security_alert_policy

synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  policy_state: str,
  synapse_workspace_id: str,
  disabled_alerts: typing.List[str] = None,
  email_account_admins_enabled: typing.Union[bool, IResolvable] = None,
  email_addresses: typing.List[str] = None,
  id: str = None,
  retention_days: typing.Union[int, float] = None,
  storage_account_access_key: str = None,
  storage_endpoint: str = None,
  timeouts: SynapseWorkspaceSecurityAlertPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.policyState">policy_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#policy_state SynapseWorkspaceSecurityAlertPolicy#policy_state}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.synapseWorkspaceId">synapse_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#synapse_workspace_id SynapseWorkspaceSecurityAlertPolicy#synapse_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.disabledAlerts">disabled_alerts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#disabled_alerts SynapseWorkspaceSecurityAlertPolicy#disabled_alerts}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.emailAccountAdminsEnabled">email_account_admins_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#email_account_admins_enabled SynapseWorkspaceSecurityAlertPolicy#email_account_admins_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.emailAddresses">email_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#email_addresses SynapseWorkspaceSecurityAlertPolicy#email_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#id SynapseWorkspaceSecurityAlertPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#retention_days SynapseWorkspaceSecurityAlertPolicy#retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#storage_account_access_key SynapseWorkspaceSecurityAlertPolicy#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.storageEndpoint">storage_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#storage_endpoint SynapseWorkspaceSecurityAlertPolicy#storage_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts">SynapseWorkspaceSecurityAlertPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy_state`<sup>Required</sup> <a name="policy_state" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.policyState"></a>

```python
policy_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#policy_state SynapseWorkspaceSecurityAlertPolicy#policy_state}.

---

##### `synapse_workspace_id`<sup>Required</sup> <a name="synapse_workspace_id" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.synapseWorkspaceId"></a>

```python
synapse_workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#synapse_workspace_id SynapseWorkspaceSecurityAlertPolicy#synapse_workspace_id}.

---

##### `disabled_alerts`<sup>Optional</sup> <a name="disabled_alerts" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.disabledAlerts"></a>

```python
disabled_alerts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#disabled_alerts SynapseWorkspaceSecurityAlertPolicy#disabled_alerts}.

---

##### `email_account_admins_enabled`<sup>Optional</sup> <a name="email_account_admins_enabled" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.emailAccountAdminsEnabled"></a>

```python
email_account_admins_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#email_account_admins_enabled SynapseWorkspaceSecurityAlertPolicy#email_account_admins_enabled}.

---

##### `email_addresses`<sup>Optional</sup> <a name="email_addresses" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.emailAddresses"></a>

```python
email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#email_addresses SynapseWorkspaceSecurityAlertPolicy#email_addresses}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#id SynapseWorkspaceSecurityAlertPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retention_days`<sup>Optional</sup> <a name="retention_days" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#retention_days SynapseWorkspaceSecurityAlertPolicy#retention_days}.

---

##### `storage_account_access_key`<sup>Optional</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.storageAccountAccessKey"></a>

```python
storage_account_access_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#storage_account_access_key SynapseWorkspaceSecurityAlertPolicy#storage_account_access_key}.

---

##### `storage_endpoint`<sup>Optional</sup> <a name="storage_endpoint" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.storageEndpoint"></a>

```python
storage_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#storage_endpoint SynapseWorkspaceSecurityAlertPolicy#storage_endpoint}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.timeouts"></a>

```python
timeouts: SynapseWorkspaceSecurityAlertPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts">SynapseWorkspaceSecurityAlertPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#timeouts SynapseWorkspaceSecurityAlertPolicy#timeouts}

---

### SynapseWorkspaceSecurityAlertPolicyTimeouts <a name="SynapseWorkspaceSecurityAlertPolicyTimeouts" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_workspace_security_alert_policy

synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#create SynapseWorkspaceSecurityAlertPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#delete SynapseWorkspaceSecurityAlertPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#read SynapseWorkspaceSecurityAlertPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#update SynapseWorkspaceSecurityAlertPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#create SynapseWorkspaceSecurityAlertPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#delete SynapseWorkspaceSecurityAlertPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#read SynapseWorkspaceSecurityAlertPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/synapse_workspace_security_alert_policy#update SynapseWorkspaceSecurityAlertPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference <a name="SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_workspace_security_alert_policy

synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts">SynapseWorkspaceSecurityAlertPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SynapseWorkspaceSecurityAlertPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts">SynapseWorkspaceSecurityAlertPolicyTimeouts</a>]

---



