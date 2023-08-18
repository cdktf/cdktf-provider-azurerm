# `azurerm_mssql_server_extended_auditing_policy`

Refer to the Terraform Registory for docs: [`azurerm_mssql_server_extended_auditing_policy`](https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy).

# `mssqlServerExtendedAuditingPolicy` Submodule <a name="`mssqlServerExtendedAuditingPolicy` Submodule" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlServerExtendedAuditingPolicy <a name="MssqlServerExtendedAuditingPolicy" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy azurerm_mssql_server_extended_auditing_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_server_extended_auditing_policy

mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  server_id: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  log_monitoring_enabled: typing.Union[bool, IResolvable] = None,
  retention_in_days: typing.Union[int, float] = None,
  storage_account_access_key: str = None,
  storage_account_access_key_is_secondary: typing.Union[bool, IResolvable] = None,
  storage_account_subscription_id: str = None,
  storage_endpoint: str = None,
  timeouts: MssqlServerExtendedAuditingPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.serverId">server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#server_id MssqlServerExtendedAuditingPolicy#server_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#enabled MssqlServerExtendedAuditingPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#id MssqlServerExtendedAuditingPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.logMonitoringEnabled">log_monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#log_monitoring_enabled MssqlServerExtendedAuditingPolicy#log_monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#retention_in_days MssqlServerExtendedAuditingPolicy#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#storage_account_access_key MssqlServerExtendedAuditingPolicy#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.storageAccountAccessKeyIsSecondary">storage_account_access_key_is_secondary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#storage_account_access_key_is_secondary MssqlServerExtendedAuditingPolicy#storage_account_access_key_is_secondary}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.storageAccountSubscriptionId">storage_account_subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#storage_account_subscription_id MssqlServerExtendedAuditingPolicy#storage_account_subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.storageEndpoint">storage_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#storage_endpoint MssqlServerExtendedAuditingPolicy#storage_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts">MssqlServerExtendedAuditingPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.serverId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#server_id MssqlServerExtendedAuditingPolicy#server_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#enabled MssqlServerExtendedAuditingPolicy#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#id MssqlServerExtendedAuditingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_monitoring_enabled`<sup>Optional</sup> <a name="log_monitoring_enabled" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.logMonitoringEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#log_monitoring_enabled MssqlServerExtendedAuditingPolicy#log_monitoring_enabled}.

---

##### `retention_in_days`<sup>Optional</sup> <a name="retention_in_days" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.retentionInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#retention_in_days MssqlServerExtendedAuditingPolicy#retention_in_days}.

---

##### `storage_account_access_key`<sup>Optional</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.storageAccountAccessKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#storage_account_access_key MssqlServerExtendedAuditingPolicy#storage_account_access_key}.

---

##### `storage_account_access_key_is_secondary`<sup>Optional</sup> <a name="storage_account_access_key_is_secondary" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.storageAccountAccessKeyIsSecondary"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#storage_account_access_key_is_secondary MssqlServerExtendedAuditingPolicy#storage_account_access_key_is_secondary}.

---

##### `storage_account_subscription_id`<sup>Optional</sup> <a name="storage_account_subscription_id" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.storageAccountSubscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#storage_account_subscription_id MssqlServerExtendedAuditingPolicy#storage_account_subscription_id}.

---

##### `storage_endpoint`<sup>Optional</sup> <a name="storage_endpoint" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.storageEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#storage_endpoint MssqlServerExtendedAuditingPolicy#storage_endpoint}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts">MssqlServerExtendedAuditingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#timeouts MssqlServerExtendedAuditingPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetLogMonitoringEnabled">reset_log_monitoring_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetRetentionInDays">reset_retention_in_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetStorageAccountAccessKey">reset_storage_account_access_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetStorageAccountAccessKeyIsSecondary">reset_storage_account_access_key_is_secondary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetStorageAccountSubscriptionId">reset_storage_account_subscription_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetStorageEndpoint">reset_storage_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#create MssqlServerExtendedAuditingPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#delete MssqlServerExtendedAuditingPolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#read MssqlServerExtendedAuditingPolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#update MssqlServerExtendedAuditingPolicy#update}.

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_log_monitoring_enabled` <a name="reset_log_monitoring_enabled" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetLogMonitoringEnabled"></a>

```python
def reset_log_monitoring_enabled() -> None
```

##### `reset_retention_in_days` <a name="reset_retention_in_days" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetRetentionInDays"></a>

```python
def reset_retention_in_days() -> None
```

##### `reset_storage_account_access_key` <a name="reset_storage_account_access_key" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetStorageAccountAccessKey"></a>

```python
def reset_storage_account_access_key() -> None
```

##### `reset_storage_account_access_key_is_secondary` <a name="reset_storage_account_access_key_is_secondary" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetStorageAccountAccessKeyIsSecondary"></a>

```python
def reset_storage_account_access_key_is_secondary() -> None
```

##### `reset_storage_account_subscription_id` <a name="reset_storage_account_subscription_id" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetStorageAccountSubscriptionId"></a>

```python
def reset_storage_account_subscription_id() -> None
```

##### `reset_storage_endpoint` <a name="reset_storage_endpoint" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetStorageEndpoint"></a>

```python
def reset_storage_endpoint() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_server_extended_auditing_policy

mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_server_extended_auditing_policy

mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_server_extended_auditing_policy

mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference">MssqlServerExtendedAuditingPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.logMonitoringEnabledInput">log_monitoring_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.retentionInDaysInput">retention_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.serverIdInput">server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageAccountAccessKeyInput">storage_account_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondaryInput">storage_account_access_key_is_secondary_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageAccountSubscriptionIdInput">storage_account_subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageEndpointInput">storage_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts">MssqlServerExtendedAuditingPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.logMonitoringEnabled">log_monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.serverId">server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondary">storage_account_access_key_is_secondary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageAccountSubscriptionId">storage_account_subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageEndpoint">storage_endpoint</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.timeouts"></a>

```python
timeouts: MssqlServerExtendedAuditingPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference">MssqlServerExtendedAuditingPolicyTimeoutsOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_monitoring_enabled_input`<sup>Optional</sup> <a name="log_monitoring_enabled_input" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.logMonitoringEnabledInput"></a>

```python
log_monitoring_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_in_days_input`<sup>Optional</sup> <a name="retention_in_days_input" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.retentionInDaysInput"></a>

```python
retention_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_id_input`<sup>Optional</sup> <a name="server_id_input" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.serverIdInput"></a>

```python
server_id_input: str
```

- *Type:* str

---

##### `storage_account_access_key_input`<sup>Optional</sup> <a name="storage_account_access_key_input" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageAccountAccessKeyInput"></a>

```python
storage_account_access_key_input: str
```

- *Type:* str

---

##### `storage_account_access_key_is_secondary_input`<sup>Optional</sup> <a name="storage_account_access_key_is_secondary_input" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondaryInput"></a>

```python
storage_account_access_key_is_secondary_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_account_subscription_id_input`<sup>Optional</sup> <a name="storage_account_subscription_id_input" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageAccountSubscriptionIdInput"></a>

```python
storage_account_subscription_id_input: str
```

- *Type:* str

---

##### `storage_endpoint_input`<sup>Optional</sup> <a name="storage_endpoint_input" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageEndpointInput"></a>

```python
storage_endpoint_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MssqlServerExtendedAuditingPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts">MssqlServerExtendedAuditingPolicyTimeouts</a>]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `log_monitoring_enabled`<sup>Required</sup> <a name="log_monitoring_enabled" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.logMonitoringEnabled"></a>

```python
log_monitoring_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_in_days`<sup>Required</sup> <a name="retention_in_days" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.retentionInDays"></a>

```python
retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

---

##### `storage_account_access_key`<sup>Required</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageAccountAccessKey"></a>

```python
storage_account_access_key: str
```

- *Type:* str

---

##### `storage_account_access_key_is_secondary`<sup>Required</sup> <a name="storage_account_access_key_is_secondary" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondary"></a>

```python
storage_account_access_key_is_secondary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_account_subscription_id`<sup>Required</sup> <a name="storage_account_subscription_id" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageAccountSubscriptionId"></a>

```python
storage_account_subscription_id: str
```

- *Type:* str

---

##### `storage_endpoint`<sup>Required</sup> <a name="storage_endpoint" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageEndpoint"></a>

