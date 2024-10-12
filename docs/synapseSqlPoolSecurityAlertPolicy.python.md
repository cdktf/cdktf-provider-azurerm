# `synapseSqlPoolSecurityAlertPolicy` Submodule <a name="`synapseSqlPoolSecurityAlertPolicy` Submodule" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapseSqlPoolSecurityAlertPolicy <a name="SynapseSqlPoolSecurityAlertPolicy" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy azurerm_synapse_sql_pool_security_alert_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_sql_pool_security_alert_policy

synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy(
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
  sql_pool_id: str,
  disabled_alerts: typing.List[str] = None,
  email_account_admins_enabled: typing.Union[bool, IResolvable] = None,
  email_addresses: typing.List[str] = None,
  id: str = None,
  retention_days: typing.Union[int, float] = None,
  storage_account_access_key: str = None,
  storage_endpoint: str = None,
  timeouts: SynapseSqlPoolSecurityAlertPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.policyState">policy_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#policy_state SynapseSqlPoolSecurityAlertPolicy#policy_state}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.sqlPoolId">sql_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#sql_pool_id SynapseSqlPoolSecurityAlertPolicy#sql_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.disabledAlerts">disabled_alerts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#disabled_alerts SynapseSqlPoolSecurityAlertPolicy#disabled_alerts}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.emailAccountAdminsEnabled">email_account_admins_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#email_account_admins_enabled SynapseSqlPoolSecurityAlertPolicy#email_account_admins_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.emailAddresses">email_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#email_addresses SynapseSqlPoolSecurityAlertPolicy#email_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#id SynapseSqlPoolSecurityAlertPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#retention_days SynapseSqlPoolSecurityAlertPolicy#retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#storage_account_access_key SynapseSqlPoolSecurityAlertPolicy#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.storageEndpoint">storage_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#storage_endpoint SynapseSqlPoolSecurityAlertPolicy#storage_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeouts">SynapseSqlPoolSecurityAlertPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy_state`<sup>Required</sup> <a name="policy_state" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.policyState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#policy_state SynapseSqlPoolSecurityAlertPolicy#policy_state}.

---

##### `sql_pool_id`<sup>Required</sup> <a name="sql_pool_id" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.sqlPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#sql_pool_id SynapseSqlPoolSecurityAlertPolicy#sql_pool_id}.

---

##### `disabled_alerts`<sup>Optional</sup> <a name="disabled_alerts" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.disabledAlerts"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#disabled_alerts SynapseSqlPoolSecurityAlertPolicy#disabled_alerts}.

---

##### `email_account_admins_enabled`<sup>Optional</sup> <a name="email_account_admins_enabled" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.emailAccountAdminsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#email_account_admins_enabled SynapseSqlPoolSecurityAlertPolicy#email_account_admins_enabled}.

---

##### `email_addresses`<sup>Optional</sup> <a name="email_addresses" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.emailAddresses"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#email_addresses SynapseSqlPoolSecurityAlertPolicy#email_addresses}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#id SynapseSqlPoolSecurityAlertPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retention_days`<sup>Optional</sup> <a name="retention_days" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.retentionDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#retention_days SynapseSqlPoolSecurityAlertPolicy#retention_days}.

---

##### `storage_account_access_key`<sup>Optional</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.storageAccountAccessKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#storage_account_access_key SynapseSqlPoolSecurityAlertPolicy#storage_account_access_key}.

---

##### `storage_endpoint`<sup>Optional</sup> <a name="storage_endpoint" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.storageEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#storage_endpoint SynapseSqlPoolSecurityAlertPolicy#storage_endpoint}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeouts">SynapseSqlPoolSecurityAlertPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#timeouts SynapseSqlPoolSecurityAlertPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.resetDisabledAlerts">reset_disabled_alerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.resetEmailAccountAdminsEnabled">reset_email_account_admins_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.resetEmailAddresses">reset_email_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.resetRetentionDays">reset_retention_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.resetStorageAccountAccessKey">reset_storage_account_access_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.resetStorageEndpoint">reset_storage_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#create SynapseSqlPoolSecurityAlertPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#delete SynapseSqlPoolSecurityAlertPolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#read SynapseSqlPoolSecurityAlertPolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#update SynapseSqlPoolSecurityAlertPolicy#update}.

---

##### `reset_disabled_alerts` <a name="reset_disabled_alerts" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.resetDisabledAlerts"></a>

```python
def reset_disabled_alerts() -> None
```

##### `reset_email_account_admins_enabled` <a name="reset_email_account_admins_enabled" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.resetEmailAccountAdminsEnabled"></a>

```python
def reset_email_account_admins_enabled() -> None
```

##### `reset_email_addresses` <a name="reset_email_addresses" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.resetEmailAddresses"></a>

```python
def reset_email_addresses() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_retention_days` <a name="reset_retention_days" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.resetRetentionDays"></a>

```python
def reset_retention_days() -> None
```

##### `reset_storage_account_access_key` <a name="reset_storage_account_access_key" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.resetStorageAccountAccessKey"></a>

```python
def reset_storage_account_access_key() -> None
```

##### `reset_storage_endpoint` <a name="reset_storage_endpoint" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.resetStorageEndpoint"></a>

```python
def reset_storage_endpoint() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SynapseSqlPoolSecurityAlertPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_sql_pool_security_alert_policy

synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_sql_pool_security_alert_policy

synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_sql_pool_security_alert_policy

synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_sql_pool_security_alert_policy

synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SynapseSqlPoolSecurityAlertPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SynapseSqlPoolSecurityAlertPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SynapseSqlPoolSecurityAlertPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SynapseSqlPoolSecurityAlertPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference">SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.disabledAlertsInput">disabled_alerts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.emailAccountAdminsEnabledInput">email_account_admins_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.emailAddressesInput">email_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.policyStateInput">policy_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.retentionDaysInput">retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.sqlPoolIdInput">sql_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.storageAccountAccessKeyInput">storage_account_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.storageEndpointInput">storage_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeouts">SynapseSqlPoolSecurityAlertPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.disabledAlerts">disabled_alerts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.emailAccountAdminsEnabled">email_account_admins_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.emailAddresses">email_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.policyState">policy_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.sqlPoolId">sql_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.storageEndpoint">storage_endpoint</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.timeouts"></a>

```python
timeouts: SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference">SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference</a>

---

##### `disabled_alerts_input`<sup>Optional</sup> <a name="disabled_alerts_input" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.disabledAlertsInput"></a>

```python
disabled_alerts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_account_admins_enabled_input`<sup>Optional</sup> <a name="email_account_admins_enabled_input" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.emailAccountAdminsEnabledInput"></a>

```python
email_account_admins_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `email_addresses_input`<sup>Optional</sup> <a name="email_addresses_input" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.emailAddressesInput"></a>

```python
email_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `policy_state_input`<sup>Optional</sup> <a name="policy_state_input" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.policyStateInput"></a>

```python
policy_state_input: str
```

- *Type:* str

---

##### `retention_days_input`<sup>Optional</sup> <a name="retention_days_input" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.retentionDaysInput"></a>

```python
retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sql_pool_id_input`<sup>Optional</sup> <a name="sql_pool_id_input" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.sqlPoolIdInput"></a>

```python
sql_pool_id_input: str
```

- *Type:* str

---

##### `storage_account_access_key_input`<sup>Optional</sup> <a name="storage_account_access_key_input" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.storageAccountAccessKeyInput"></a>

```python
storage_account_access_key_input: str
```

- *Type:* str

---

##### `storage_endpoint_input`<sup>Optional</sup> <a name="storage_endpoint_input" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.storageEndpointInput"></a>

```python
storage_endpoint_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SynapseSqlPoolSecurityAlertPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeouts">SynapseSqlPoolSecurityAlertPolicyTimeouts</a>]

---

##### `disabled_alerts`<sup>Required</sup> <a name="disabled_alerts" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.disabledAlerts"></a>

```python
disabled_alerts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_account_admins_enabled`<sup>Required</sup> <a name="email_account_admins_enabled" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.emailAccountAdminsEnabled"></a>

```python
email_account_admins_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `email_addresses`<sup>Required</sup> <a name="email_addresses" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.emailAddresses"></a>

```python
email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `policy_state`<sup>Required</sup> <a name="policy_state" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.policyState"></a>

```python
policy_state: str
```

- *Type:* str

---

##### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sql_pool_id`<sup>Required</sup> <a name="sql_pool_id" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.sqlPoolId"></a>

```python
sql_pool_id: str
```

- *Type:* str

---

##### `storage_account_access_key`<sup>Required</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.storageAccountAccessKey"></a>

```python
storage_account_access_key: str
```

- *Type:* str

---

##### `storage_endpoint`<sup>Required</sup> <a name="storage_endpoint" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.storageEndpoint"></a>

```python
storage_endpoint: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SynapseSqlPoolSecurityAlertPolicyConfig <a name="SynapseSqlPoolSecurityAlertPolicyConfig" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_sql_pool_security_alert_policy

synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  policy_state: str,
  sql_pool_id: str,
  disabled_alerts: typing.List[str] = None,
  email_account_admins_enabled: typing.Union[bool, IResolvable] = None,
  email_addresses: typing.List[str] = None,
  id: str = None,
  retention_days: typing.Union[int, float] = None,
  storage_account_access_key: str = None,
  storage_endpoint: str = None,
  timeouts: SynapseSqlPoolSecurityAlertPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.policyState">policy_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#policy_state SynapseSqlPoolSecurityAlertPolicy#policy_state}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.sqlPoolId">sql_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#sql_pool_id SynapseSqlPoolSecurityAlertPolicy#sql_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.disabledAlerts">disabled_alerts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#disabled_alerts SynapseSqlPoolSecurityAlertPolicy#disabled_alerts}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.emailAccountAdminsEnabled">email_account_admins_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#email_account_admins_enabled SynapseSqlPoolSecurityAlertPolicy#email_account_admins_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.emailAddresses">email_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#email_addresses SynapseSqlPoolSecurityAlertPolicy#email_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#id SynapseSqlPoolSecurityAlertPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#retention_days SynapseSqlPoolSecurityAlertPolicy#retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#storage_account_access_key SynapseSqlPoolSecurityAlertPolicy#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.storageEndpoint">storage_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#storage_endpoint SynapseSqlPoolSecurityAlertPolicy#storage_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeouts">SynapseSqlPoolSecurityAlertPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy_state`<sup>Required</sup> <a name="policy_state" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.policyState"></a>

```python
policy_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#policy_state SynapseSqlPoolSecurityAlertPolicy#policy_state}.

---

##### `sql_pool_id`<sup>Required</sup> <a name="sql_pool_id" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.sqlPoolId"></a>

```python
sql_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#sql_pool_id SynapseSqlPoolSecurityAlertPolicy#sql_pool_id}.

---

##### `disabled_alerts`<sup>Optional</sup> <a name="disabled_alerts" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.disabledAlerts"></a>

```python
disabled_alerts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#disabled_alerts SynapseSqlPoolSecurityAlertPolicy#disabled_alerts}.

---

##### `email_account_admins_enabled`<sup>Optional</sup> <a name="email_account_admins_enabled" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.emailAccountAdminsEnabled"></a>

```python
email_account_admins_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#email_account_admins_enabled SynapseSqlPoolSecurityAlertPolicy#email_account_admins_enabled}.

---

##### `email_addresses`<sup>Optional</sup> <a name="email_addresses" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.emailAddresses"></a>

```python
email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#email_addresses SynapseSqlPoolSecurityAlertPolicy#email_addresses}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#id SynapseSqlPoolSecurityAlertPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retention_days`<sup>Optional</sup> <a name="retention_days" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#retention_days SynapseSqlPoolSecurityAlertPolicy#retention_days}.

---

##### `storage_account_access_key`<sup>Optional</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.storageAccountAccessKey"></a>

```python
storage_account_access_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#storage_account_access_key SynapseSqlPoolSecurityAlertPolicy#storage_account_access_key}.

---

##### `storage_endpoint`<sup>Optional</sup> <a name="storage_endpoint" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.storageEndpoint"></a>

```python
storage_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#storage_endpoint SynapseSqlPoolSecurityAlertPolicy#storage_endpoint}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.timeouts"></a>

```python
timeouts: SynapseSqlPoolSecurityAlertPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeouts">SynapseSqlPoolSecurityAlertPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#timeouts SynapseSqlPoolSecurityAlertPolicy#timeouts}

---

### SynapseSqlPoolSecurityAlertPolicyTimeouts <a name="SynapseSqlPoolSecurityAlertPolicyTimeouts" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_sql_pool_security_alert_policy

synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#create SynapseSqlPoolSecurityAlertPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#delete SynapseSqlPoolSecurityAlertPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#read SynapseSqlPoolSecurityAlertPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#update SynapseSqlPoolSecurityAlertPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#create SynapseSqlPoolSecurityAlertPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#delete SynapseSqlPoolSecurityAlertPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#read SynapseSqlPoolSecurityAlertPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/synapse_sql_pool_security_alert_policy#update SynapseSqlPoolSecurityAlertPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference <a name="SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_sql_pool_security_alert_policy

synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeouts">SynapseSqlPoolSecurityAlertPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SynapseSqlPoolSecurityAlertPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeouts">SynapseSqlPoolSecurityAlertPolicyTimeouts</a>]

---



