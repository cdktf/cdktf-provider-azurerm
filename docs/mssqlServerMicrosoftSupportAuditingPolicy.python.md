# `mssqlServerMicrosoftSupportAuditingPolicy` Submodule <a name="`mssqlServerMicrosoftSupportAuditingPolicy` Submodule" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlServerMicrosoftSupportAuditingPolicy <a name="MssqlServerMicrosoftSupportAuditingPolicy" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy azurerm_mssql_server_microsoft_support_auditing_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_server_microsoft_support_auditing_policy

mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy(
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
  blob_storage_endpoint: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  log_monitoring_enabled: typing.Union[bool, IResolvable] = None,
  storage_account_access_key: str = None,
  storage_account_subscription_id: str = None,
  timeouts: MssqlServerMicrosoftSupportAuditingPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.serverId">server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#server_id MssqlServerMicrosoftSupportAuditingPolicy#server_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.blobStorageEndpoint">blob_storage_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#blob_storage_endpoint MssqlServerMicrosoftSupportAuditingPolicy#blob_storage_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#enabled MssqlServerMicrosoftSupportAuditingPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#id MssqlServerMicrosoftSupportAuditingPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.logMonitoringEnabled">log_monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#log_monitoring_enabled MssqlServerMicrosoftSupportAuditingPolicy#log_monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#storage_account_access_key MssqlServerMicrosoftSupportAuditingPolicy#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.storageAccountSubscriptionId">storage_account_subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#storage_account_subscription_id MssqlServerMicrosoftSupportAuditingPolicy#storage_account_subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts">MssqlServerMicrosoftSupportAuditingPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.serverId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#server_id MssqlServerMicrosoftSupportAuditingPolicy#server_id}.

---

##### `blob_storage_endpoint`<sup>Optional</sup> <a name="blob_storage_endpoint" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.blobStorageEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#blob_storage_endpoint MssqlServerMicrosoftSupportAuditingPolicy#blob_storage_endpoint}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#enabled MssqlServerMicrosoftSupportAuditingPolicy#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#id MssqlServerMicrosoftSupportAuditingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_monitoring_enabled`<sup>Optional</sup> <a name="log_monitoring_enabled" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.logMonitoringEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#log_monitoring_enabled MssqlServerMicrosoftSupportAuditingPolicy#log_monitoring_enabled}.

---

##### `storage_account_access_key`<sup>Optional</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.storageAccountAccessKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#storage_account_access_key MssqlServerMicrosoftSupportAuditingPolicy#storage_account_access_key}.

---

##### `storage_account_subscription_id`<sup>Optional</sup> <a name="storage_account_subscription_id" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.storageAccountSubscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#storage_account_subscription_id MssqlServerMicrosoftSupportAuditingPolicy#storage_account_subscription_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts">MssqlServerMicrosoftSupportAuditingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#timeouts MssqlServerMicrosoftSupportAuditingPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetBlobStorageEndpoint">reset_blob_storage_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetLogMonitoringEnabled">reset_log_monitoring_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetStorageAccountAccessKey">reset_storage_account_access_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetStorageAccountSubscriptionId">reset_storage_account_subscription_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#create MssqlServerMicrosoftSupportAuditingPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#delete MssqlServerMicrosoftSupportAuditingPolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#read MssqlServerMicrosoftSupportAuditingPolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#update MssqlServerMicrosoftSupportAuditingPolicy#update}.

---

##### `reset_blob_storage_endpoint` <a name="reset_blob_storage_endpoint" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetBlobStorageEndpoint"></a>

```python
def reset_blob_storage_endpoint() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_log_monitoring_enabled` <a name="reset_log_monitoring_enabled" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetLogMonitoringEnabled"></a>

```python
def reset_log_monitoring_enabled() -> None
```

##### `reset_storage_account_access_key` <a name="reset_storage_account_access_key" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetStorageAccountAccessKey"></a>

```python
def reset_storage_account_access_key() -> None
```

##### `reset_storage_account_subscription_id` <a name="reset_storage_account_subscription_id" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetStorageAccountSubscriptionId"></a>

```python
def reset_storage_account_subscription_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MssqlServerMicrosoftSupportAuditingPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_server_microsoft_support_auditing_policy

mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_server_microsoft_support_auditing_policy

mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_server_microsoft_support_auditing_policy

mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_server_microsoft_support_auditing_policy

mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MssqlServerMicrosoftSupportAuditingPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MssqlServerMicrosoftSupportAuditingPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MssqlServerMicrosoftSupportAuditingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MssqlServerMicrosoftSupportAuditingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference">MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.blobStorageEndpointInput">blob_storage_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.logMonitoringEnabledInput">log_monitoring_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.serverIdInput">server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.storageAccountAccessKeyInput">storage_account_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.storageAccountSubscriptionIdInput">storage_account_subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts">MssqlServerMicrosoftSupportAuditingPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.blobStorageEndpoint">blob_storage_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.logMonitoringEnabled">log_monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.serverId">server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.storageAccountSubscriptionId">storage_account_subscription_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.timeouts"></a>

```python
timeouts: MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference">MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference</a>

---

##### `blob_storage_endpoint_input`<sup>Optional</sup> <a name="blob_storage_endpoint_input" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.blobStorageEndpointInput"></a>

```python
blob_storage_endpoint_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_monitoring_enabled_input`<sup>Optional</sup> <a name="log_monitoring_enabled_input" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.logMonitoringEnabledInput"></a>

```python
log_monitoring_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `server_id_input`<sup>Optional</sup> <a name="server_id_input" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.serverIdInput"></a>

```python
server_id_input: str
```

- *Type:* str

---

##### `storage_account_access_key_input`<sup>Optional</sup> <a name="storage_account_access_key_input" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.storageAccountAccessKeyInput"></a>

```python
storage_account_access_key_input: str
```

- *Type:* str

---

##### `storage_account_subscription_id_input`<sup>Optional</sup> <a name="storage_account_subscription_id_input" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.storageAccountSubscriptionIdInput"></a>

```python
storage_account_subscription_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MssqlServerMicrosoftSupportAuditingPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts">MssqlServerMicrosoftSupportAuditingPolicyTimeouts</a>]

---

##### `blob_storage_endpoint`<sup>Required</sup> <a name="blob_storage_endpoint" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.blobStorageEndpoint"></a>

```python
blob_storage_endpoint: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `log_monitoring_enabled`<sup>Required</sup> <a name="log_monitoring_enabled" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.logMonitoringEnabled"></a>

```python
log_monitoring_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

---

##### `storage_account_access_key`<sup>Required</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.storageAccountAccessKey"></a>

```python
storage_account_access_key: str
```

- *Type:* str

---

##### `storage_account_subscription_id`<sup>Required</sup> <a name="storage_account_subscription_id" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.storageAccountSubscriptionId"></a>

```python
storage_account_subscription_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlServerMicrosoftSupportAuditingPolicyConfig <a name="MssqlServerMicrosoftSupportAuditingPolicyConfig" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_server_microsoft_support_auditing_policy

mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  server_id: str,
  blob_storage_endpoint: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  log_monitoring_enabled: typing.Union[bool, IResolvable] = None,
  storage_account_access_key: str = None,
  storage_account_subscription_id: str = None,
  timeouts: MssqlServerMicrosoftSupportAuditingPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.serverId">server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#server_id MssqlServerMicrosoftSupportAuditingPolicy#server_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.blobStorageEndpoint">blob_storage_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#blob_storage_endpoint MssqlServerMicrosoftSupportAuditingPolicy#blob_storage_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#enabled MssqlServerMicrosoftSupportAuditingPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#id MssqlServerMicrosoftSupportAuditingPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.logMonitoringEnabled">log_monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#log_monitoring_enabled MssqlServerMicrosoftSupportAuditingPolicy#log_monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#storage_account_access_key MssqlServerMicrosoftSupportAuditingPolicy#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.storageAccountSubscriptionId">storage_account_subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#storage_account_subscription_id MssqlServerMicrosoftSupportAuditingPolicy#storage_account_subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts">MssqlServerMicrosoftSupportAuditingPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#server_id MssqlServerMicrosoftSupportAuditingPolicy#server_id}.

---

##### `blob_storage_endpoint`<sup>Optional</sup> <a name="blob_storage_endpoint" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.blobStorageEndpoint"></a>

```python
blob_storage_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#blob_storage_endpoint MssqlServerMicrosoftSupportAuditingPolicy#blob_storage_endpoint}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#enabled MssqlServerMicrosoftSupportAuditingPolicy#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#id MssqlServerMicrosoftSupportAuditingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_monitoring_enabled`<sup>Optional</sup> <a name="log_monitoring_enabled" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.logMonitoringEnabled"></a>

```python
log_monitoring_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#log_monitoring_enabled MssqlServerMicrosoftSupportAuditingPolicy#log_monitoring_enabled}.

---

##### `storage_account_access_key`<sup>Optional</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.storageAccountAccessKey"></a>

```python
storage_account_access_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#storage_account_access_key MssqlServerMicrosoftSupportAuditingPolicy#storage_account_access_key}.

---

##### `storage_account_subscription_id`<sup>Optional</sup> <a name="storage_account_subscription_id" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.storageAccountSubscriptionId"></a>

```python
storage_account_subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#storage_account_subscription_id MssqlServerMicrosoftSupportAuditingPolicy#storage_account_subscription_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.timeouts"></a>

```python
timeouts: MssqlServerMicrosoftSupportAuditingPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts">MssqlServerMicrosoftSupportAuditingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#timeouts MssqlServerMicrosoftSupportAuditingPolicy#timeouts}

---

### MssqlServerMicrosoftSupportAuditingPolicyTimeouts <a name="MssqlServerMicrosoftSupportAuditingPolicyTimeouts" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_server_microsoft_support_auditing_policy

mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#create MssqlServerMicrosoftSupportAuditingPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#delete MssqlServerMicrosoftSupportAuditingPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#read MssqlServerMicrosoftSupportAuditingPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#update MssqlServerMicrosoftSupportAuditingPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#create MssqlServerMicrosoftSupportAuditingPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#delete MssqlServerMicrosoftSupportAuditingPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#read MssqlServerMicrosoftSupportAuditingPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/mssql_server_microsoft_support_auditing_policy#update MssqlServerMicrosoftSupportAuditingPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference <a name="MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_server_microsoft_support_auditing_policy

mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts">MssqlServerMicrosoftSupportAuditingPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MssqlServerMicrosoftSupportAuditingPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts">MssqlServerMicrosoftSupportAuditingPolicyTimeouts</a>]

---