```python
storage_endpoint: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlServerExtendedAuditingPolicyConfig <a name="MssqlServerExtendedAuditingPolicyConfig" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_server_extended_auditing_policy

mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  server_id: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  log_monitoring_enabled: typing.Union[bool, IResolvable] = None,
  retention_in_days: typing.Union[int, float] = None,
  storage_account_access_key: str = None,
  storage_account_access_key_is_secondary: typing.Union[bool, IResolvable] = None,
  storage_account_subscription_id: str = None,
  storage_endpoint: str = None,
  timeouts: MssqlServerExtendedAuditingPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.serverId">server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#server_id MssqlServerExtendedAuditingPolicy#server_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#enabled MssqlServerExtendedAuditingPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#id MssqlServerExtendedAuditingPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.logMonitoringEnabled">log_monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#log_monitoring_enabled MssqlServerExtendedAuditingPolicy#log_monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#retention_in_days MssqlServerExtendedAuditingPolicy#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#storage_account_access_key MssqlServerExtendedAuditingPolicy#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.storageAccountAccessKeyIsSecondary">storage_account_access_key_is_secondary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#storage_account_access_key_is_secondary MssqlServerExtendedAuditingPolicy#storage_account_access_key_is_secondary}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.storageAccountSubscriptionId">storage_account_subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#storage_account_subscription_id MssqlServerExtendedAuditingPolicy#storage_account_subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.storageEndpoint">storage_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#storage_endpoint MssqlServerExtendedAuditingPolicy#storage_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts">MssqlServerExtendedAuditingPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#server_id MssqlServerExtendedAuditingPolicy#server_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#enabled MssqlServerExtendedAuditingPolicy#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#id MssqlServerExtendedAuditingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_monitoring_enabled`<sup>Optional</sup> <a name="log_monitoring_enabled" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.logMonitoringEnabled"></a>

```python
log_monitoring_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#log_monitoring_enabled MssqlServerExtendedAuditingPolicy#log_monitoring_enabled}.

---

##### `retention_in_days`<sup>Optional</sup> <a name="retention_in_days" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.retentionInDays"></a>

```python
retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#retention_in_days MssqlServerExtendedAuditingPolicy#retention_in_days}.

---

##### `storage_account_access_key`<sup>Optional</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.storageAccountAccessKey"></a>

```python
storage_account_access_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#storage_account_access_key MssqlServerExtendedAuditingPolicy#storage_account_access_key}.

---

##### `storage_account_access_key_is_secondary`<sup>Optional</sup> <a name="storage_account_access_key_is_secondary" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.storageAccountAccessKeyIsSecondary"></a>

```python
storage_account_access_key_is_secondary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#storage_account_access_key_is_secondary MssqlServerExtendedAuditingPolicy#storage_account_access_key_is_secondary}.

---

##### `storage_account_subscription_id`<sup>Optional</sup> <a name="storage_account_subscription_id" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.storageAccountSubscriptionId"></a>

```python
storage_account_subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#storage_account_subscription_id MssqlServerExtendedAuditingPolicy#storage_account_subscription_id}.

---

##### `storage_endpoint`<sup>Optional</sup> <a name="storage_endpoint" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.storageEndpoint"></a>

```python
storage_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#storage_endpoint MssqlServerExtendedAuditingPolicy#storage_endpoint}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.timeouts"></a>

```python
timeouts: MssqlServerExtendedAuditingPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts">MssqlServerExtendedAuditingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#timeouts MssqlServerExtendedAuditingPolicy#timeouts}

---

### MssqlServerExtendedAuditingPolicyTimeouts <a name="MssqlServerExtendedAuditingPolicyTimeouts" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_server_extended_auditing_policy

mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#create MssqlServerExtendedAuditingPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#delete MssqlServerExtendedAuditingPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#read MssqlServerExtendedAuditingPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#update MssqlServerExtendedAuditingPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#create MssqlServerExtendedAuditingPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#delete MssqlServerExtendedAuditingPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#read MssqlServerExtendedAuditingPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/mssql_server_extended_auditing_policy#update MssqlServerExtendedAuditingPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlServerExtendedAuditingPolicyTimeoutsOutputReference <a name="MssqlServerExtendedAuditingPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_server_extended_auditing_policy

mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts">MssqlServerExtendedAuditingPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MssqlServerExtendedAuditingPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts">MssqlServerExtendedAuditingPolicyTimeouts</a>]

---



